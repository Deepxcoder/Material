export const themes = {
    glass: {
        name: 'glass',
        classes: 'bg-gradient-to-br from-gray-900 to-black text-white',
        card: 'bg-glass backdrop-blur-md border border-glassBorder',
        button: 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 transition-all',
        accent: 'text-blue-400',
    },
    gamified: {
        name: 'gamified',
        classes: 'bg-indigo-900 text-yellow-100',
        card: 'bg-indigo-800 border-2 border-yellow-400 shadow-[4px_4px_0px_0px_rgba(250,204,21,1)]',
        button: 'bg-yellow-400 hover:bg-yellow-300 text-indigo-900 font-bold border-2 border-yellow-200 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.5)] active:translate-y-1 active:shadow-none transition-all',
        accent: 'text-yellow-300',
    },
    tech: {
        name: 'tech',
        classes: 'bg-black text-green-400 font-mono',
        card: 'bg-gray-900 border border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.2)]',
        button: 'bg-green-900/20 hover:bg-green-900/40 text-green-400 border border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all',
        accent: 'text-green-500',
    },
    modern: {
        name: 'modern',
        classes: 'bg-[#F9FAFB] dark:bg-[#121212] text-gray-900 dark:text-[#F9FAFB] font-sans antialiased',
        card: 'bg-white dark:bg-[#1C1C1E] border border-gray-200 dark:border-[#2C2C2E] rounded-2xl shadow-sm hover:shadow-md transition-all duration-300',
        button: 'bg-gray-900 dark:bg-[#F9FAFB] text-[#F9FAFB] dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-white rounded-xl px-6 py-2.5 font-medium transition-all active:scale-[0.98]',
        accent: 'text-blue-600 dark:text-blue-400',
    },
    'dark-modern': {
        name: 'dark-modern',
        classes: 'bg-[#121212] text-[#F9FAFB] font-sans antialiased',
        card: 'bg-[#1C1C1E] border border-[#2C2C2E] rounded-2xl shadow-sm hover:shadow-md transition-all duration-300',
        button: 'bg-[#F9FAFB] text-gray-900 hover:bg-white rounded-xl px-6 py-2.5 font-medium transition-all active:scale-[0.98]',
        accent: 'text-blue-400',
    },
};
