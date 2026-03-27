import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
import { useXP } from "../../context/XPContext";
import Button from "../ui/Button";
import { LogOut, Sun, Moon, Zap, User } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
    const { user, logout } = useAuth();
    const { theme, toggleTheme, currentTheme } = useTheme();
    const { level, xp } = useXP();

    const handleThemeSwitch = () => {
        if (currentTheme === 'glass') toggleTheme('gamified');
        else if (currentTheme === 'gamified') toggleTheme('tech');
        else toggleTheme('glass');
    };

    const renderThemeIcon = () => {
        if (currentTheme === 'glass') return <Sun size={20} />;
        if (currentTheme === 'gamified') return <Zap size={20} />;
        return <Moon size={20} />;
    };

    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`fixed top-4 left-6 right-6 z-50 px-6 py-4 flex items-center justify-between glass-panel`}
        >
            <div className="flex items-center gap-4">
                <h1 className="text-xl font-bold tracking-tight">
                    Project <span className={theme.accent}>M</span>
                </h1>
                {user && (
                    <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono">
                        <span className={theme.accent}>LVL {level}</span>
                        <span className="text-gray-400">|</span>
                        <span>{xp} XP</span>
                    </div>
                )}
            </div>

            <div className="flex items-center gap-4">
                <Button variant="ghost" onClick={handleThemeSwitch} className="p-2 rounded-full hover-elevate">
                    {renderThemeIcon()}
                </Button>
                {user && (
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full glow-border flex items-center justify-center text-electric-blue font-bold text-sm bg-white/5">
                                {user.email?.[0].toUpperCase() || <User size={16} />}
                            </div>
                            <span className="hidden sm:block text-sm font-medium">{user.displayName || user.email?.split('@')[0]}</span>
                        </div>
                        <Button onClick={logout} className="text-sm px-3 py-1 bg-white/5 border border-white/10 hover-elevate glow-border text-white">
                            <LogOut size={16} className="mr-2" /> Logout
                        </Button>
                    </div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;
