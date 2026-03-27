import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../lib/utils";

const Button = ({ children, className, variant = "primary", ...props }) => {
    const { theme } = useTheme();

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "px-4 py-2 rounded-lg font-medium outline-none focus:ring-2 focus:ring-electric-blue border shadow-glass-inner transition-all flex items-center justify-center hover-elevate relative overflow-hidden",
                variant === "primary" ? "bg-electric-blue/20 hover:bg-electric-blue/30 text-electric-blue shadow-glow-blue border-electric-blue/50 text-glow" : "bg-white/5 border-white/10 text-white",
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
