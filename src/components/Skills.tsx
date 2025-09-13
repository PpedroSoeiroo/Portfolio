'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();
  
  const skillCategories = [
    {
      title: t('skills.frontend'),
      icon: '💻',
      skills: [
        { name: 'React', level: 95, color: 'from-blue-500 to-blue-600' },
        { name: 'Next.js', level: 90, color: 'from-gray-800 to-gray-900' },
        { name: 'TypeScript', level: 88, color: 'from-blue-600 to-blue-700' },
        { name: 'JavaScript', level: 92, color: 'from-yellow-500 to-yellow-600' },
        { name: 'Tailwind CSS', level: 85, color: 'from-cyan-500 to-cyan-600' },
        { name: 'HTML/CSS', level: 90, color: 'from-orange-500 to-orange-600' },
      ],
    },
    {
      title: t('skills.backend'),
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 88, color: 'from-green-500 to-green-600' },
        { name: 'Python', level: 80, color: 'from-yellow-600 to-yellow-700' },
        { name: 'MongoDB', level: 78, color: 'from-green-600 to-green-700' },
        { name: 'Supabase', level: 82, color: 'from-emerald-500 to-emerald-600' },
        { name: 'REST APIs', level: 90, color: 'from-purple-500 to-purple-600' },
        { name: 'API', level: 85, color: 'from-indigo-500 to-indigo-600' },
      ],
    },
    {
      title: t('skills.tools'),
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 92, color: 'from-orange-600 to-orange-700' },
        { name: 'GitHub', level: 90, color: 'from-gray-800 to-gray-900' },
        { name: 'Cursor', level: 88, color: 'from-blue-600 to-blue-700' },
        { name: 'Figma', level: 80, color: 'from-pink-500 to-pink-600' },
        { name: 'VS Code', level: 95, color: 'from-blue-500 to-blue-600' },
        { name: 'Linux', level: 85, color: 'from-gray-700 to-gray-800' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 relative overflow-hidden mobile-padding-small">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 sm:opacity-30">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary-200 dark:bg-primary-800 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-blue-200 dark:bg-blue-800 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mobile-section-title font-script">
                  <span className="bg-gradient-to-r from-primary-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {t('skills.title')}
                  </span>
                </h2>
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
              {t('skills.subtitle')}
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mobile-skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: categoryIndex * 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/20 dark:border-dark-700/50 overflow-hidden mobile-skill-card">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-500/20 via-blue-500/20 to-purple-500/20 blur-sm"></div>
                    <div className="absolute inset-[1px] rounded-3xl bg-white/80 dark:bg-dark-800/80"></div>
                  </motion.div>

                  <div className="relative z-10">
                    {/* Header */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + categoryIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center mb-6 sm:mb-8"
                    >
                      <motion.div
                        className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-primary-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 mobile-skill-icon"
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 5,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <motion.span 
                          className="text-2xl sm:text-3xl"
                          animate={{ 
                            y: [0, -3, 0],
                            transition: { 
                              duration: 2, 
                              repeat: Infinity, 
                              ease: "easeInOut",
                              delay: categoryIndex * 0.5
                            }
                          }}
                        >
                          {category.icon}
                        </motion.span>
                      </motion.div>
                      
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 mobile-skill-title">
                        {category.title}
                      </h3>
                      
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '60px' }}
                        transition={{ duration: 0.8, delay: 0.5 + categoryIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="h-1 bg-gradient-to-r from-primary-500 to-blue-600 rounded-full mx-auto"
                      />
                    </motion.div>
                    
                    {/* Skills */}
                    <div className="space-y-4 sm:space-y-5">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.6, 
                            delay: 0.4 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          whileHover={{ x: 5 }}
                          viewport={{ once: true }}
                          className="group/skill"
                        >
                          <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                            <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm sm:text-base lg:text-lg group-hover/skill:text-primary-600 dark:group-hover/skill:text-primary-400 transition-colors duration-300">
                              {skill.name}
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                              {skill.level}%
                            </span>
                          </div>
                          
                          <div className="relative h-2.5 sm:h-3 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden mobile-progress-bar">
                            <motion.div
                              className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ 
                                duration: 1.5, 
                                delay: 0.8 + skillIndex * 0.1,
                                ease: [0.25, 0.46, 0.45, 0.94]
                              }}
                              viewport={{ once: true }}
                            >
                              {/* Shimmer Effect */}
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                animate={{ 
                                  x: ['-100%', '100%'],
                                  transition: { 
                                    duration: 2, 
                                    repeat: Infinity, 
                                    ease: "easeInOut",
                                    delay: 1.5 + skillIndex * 0.1
                                  }
                                }}
                              />
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;