import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useXP } from "../context/XPContext";
import { useTheme } from "../context/ThemeContext";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { Play, Pause, RotateCcw, Music, CheckCircle } from "lucide-react";
import { loginToSpotify } from "../services/spotify";

const Study = () => {
    const { addXP } = useXP();
    const { theme } = useTheme();
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);
    const [sessionCount, setSessionCount] = useState(0);

    const handleSessionComplete = useCallback(() => {
        addXP(20); // +20 XP for study session
        setSessionCount(prev => prev + 1);
        alert("Session Complete! +20 XP"); // Replace with nice toast/modal
    }, [addXP]);

    useEffect(() => {
        let interval = null;
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((timeLeft) => timeLeft - 1);
            }, 1000);
        } else if (isActive && timeLeft === 0) {
            setTimeout(() => {
                setIsActive(false);
                handleSessionComplete();
            }, 0);
        }
        return () => clearInterval(interval);
    }, [isActive, timeLeft, handleSessionComplete]);

    const toggleTimer = () => setIsActive(!isActive);

    const resetTimer = () => {
        setIsActive(false);
        setTimeLeft(25 * 60);
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className={`min-h-[80vh] flex flex-col items-center justify-center p-6 relative z-0 transition-colors duration-1000 ${isActive ? 'bg-black/40 shadow-[inset_0_0_100px_rgba(0,0,0,1)] rounded-3xl' : ''}`}>
            {isActive && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-1] rounded-3xl">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-blue/10 rounded-full blur-[100px] animate-pulse-glow"></div>
                </div>
            )}
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center w-full max-w-2xl relative z-10"
            >
                <h1 className="text-4xl font-bold mb-4 text-glow text-white">Focus Mode</h1>
                <p className="text-gray-400 mb-8">Distractions blocked. Music ready.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Timer Section */}
                    <Card className={`flex flex-col items-center justify-center py-12 relative overflow-hidden transition-all duration-700 ${isActive ? 'glass-heavy border-electric-blue/50 shadow-glow-blue' : ''}`}>
                        {isActive && <div className="absolute inset-0 bg-study-glow opacity-30 animate-breathe mix-blend-screen pointer-events-none"></div>}
                        <div className={`text-6xl font-mono font-bold mb-8 relative z-10 text-transparent bg-clip-text bg-gradient-to-b ${isActive ? 'from-electric-blue to-white drop-shadow-[0_0_15px_rgba(0,229,255,0.8)]' : 'from-white to-gray-400 drop-shadow-md'}`}>
                            {formatTime(timeLeft)}
                        </div>

                        <div className="flex items-center gap-4">
                            <Button onClick={toggleTimer} className="px-8 flex items-center gap-2">
                                {isActive ? <><Pause size={20} /> Pause</> : <><Play size={20} /> Start</>}
                            </Button>
                            <Button variant="outline" onClick={resetTimer} className="p-3">
                                <RotateCcw size={20} />
                            </Button>
                        </div>

                        <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                            <CheckCircle size={16} />
                            <span>{sessionCount} sessions completed today</span>
                        </div>
                    </Card>

                    {/* Spotify Section */}
                    <Card className="flex flex-col items-center justify-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5 text-electric-blue pointer-events-none">
                            <Music size={150} />
                        </div>
                        <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-white shadow-glass-inner">
                            <Music size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Spotify Focus</h3>
                        <p className="text-gray-400 text-sm mb-6 text-center">
                            Connect your Spotify account to listen to focus playlists.
                        </p>
                        <Button
                            onClick={loginToSpotify}
                            className="bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.3)]"
                        >
                            Connect Spotify
                        </Button>
                    </Card>
                </div>
            </motion.div>
        </div>
    );
};

export default Study;
