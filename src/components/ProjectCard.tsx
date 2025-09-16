'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Project {
  id: number;
  titleKey: string;
  descriptionKey: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();
  
  // Ensure each card has a unique state
  const cardId = `project-card-${project.id}`;

  const handleCardClick = (e: React.MouseEvent) => {
    // Prevent expansion if clicking on links
    if ((e.target as HTMLElement).closest('a')) {
      return;
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      key={cardId}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white dark:bg-dark-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col h-full mobile-project-card"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Image Container */}
      <div className="relative h-48 lg:h-56 overflow-hidden mobile-project-image">
        <Image
          src={project.image}
          alt={t(project.titleKey)}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
        />
        
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
        />
        
        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {project.liveUrl === '#' ? (
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-gray-400 text-white font-semibold rounded-lg shadow-lg cursor-not-allowed opacity-75"
            >
              Em Breve
            </motion.div>
          ) : (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-200 focus-ring"
            >
              Live Demo
            </motion.a>
          )}
        </motion.div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 mobile-project-title">
          {t(project.titleKey)}
        </h3>
        
        <p className={`text-gray-600 dark:text-gray-300 mb-4 transition-all duration-300 flex-grow mobile-project-description ${
          isExpanded ? 'line-clamp-none' : 'line-clamp-3'
        }`}>
          {t(project.descriptionKey)}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="px-3 py-1 bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-auto">
          {/* Expand/Collapse Indicator */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {isExpanded ? 'Clique para recolher' : 'Clique para expandir'}
            </div>
            
            {isExpanded && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(false);
                }}
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            )}
          </div>

          {/* Action Buttons - Mobile */}
          <div className="lg:hidden">
            {project.liveUrl === '#' ? (
              <div className="w-full px-4 py-2 bg-gray-400 text-white text-center font-semibold rounded-lg cursor-not-allowed opacity-75">
                Em Breve
              </div>
            ) : (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-2 bg-primary-600 text-white text-center font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 focus-ring"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Hover Effect Border */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary origin-left"
      />
    </motion.div>
  );
};

export default ProjectCard;
