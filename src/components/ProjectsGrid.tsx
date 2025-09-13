'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { placeholderImages } from './PlaceholderImages';
import { useLanguage } from '@/contexts/LanguageContext';

const ProjectsGrid = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      id: 1,
      titleKey: 'projects.snakeGame.title',
      descriptionKey: 'projects.snakeGame.description',
      image: 'https://i.postimg.cc/QdyBSMfz/Any-Conv-com-Screenshot-From-2025-09-12-17-53-54.webp',
      technologies: ['HTML 5', 'CSS3', 'JavaScript'],
      liveUrl: 'https://snaakegamee.netlify.app/',
      githubUrl: 'https://github.com/PpedroSoeiroo/snake-game',
      featured: true,
    },
    {
      id: 2,
      titleKey: 'projects.barbeariaReal.title',
      descriptionKey: 'projects.barbeariaReal.description',
      image: 'https://i.postimg.cc/6qqqdJdK/Any-Conv-com-Screenshot-From-2025-09-12-18-02-44.webp',
      technologies: ['HTML 5', 'CSS3', 'JavaScript', 'TypeScript'],
      liveUrl: 'https://barbeariareall.netlify.app/',
      githubUrl: 'https://github.com/PpedroSoeiroo/barbearia-real',
      featured: true,
    },
    {
      id: 3,
      titleKey: 'projects.erikaNutricionista.title',
      descriptionKey: 'projects.erikaNutricionista.description',
      image: 'https://i.postimg.cc/L5SXbgKH/Any-Conv-com-Screenshot-From-2025-09-12-18-19-21.webp',
      technologies: ['HTML', 'CSS', 'TypeScript', 'TailwindCSS'],
      liveUrl: 'https://erikanutricionista.netlify.app/',
      githubUrl: 'https://github.com/PpedroSoeiroo/erika-nutricionista',
      featured: false,
    },
    {
      id: 4,
      titleKey: 'projects.nutrizen.title',
      descriptionKey: 'projects.nutrizen.description',
      image: 'https://i.postimg.cc/zXjjpnZG/Any-Conv-com-Screenshot-From-2025-09-12-18-26-29.webp',
      technologies: ['HTML', 'CSS', 'TypeScript', 'TailwindCSS'],
      liveUrl: 'https://nutrizenn.netlify.app/',
      githubUrl: 'https://github.com/PpedroSoeiroo/nutrizen',
      featured: false,
    },
    {
      id: 5,
      titleKey: 'projects.microsaasTarefas.title',
      descriptionKey: 'projects.microsaasTarefas.description',
      image: 'https://i.postimg.cc/nLQSdCGS/Any-Conv-com-Screenshot-From-2025-09-12-18-36-05.webp',
      technologies: ['HTML', 'CSS', 'TypeScript', 'TailwindCSS'],
      liveUrl: 'https://liistadetarefass.netlify.app/',
      githubUrl: 'https://github.com/PpedroSoeiroo/microsaas-tarefas',
      featured: false,
    },
    {
      id: 6,
      titleKey: 'projects.cineseries.title',
      descriptionKey: 'projects.cineseries.description',
      image: 'https://i.postimg.cc/zXxJNcYZ/Any-Conv-com-Screenshot-From-2025-09-12-18-43-30.webp',
      technologies: ['HTML5', 'CSS3', 'TypeScript', 'JavaScript', 'API', 'Nodejs', 'API REST'],
      liveUrl: '#',
      githubUrl: 'https://github.com/PpedroSoeiroo/cineseries',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-16 sm:py-20 bg-gray-50 dark:bg-dark-800 mobile-padding-small">
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
                    {t('projects.title')}
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
              {t('projects.subtitle')}
            </motion.p>
          </div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 auto-rows-fr mobile-projects-grid">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard project={project} />
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
              href="https://github.com/PpedroSoeiroo"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-primary text-white font-semibold rounded-lg shadow-lg hover:shadow-glow transition-all duration-300 focus-ring text-sm sm:text-base"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              {t('projects.viewAll')}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
