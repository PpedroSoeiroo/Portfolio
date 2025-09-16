'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { placeholderImages } from './PlaceholderImages';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-16 sm:py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block mb-4 sm:mb-6"
            >
              <div className="relative">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 font-script"
                >
                  <span className="bg-gradient-to-r from-primary-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {t('about.title')}
                  </span>
                </motion.h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="h-1 bg-gradient-to-r from-primary-500 via-blue-600 to-purple-600 rounded-full"
                />
              </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-start order-2 lg:order-1"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-80 md:h-80 lg:w-96 lg:h-96"
                >
                  <Image
                    src={placeholderImages.aboutImage}
                    alt="Pedro Soeiro working on laptop"
                    fill
                    className="rounded-2xl object-cover shadow-2xl"
                    style={{ objectPosition: 'center 30%' }}
                    sizes="(max-width: 475px) 256px, (max-width: 640px) 288px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 384px"
                  />
                </motion.div>
                
                {/* Decorative elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 border-2 sm:border-4 border-primary-200 dark:border-primary-800 rounded-full opacity-50"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 border-2 sm:border-4 border-primary-300 dark:border-primary-700 rounded-full opacity-30"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6 order-1 lg:order-2"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Meu nome é Pedro Soeiro, tenho 27 anos e sou um Desenvolvedor Full Stack
              </h3>
              
              <div className="space-y-3 sm:space-y-4 text-gray-600 dark:text-gray-300">
                <p className="text-base sm:text-lg leading-relaxed text-justify tracking-normal">
                  {t('about.description1')}
                </p>
                
                <p className="text-base sm:text-lg leading-relaxed text-justify tracking-normal">
                  {t('about.description2')}
                </p>
                
                <p className="text-base sm:text-lg leading-relaxed text-justify tracking-normal">
                  {t('about.description3')}
                </p>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4 sm:gap-6 pt-6 sm:pt-8"
              >
                {[
                  { number: '17+', label: 'Projects' },
                  { number: '3+', label: 'Years Experience' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1 sm:mb-2">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="pt-4 sm:pt-6"
              >
                <motion.a
                  href="https://drive.google.com/file/d/1It7zpgEr7acTejJ8KwiqPozLIadABE_T/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-primary text-white font-semibold rounded-lg shadow-lg hover:shadow-glow transition-all duration-300 focus-ring text-sm sm:text-base"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
