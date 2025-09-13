'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.08, y: -3 }}
      whileTap={{ scale: 0.95 }}
      className="relative flex items-center justify-center w-16 h-11 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:border-primary-400/60 dark:hover:border-primary-500/60 hover:shadow-xl hover:shadow-primary-500/10 dark:hover:shadow-primary-400/10 transition-all duration-500 focus-ring group overflow-hidden backdrop-blur-sm"
      aria-label={`Switch to ${language === 'pt' ? 'English' : 'Português'}`}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary-500/8 via-primary-600/12 to-primary-500/8 rounded-2xl"
        initial={false}
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 2
        }}
      />
      
      {/* Floating particles effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        initial={false}
        animate={{
          background: [
            'radial-gradient(circle at 20% 20%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 20%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity
        }}
      />
      
      {/* Language options container */}
      <motion.div
        className="relative flex items-center justify-between w-full px-2 z-10"
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* PT Option */}
        <motion.div
          className={`flex items-center justify-center w-6 h-6 rounded-xl transition-all duration-400 ${
            language === 'pt' 
              ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/40 scale-110' 
              : 'text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 hover:scale-105'
          }`}
          whileHover={{ scale: language === 'pt' ? 1.1 : 1.15 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: language === 'pt' ? [-1, 1, -1] : 0,
            rotate: language === 'pt' ? [0, 2, -2, 0] : 0,
          }}
          transition={{
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <span className="text-xs font-bold">PT</span>
        </motion.div>
        
        {/* Animated separator */}
        <motion.div
          className="flex items-center justify-center"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <div className="w-0.5 h-4 bg-gradient-to-b from-transparent via-primary-400/60 to-transparent rounded-full" />
        </motion.div>
        
        {/* EN Option */}
        <motion.div
          className={`flex items-center justify-center w-6 h-6 rounded-xl transition-all duration-400 ${
            language === 'en' 
              ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/40 scale-110' 
              : 'text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 hover:scale-105'
          }`}
          whileHover={{ scale: language === 'en' ? 1.1 : 1.15 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: language === 'en' ? [-1, 1, -1] : 0,
            rotate: language === 'en' ? [0, -2, 2, 0] : 0,
          }}
          transition={{
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <span className="text-xs font-bold">EN</span>
        </motion.div>
      </motion.div>
      
      {/* Active state glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/20 to-primary-600/20"
        initial={false}
        animate={{
          opacity: language === 'pt' ? [0, 0.4, 0] : [0, 0.4, 0],
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut"
        }}
      />
      
      {/* Hover effect overlay */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/5 to-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      
      {/* Subtle border animation */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-transparent"
        animate={{
          borderColor: [
            'rgba(14, 165, 233, 0)',
            'rgba(14, 165, 233, 0.3)',
            'rgba(14, 165, 233, 0)',
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Micro-interaction indicator */}
      <motion.div
        className="absolute top-1 right-1 w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500"
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.button>
  );
};

export default LanguageToggle;
