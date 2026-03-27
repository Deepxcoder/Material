import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { Home, BookOpen, Settings, BarChart2, Music } from "lucide-react";
import { motion } from "framer-motion";

const Sidebar = () => {
    const { theme, currentTheme } = useTheme();
    const location = useLocation();

    const links = [
        { name: "Dashboard", path: "/dashboard", icon: Home },
        { name: "Subjects", path: "/subjects", icon: BookOpen },
        { name: "Study Mode", path: "/study", icon: Music },
        { name: "Stats", path: "/stats", icon: BarChart2 },
        { name: "Settings", path: "/settings", icon: Settings },
    ];

    return (
        <motion.aside
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="fixed left-6 top-28 bottom-6 w-64 p-4 hidden md:flex flex-col gap-3 glass-panel overflow-y-auto"
        >
            {links.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;

                return (
                    <Link to={link.path} key={link.path} className="relative">
                        <div
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${isActive
                                ? "bg-electric-blue/20 text-electric-blue border border-electric-blue/30 shadow-glow-blue"
                                : "text-gray-400 hover:bg-white/10 hover:text-white hover:border-white/20 border border-transparent hover-elevate"
                                }`}
                        >
                            <Icon size={20} />
                            <span className="font-medium">{link.name}</span>
                            {isActive && (
                                <motion.div
                                    layoutId="activeNavIndicator"
                                    className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-electric-blue shadow-glow-blue"
                                />
                            )}
                        </div>
                    </Link>
                );
            })}
        </motion.aside>
    );
};

export default Sidebar;
