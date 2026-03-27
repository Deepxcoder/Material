import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../lib/utils";

const Card = ({ children, className, ...props }) => {
    const { theme } = useTheme();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            className={cn(
                "p-6 glass-panel hover-elevate transition-all duration-300",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
