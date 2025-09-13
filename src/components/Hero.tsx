'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SocialLinks from './SocialLinks';
import { placeholderImages } from './PlaceholderImages';
import { useLanguage } from '@/contexts/LanguageContext';
import TypewriterText from './TypewriterText';

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    window.open('https://drive.google.com/file/d/1It7zpgEr7acTejJ8KwiqPozLIadABE_T/view?usp=sharing', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden mobile-hero-compact">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-dark-800 dark:to-dark-900">
        <div className="absolute inset-0 opacity-50">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center mobile-hero-grid">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left order-2 lg:order-1 mobile-hero-text-second"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-4 sm:mb-6 mt-8 sm:mt-12 lg:mt-16"
            >
              <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight whitespace-nowrap mobile-hero-title">
                {t('hero.greeting')}{' '}
                <span className="text-gradient">Pedro Soeiro</span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-primary-600 dark:text-primary-400 mb-4 sm:mb-6 min-h-[1.5em] mobile-hero-subtitle">
                <TypewriterText 
                  textKeys={[
                    'typewriter.fullstack',
                    'typewriter.react',
                    'typewriter.nextjs',
                    'typewriter.typescript',
                    'typewriter.nodejs',
                    'typewriter.engineer'
                  ]}
                  translate={t}
                  className="text-primary-600 dark:text-primary-400"
                  typingSpeed={80}
                  deletingSpeed={40}
                  pauseTime={1500}
                />
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-6 sm:mb-8 mobile-hero-description">
                {t('hero.subtitle')}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col xs:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mb-8 sm:mb-10 mobile-hero-buttons"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(14, 165, 233, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-primary text-white font-semibold rounded-lg shadow-lg hover:shadow-glow transition-all duration-300 focus-ring text-xs sm:text-sm mobile-hero-button"
              >
                {t('hero.cta.primary')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadCV}
                className="px-3 sm:px-4 py-2 sm:py-2.5 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 focus-ring text-xs sm:text-sm mobile-hero-button"
              >
                {t('hero.cta.secondary')}
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <SocialLinks />
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2 mobile-hero-image-first"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-14 h-14 sm:w-18 sm:h-18 lg:w-20 lg:h-20 xl:w-24 xl:h-24 border-2 sm:border-4 border-primary-200 dark:border-primary-800 rounded-full opacity-50 mobile-hero-decoration"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 border-2 sm:border-4 border-primary-300 dark:border-primary-700 rounded-full opacity-30 mobile-hero-decoration"
              />
              
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative w-56 h-56 xs:w-64 xs:h-64 sm:w-72 sm:h-72 md:w-72 md:h-72 lg:w-72 lg:h-72 xl:w-80 xl:h-80 mobile-hero-image"
              >
                <Image
                  src={placeholderImages.avatar}
                  alt="Pedro Soeiro - Full Stack Developer"
                  fill
                  className="rounded-full object-cover shadow-2xl"
                  style={{ objectPosition: 'center top' }}
                  priority
                  sizes="(max-width: 475px) 224px, (max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 288px, 320px"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 mobile-scroll-indicator"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 sm:h-3 bg-primary-500 rounded-full mt-1.5 sm:mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
