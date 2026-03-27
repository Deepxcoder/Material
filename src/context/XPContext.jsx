import { createContext, useContext, useState, useEffect } from "react";

const XPContext = createContext();

export const useXP = () => useContext(XPContext);

export const XPProvider = ({ children }) => {
    const [xp, setXp] = useState(0);

    const calculateLevel = (currentXP) => {
        return Math.floor(Math.sqrt(currentXP / 100));
    };

    const level = calculateLevel(xp);

    useEffect(() => {
        // Trigger confetti or animation here when level acts like a dependency step
        if (level > 0) {
            console.log("Level Up!", level);
        }
    }, [level]);

    const addXP = (amount) => {
        setXp(prev => prev + amount);
        // Here we would also sync with Firebase
    };

    const value = {
        xp,
        level,
        addXP,
        nextLevelXP: Math.pow(level + 1, 2) * 100
    };

    return (
        <XPContext.Provider value={value}>
            {children}
        </XPContext.Provider>
    );
};
