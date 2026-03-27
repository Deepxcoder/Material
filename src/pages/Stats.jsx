import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";

const Stats = () => {
    return (
        <motion.div variants={fadeInUp} initial="initial" animate="animate" className="p-6 md:p-2 pt-2">
            <div className="glass-panel p-8">
                <h1 className="text-3xl font-bold mb-6 text-white text-glow">Statistics</h1>
                <p className="text-gray-400 mb-8">View your detailed study progress.</p>
                {/* Charts and graphs would go here */}
            </div>
        </motion.div>
    );
};

export default Stats;
