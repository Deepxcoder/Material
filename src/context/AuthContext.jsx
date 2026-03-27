import { createContext, useContext, useEffect, useState } from "react";
import { auth, googleProvider, githubProvider } from "../services/firebase";
import {
    onAuthStateChanged,
    signInWithPopup,
    signInWithRedirect,
    getRedirectResult,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    updateProfile,
    RecaptchaVerifier,
    signInWithPhoneNumber,
    sendSignInLinkToEmail,
    isSignInWithEmailLink,
    signInWithEmailLink
} from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(!!auth);

    useEffect(() => {
        if (!auth) {
            return;
        }

        // Handle Redirect Result
        getRedirectResult(auth).catch((error) => {
            console.error("Redirect Login Error:", error);
        });

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    const loginEmail = (email, password) => {
        if (!auth) {
            // Demo Mode
            if (email === "demo@projectm.com" && password === "demo123") {
                const demoUser = {
                    uid: "demo-user-123",
                    email: "demo@projectm.com",
                    displayName: "Demo User",
                    photoURL: null
                };
                setUser(demoUser);
                return Promise.resolve({ user: demoUser });
            }
            return Promise.reject(new Error("Firebase not configured & Invalid Demo Credentials"));
        }
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signupEmail = (email, password) => {
        if (!auth) throw new Error("Firebase not configured");
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginGoogle = () => {
        if (!auth) throw new Error("Firebase not configured");
        return signInWithRedirect(auth, googleProvider);
    };

    const loginGithub = () => {
        if (!auth) throw new Error("Firebase not configured");
        return signInWithPopup(auth, githubProvider);
    };

    const logout = () => {
        if (!auth) {
            setUser(null);
            return Promise.resolve();
        }
        return signOut(auth);
    };

    const updateUserProfile = (profile) => {
        if (!auth) throw new Error("Firebase not configured");
        return updateProfile(auth.currentUser, profile);
    }

    const setupRecaptcha = (containerId) => {
        if (!auth) throw new Error("Firebase not configured");
        return new RecaptchaVerifier(auth, containerId, {
            size: 'invisible',
            callback: (response) => {
                // reCAPTCHA solved
                console.log("reCAPTCHA solved");
            }
        });
    };

    const sendPhoneOtp = (phoneNumber, appVerifier) => {
        if (!auth) throw new Error("Firebase not configured");
        return signInWithPhoneNumber(auth, phoneNumber, appVerifier);
    };

    const verifyPhoneOtp = (confirmationResult, otp) => {
        return confirmationResult.confirm(otp);
    };

    const sendEmailLinkAuth = (email) => {
        if (!auth) throw new Error("Firebase not configured");
        const actionCodeSettings = {
            url: window.location.origin + '/dashboard', // Adjust URL as needed
            handleCodeInApp: true,
        };
        return sendSignInLinkToEmail(auth, email, actionCodeSettings);
    };

    const completeEmailLinkSignIn = async (email, windowUrl) => {
        if (!auth) throw new Error("Firebase not configured");
        if (isSignInWithEmailLink(auth, windowUrl)) {
            let emailToUse = email;
            if (!emailToUse) {
                // User opened the link on a different device. To prevent session fixation
                // attacks, ask the user to provide the associated email again. For example:
                emailToUse = window.prompt('Please provide your email for confirmation');
            }
            return signInWithEmailLink(auth, emailToUse, windowUrl);
        }
    };

    const value = {
        user,
        loginEmail,
        signupEmail,
        loginGoogle,
        loginGithub,
        logout,
        updateUserProfile,
        setupRecaptcha,
        sendPhoneOtp,
        verifyPhoneOtp,
        sendEmailLinkAuth,
        completeEmailLinkSignIn,
        isSignInWithEmailLink: (url) => isSignInWithEmailLink(auth, url),
        isConfigured: !!auth
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
