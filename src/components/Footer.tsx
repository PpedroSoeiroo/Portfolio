'use client';

import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-900 dark:bg-black text-white py-8 sm:py-12">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="sm:col-span-2 lg:col-span-2"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gradient mb-3 sm:mb-4">Pedro Soeiro</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 max-w-md">
                {t('footer.description')}
              </p>
              <SocialLinks />
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{t('footer.quickLinks')}</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {[
                  { name: t('nav.home'), href: '#home' },
                  { name: t('nav.about'), href: '#about' },
                  { name: t('nav.skills'), href: '#skills' },
                  { name: t('nav.certifications'), href: '#certifications' },
                  { name: t('nav.projects'), href: '#projects' },
                  { name: t('nav.contact'), href: '#contact' },
                ].map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => {
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-sm sm:text-base text-gray-300 hover:text-primary-400 transition-colors duration-200 focus-ring rounded"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{t('footer.contact')}</h4>
              <div className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-300">
                <p>pedrobaruc622@gmail.com</p>
                <p>(91) 98154-5349</p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="border-t border-gray-700 pt-6 sm:pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-xs sm:text-sm">
                © {currentYear} Pedro Soeiro. {t('footer.copyright')}
              </p>
              
              <div className="flex items-center space-x-4 sm:space-x-6">
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-primary-400 text-xs sm:text-sm transition-colors duration-200 focus-ring rounded"
                >
                  {t('footer.privacy')}
                </a>
                <a
                  href="/terms"
                  className="text-gray-400 hover:text-primary-400 text-xs sm:text-sm transition-colors duration-200 focus-ring rounded"
                >
                  {t('footer.terms')}
                </a>
              </div>

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-primary-600 hover:bg-primary-700 rounded-full transition-colors duration-200 focus-ring"
                aria-label="Back to top"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
