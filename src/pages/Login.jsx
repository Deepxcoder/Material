import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [countryCode, setCountryCode] = useState("+91");
    const [otp, setOtp] = useState("");
    const [loginMethod, setLoginMethod] = useState("email"); // email, phone, link
    const [isSignup, setIsSignup] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [linkSent, setLinkSent] = useState(false);
    const [confirmationResult, setConfirmationResult] = useState(null);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const { loginEmail, signupEmail, loginGoogle, loginGithub, setupRecaptcha, sendPhoneOtp, verifyPhoneOtp, sendEmailLinkAuth, isSignInWithEmailLink, completeEmailLinkSignIn } = useAuth();
    const navigate = useNavigate();

    // Check for Magic Link sign-in on mount
    useEffect(() => {
        if (isSignInWithEmailLink(window.location.href)) {
            let emailForSignIn = window.localStorage.getItem('emailForSignIn');
            // If missing email, prompt user for it
            if (!emailForSignIn) {
                emailForSignIn = window.prompt('Please provide your email for confirmation');
            }
            if (emailForSignIn) {
                completeEmailLinkSignIn(emailForSignIn, window.location.href)
                    .then((result) => {
                        window.localStorage.removeItem('emailForSignIn');
                        navigate("/dashboard");
                    })
                    .catch((err) => {
                        setError("Error signing in with link: " + err.message);
                    });
            }
        }
    }, [isSignInWithEmailLink, completeEmailLinkSignIn, navigate]);

    // Setup Recaptcha for Phone Auth
    useEffect(() => {
        if (loginMethod === 'phone' && !window.recaptchaVerifier) {
            window.recaptchaVerifier = setupRecaptcha('recaptcha-container');
        }
    }, [loginMethod, setupRecaptcha]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setMessage("");

        if (isSignup && loginMethod === "email" && password !== confirmPassword) {
            return setError("Passwords do not match");
        }

        try {
            if (loginMethod === "email") {
                if (isSignup) {
                    await signupEmail(email, password);
                } else {
                    await loginEmail(email, password);
                }
                navigate("/dashboard");
            } else if (loginMethod === "link") {
                await sendEmailLinkAuth(email);
                setLinkSent(true);
                setMessage("Magic link sent! Check your email.");
                window.localStorage.setItem('emailForSignIn', email);
            } else if (loginMethod === "phone") {
                if (!otpSent) {
                    const fullPhoneNumber = `${countryCode}${phone}`;
                    const appVerifier = window.recaptchaVerifier;
                    const result = await sendPhoneOtp(fullPhoneNumber, appVerifier);
                    setConfirmationResult(result);
                    setOtpSent(true);
                    setMessage(`OTP sent via SMS to ${fullPhoneNumber}`);
                } else {
                    await verifyPhoneOtp(confirmationResult, otp.trim());
                    navigate("/dashboard");
                }
            }
        } catch (err) {
            console.error("Auth Error:", err);
            if (err.code === 'auth/invalid-credential' || err.code === 'auth/invalid-verification-code') {
                setError(loginMethod === "phone" ? "Invalid verification code. Please check and try again." : "Invalid credentials provided.");
                if (loginMethod === "phone") setOtp("");
            } else if (err.code === 'auth/invalid-phone-number') {
                setError("The phone number format is invalid.");
            } else if (err.code === 'auth/too-many-requests') {
                setError("Too many attempts. Please try again later.");
            } else if (err.code === 'auth/email-already-in-use') {
                setError("This email is already registered. Please log in.");
            } else {
                setError(err.message || "Authentication failed.");
            }
        }
    };

    const handleProviderLogin = async (providerFunc) => {
        try {
            await providerFunc();
            navigate("/dashboard");
        } catch (err) {
            setError("Failed to log in with provider: " + err.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-navy-base">
            {/* Background Animation */}
            <div className="absolute inset-0 bg-ambient-glow -z-10 mix-blend-screen opacity-50"></div>
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-electric-blue/10 rounded-full blur-[100px] animate-pulse-glow -z-10"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-glow/10 rounded-full blur-[100px] animate-breathe -z-10"></div>

            <motion.div variants={fadeInUp} initial="initial" animate="animate" className="w-full max-w-md px-4">
                <Card className="w-full glass-heavy shadow-[0_0_50px_rgba(0,229,255,0.1)]">
                    <h2 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-purple-glow drop-shadow-[0_0_10px_rgba(0,229,255,0.4)]">
                        {isSignup ? "Create Account" : "Welcome Back"}
                    </h2>

                    {error && <div className="bg-red-500/20 text-red-200 p-3 rounded-md mb-4 text-sm">{error}</div>}
                    {message && <div className="bg-green-500/20 text-green-200 p-3 rounded-md mb-4 text-sm">{message}</div>}

                    <div className="flex justify-center flex-wrap gap-2 mb-6">
                        <button
                            onClick={() => { setLoginMethod("email"); setError(""); setMessage(""); }}
                            className={`px-4 py-1.5 text-sm rounded-full transition-all duration-300 ${loginMethod === 'email' ? 'bg-electric-blue/20 text-electric-blue border border-electric-blue/50 shadow-glow-blue' : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'}`}
                        >Email</button>
                        <button
                            onClick={() => { setLoginMethod("link"); setError(""); setMessage(""); }}
                            className={`px-4 py-1.5 text-sm rounded-full transition-all duration-300 ${loginMethod === 'link' ? 'bg-purple-glow/20 text-purple-300 border border-purple-glow/50 shadow-glow-purple' : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'}`}
                        >Link</button>
                        <button
                            onClick={() => { setLoginMethod("phone"); setError(""); setMessage(""); }}
                            className={`px-4 py-1.5 text-sm rounded-full transition-all duration-300 ${loginMethod === 'phone' ? 'bg-white/20 text-white border border-white/50 shadow-[0_0_15px_rgba(255,255,255,0.3)]' : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'}`}
                        >Phone</button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {(loginMethod === "email" || loginMethod === "link") && (
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-electric-blue focus:shadow-glow-blue outline-none transition-all duration-300 text-white placeholder-gray-500"
                                    placeholder="student@university.edu"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={linkSent}
                                />
                            </div>
                        )}

                        {loginMethod === "email" && (
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
                                <input
                                    type="password"
                                    required
                                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-electric-blue focus:shadow-glow-blue outline-none transition-all duration-300 text-white"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        )}

                        {loginMethod === "email" && isSignup && (
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Confirm Password</label>
                                <input
                                    type="password"
                                    required
                                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-white"
                                    placeholder="••••••••"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                        )}

                        {loginMethod === "phone" && !otpSent && (
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                                <div className="flex space-x-2">
                                    <select
                                        value={countryCode}
                                        onChange={(e) => setCountryCode(e.target.value)}
                                        className="w-24 px-2 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-electric-blue focus:shadow-glow-blue outline-none transition-all duration-300 text-white appearance-none cursor-pointer"
                                    >
                                        <option value="+91" className="bg-navy-dark text-white">IN (+91)</option>
                                        <option value="+1" className="bg-navy-dark text-white">US (+1)</option>
                                        <option value="+44" className="bg-navy-dark text-white">UK (+44)</option>
                                        <option value="+61" className="bg-navy-dark text-white">AU (+61)</option>
                                    </select>
                                    <input
                                        type="tel"
                                        required
                                        className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-electric-blue focus:shadow-glow-blue outline-none transition-all duration-300 text-white"
                                        placeholder="1234567890"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))} // Allow only digits
                                    />
                                </div>
                            </div>
                        )}

                        {loginMethod === "phone" && otpSent && (
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Verfication Code</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-electric-blue focus:shadow-glow-blue outline-none transition-all duration-300 text-white tracking-widest text-center"
                                    placeholder="123456"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                            </div>
                        )}

                        {/* ReCAPTCHA Container for Phone Auth */}
                        <div id="recaptcha-container"></div>

                        <Button type="submit" className="w-full mt-4 !bg-electric-blue/20 hover:!bg-electric-blue/30 text-electric-blue shadow-glow-blue border border-electric-blue/50 transition-all font-bold tracking-wider py-3">
                            {loginMethod === "email" ? (isSignup ? "Create Account" : "Sign In") :
                                loginMethod === "link" ? (linkSent ? "Link Sent" : "Send Magic Link") :
                                    (otpSent ? "Verify Code" : (isSignup ? "Sign Up via SMS" : "Send OTP"))}
                        </Button>
                    </form>

                    <div className="mt-8">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/10"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 text-gray-400 bg-navy-base rounded-full border border-white/5">Or continue with</span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <Button variant="outline" onClick={() => handleProviderLogin(loginGoogle)} className="w-full !bg-white/5 border-white/10 hover:!bg-white/10 shadow-glass-inner">
                                Google
                            </Button>
                            <Button variant="outline" onClick={() => handleProviderLogin(loginGithub)} className="w-full !bg-white/5 border-white/10 hover:!bg-white/10 shadow-glass-inner">
                                GitHub
                            </Button>
                        </div>
                    </div>

                    <p className="mt-8 text-center text-sm text-gray-400">
                        {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
                        <button
                            type="button"
                            onClick={() => {
                                setIsSignup(!isSignup);
                                setError("");
                                setMessage("");
                            }}
                            className="font-medium text-blue-400 hover:text-blue-300 hover:underline transition-all"
                        >
                            {isSignup ? "Log in" : "Sign up"}
                        </button>
                    </p>
                </Card>
            </motion.div>
        </div>
    );
};

export default Login;
