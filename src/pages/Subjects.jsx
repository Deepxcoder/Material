import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";

const Subjects = () => {
    return (
        <motion.div variants={fadeInUp} initial="initial" animate="animate" className="p-6 md:p-2 pt-2">
            <div className="glass-panel p-8">
                <h1 className="text-3xl font-bold mb-6 text-white text-glow">Subjects</h1>
                <p className="text-gray-400">Select a subject to view materials.</p>
                {/* Subject list implementation would go here */}
            </div>
        </motion.div>
    );
};

export default Subjects;
