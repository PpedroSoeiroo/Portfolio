'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const Experiences = () => {
  const { t } = useLanguage();
  
  const experiences = [
    {
      id: 1,
      titleKey: 'experiences.freelancer.title',
      companyKey: 'experiences.freelancer.company',
      periodKey: 'experiences.freelancer.period',
      descriptionKey: 'experiences.freelancer.description',
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Python'],
      type: 'Freelance',
      current: true,
    },
    {
      id: 2,
      titleKey: 'experiences.dataVoice.title',
      companyKey: 'experiences.dataVoice.company',
      periodKey: 'experiences.dataVoice.period',
      descriptionKey: 'experiences.dataVoice.description',
      technologies: ['Suporte Técnico', 'Manutenção', 'Design Gráfico', 'Office', 'Hardware'],
      type: 'Full-time',
      current: false,
    },
    {
      id: 3,
      titleKey: 'experiences.webDeveloper.title',
      companyKey: 'experiences.webDeveloper.company',
      periodKey: 'experiences.webDeveloper.period',
      descriptionKey: 'experiences.webDeveloper.description',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js'],
      type: 'Full-time',
      current: false,
    },
    {
      id: 4,
      titleKey: 'experiences.cef.title',
      companyKey: 'experiences.cef.company',
      periodKey: 'experiences.cef.period',
      descriptionKey: 'experiences.cef.description',
      technologies: ['Atendimento', 'Office', 'Gestão', 'Documentação'],
      type: 'Full-time',
      current: false,
    },
    {
      id: 5,
      titleKey: 'experiences.frontendDev.title',
      companyKey: 'experiences.frontendDev.company',
      periodKey: 'experiences.frontendDev.period',
      descriptionKey: 'experiences.frontendDev.description',
      technologies: ['React', 'Vue.js', 'TypeScript', 'TailwindCSS'],
      type: 'Contract',
      current: false,
    },
  ];

  return (
    <section id="experiences" className="py-16 sm:py-20 bg-white dark:bg-dark-900 mobile-padding-small">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
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
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mobile-section-title font-script"
                >
                  <span className="bg-gradient-to-r from-primary-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {t('experiences.title')}
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
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 mobile-section-subtitle"
            >
              {t('experiences.subtitle')}
            </motion.p>
          </div>

          {/* Experiences Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-4 sm:left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-blue-600 to-purple-600 hidden sm:block" />
            
            <div className="space-y-8 sm:space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start sm:items-center"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-2 sm:left-6 md:left-10 top-6 w-4 h-4 bg-gradient-to-r from-primary-500 to-blue-600 rounded-full border-4 border-white dark:border-dark-900 shadow-lg hidden sm:block" />
                  
                  {/* Experience Card */}
                  <div className="ml-8 sm:ml-16 md:ml-20 w-full">
                    <div className="bg-white dark:bg-dark-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 border border-gray-200 dark:border-dark-700">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                              {t(experience.titleKey)}
                            </h3>
                            {experience.current && (
                              <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full">
                                {t('experiences.current')}
                              </span>
                            )}
                          </div>
                          <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm sm:text-base">
                            {t(experience.companyKey)}
                          </p>
                        </div>
                        <div className="mt-2 sm:mt-0 sm:text-right">
                          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                            {t(experience.periodKey)}
                          </p>
                          <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 rounded-full mt-1">
                            {experience.type}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                        {t(experience.descriptionKey)}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 dark:bg-dark-700 dark:text-gray-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12 sm:mt-16"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-primary text-white font-semibold rounded-lg shadow-lg hover:shadow-glow transition-all duration-300 focus-ring text-sm sm:text-base"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t('experiences.contact')}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experiences;
