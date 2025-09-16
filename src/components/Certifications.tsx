'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const Certifications = () => {
  const { t } = useLanguage();
  const [selectedCert, setSelectedCert] = useState<any>(null);

  const certifications = [
    { name: t('certifications.higherEducation'), color: 'from-indigo-600 to-purple-600', isHarvard: false, isIBM: false, isIFRS: false, isCybersecurity: false, isDataEngineering: false, isGoogle: false, isSENAI: false, isPython: false, isLinux: false, isJavaScript: false, isHigherEducation: true, previewUrl: null, hasSensitiveData: false },
    { name: t('certifications.dbAdmin'), color: 'from-blue-500 to-blue-600', isHarvard: false, isIBM: false, isIFRS: true, isCybersecurity: false, isDataEngineering: false, isGoogle: false, isSENAI: false, isPython: false, isLinux: false, isJavaScript: false, previewUrl: 'https://i.postimg.cc/5yxjjWRb/Any-Conv-com-Screenshot-From-2025-09-12-17-26-22-1.webp', hasSensitiveData: false },
    { name: t('certifications.jsAdvanced'), color: 'from-yellow-500 to-yellow-600', isHarvard: false, isIBM: false, isIFRS: false, isCybersecurity: false, isDataEngineering: false, isGoogle: false, isSENAI: false, isPython: false, isLinux: false, isJavaScript: true, previewUrl: 'https://i.postimg.cc/NMC5zz04/Any-Conv-com-Screenshot-From-2025-09-12-17-21-39.webp', hasSensitiveData: false },
    { name: t('certifications.cybersecurity'), color: 'from-red-500 to-red-600', isHarvard: false, isIBM: false, isIFRS: false, isCybersecurity: true, isDataEngineering: false, isGoogle: false, isSENAI: false, isPython: false, isLinux: false, isJavaScript: false, previewUrl: 'https://i.postimg.cc/vmd9rk1x/Any-Conv-com-Screenshot-From-2025-09-12-17-20-29.webp', hasSensitiveData: false },
    { name: t('certifications.promptEngineering'), color: 'from-purple-500 to-purple-600', isHarvard: false, isIBM: true, isIFRS: false, isCybersecurity: false, isDataEngineering: false, isGoogle: false, isSENAI: false, isPython: false, isLinux: false, isJavaScript: false, previewUrl: 'https://i.postimg.cc/Z55CFmHQ/Any-Conv-com-Screenshot-From-2025-09-12-16-58-10.webp', hasSensitiveData: false },
    { name: t('certifications.programmingLogic'), color: 'from-green-500 to-green-600', isHarvard: false, isIBM: false, isIFRS: false, isCybersecurity: false, isDataEngineering: false, isGoogle: false, isSENAI: true, isPython: false, isLinux: false, isJavaScript: false, previewUrl: 'https://i.postimg.cc/fRWQVTCV/Any-Conv-com-Screenshot-From-2025-09-12-17-14-54.webp', hasSensitiveData: false },
    { name: t('certifications.cs50'), color: 'from-indigo-500 to-indigo-600', isHarvard: true, isIBM: false, isIFRS: false, isCybersecurity: false, isDataEngineering: false, isGoogle: false, isSENAI: false, isPython: false, isLinux: false, isJavaScript: false, previewUrl: 'https://i.postimg.cc/K81ghFTM/Any-Conv-com-Screenshot-From-2025-09-12-17-09-00.webp', hasSensitiveData: false },
    { name: t('certifications.cybersecurityIBM'), color: 'from-orange-500 to-orange-600', isHarvard: false, isIBM: true, isIFRS: false, isCybersecurity: false, isDataEngineering: false, isGoogle: false, isSENAI: false, isPython: false, isLinux: false, isJavaScript: false, previewUrl: 'https://i.postimg.cc/850q3RgW/Any-Conv-com-Screenshot-From-2025-09-12-17-12-53.webp', hasSensitiveData: false },
    { name: t('certifications.dataScience'), color: 'from-cyan-500 to-cyan-600', isHarvard: true, isIBM: false, isIFRS: false, isCybersecurity: false, isDataEngineering: false, isGoogle: false, isSENAI: false, isPython: false, isLinux: false, isJavaScript: false, previewUrl: 'https://i.postimg.cc/RFKDPjGr/Any-Conv-com-Screenshot-From-2025-09-12-17-16-18.webp', hasSensitiveData: false },
    { name: t('certifications.dataEngineering'), color: 'from-gray-500 to-gray-600', isHarvard: false, isIBM: false, isIFRS: false, isCybersecurity: false, isDataEngineering: true, isGoogle: false, isSENAI: false, isPython: false, isLinux: false, isJavaScript: false, previewUrl: 'https://i.postimg.cc/kXXT86rP/Any-Conv-com-Screenshot-From-2025-09-12-17-18-57.webp', hasSensitiveData: false },
    { name: t('certifications.googleAnalytics'), color: 'from-emerald-500 to-emerald-600', isHarvard: false, isIBM: false, isIFRS: false, isCybersecurity: false, isDataEngineering: false, isGoogle: true, isSENAI: false, isPython: false, isLinux: false, isJavaScript: false, previewUrl: 'https://i.postimg.cc/CKfP1W3Z/Any-Conv-com-Screenshot-From-2025-09-12-17-17-38.webp', hasSensitiveData: false },
    { name: t('certifications.comptia'), color: 'from-amber-500 to-amber-600', isHarvard: false, isIBM: true, isIFRS: false, isCybersecurity: false, isDataEngineering: false, isGoogle: false, isSENAI: false, isPython: false, isLinux: false, isJavaScript: false, previewUrl: 'https://i.postimg.cc/qvKMG7nj/Any-Conv-com-Screenshot-From-2025-09-12-17-11-01.webp', hasSensitiveData: false },
    { name: t('certifications.pythonAdvanced'), color: 'from-green-600 to-green-700', isHarvard: false, isIBM: false, isIFRS: false, isCybersecurity: false, isDataEngineering: false, isGoogle: false, isSENAI: false, isPython: true, isLinux: false, isJavaScript: false, previewUrl: null, hasSensitiveData: false },
    { name: t('certifications.linuxFundamentals'), color: 'from-slate-500 to-slate-600', isHarvard: false, isIBM: false, isIFRS: false, isCybersecurity: false, isDataEngineering: false, isGoogle: false, isSENAI: false, isPython: false, isLinux: true, isJavaScript: false, previewUrl: null, hasSensitiveData: false },
  ];

  return (
    <section id="certifications" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 relative overflow-hidden mobile-padding-small">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-15 sm:opacity-20">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary-200 dark:bg-primary-800 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-blue-200 dark:bg-blue-800 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-block mb-4 sm:mb-6">
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 mobile-section-title font-script">
                  <span className="bg-gradient-to-r from-primary-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {t('certifications.title')}
                  </span>
                </h2>
                <div className="h-1 bg-gradient-to-r from-primary-500 via-blue-600 to-purple-600 rounded-full" />
              </div>
            </div>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 mobile-section-subtitle">
              {t('certifications.subtitle')}
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mobile-certifications-grid">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className="group"
              >
                <div className="relative bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/20 dark:border-dark-700/50 overflow-hidden h-40 sm:h-44 lg:h-48 flex flex-col justify-center items-center group/card mobile-certification-card">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Static Border */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-500/20 via-blue-500/20 to-purple-500/20 blur-sm"></div>
                    <div className="absolute inset-[1px] rounded-3xl bg-white/80 dark:bg-dark-800/80"></div>
                  </div>
                  
                  {/* Certificate Icon */}
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    {cert.isHarvard ? (
                      <div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-3 sm:mb-4 mobile-certification-icon">
                      <img 
                        src="https://i.postimg.cc/Bn1NYZLb/Any-Conv-com-harvard-university-seeklogo-1.webp"
                        alt="Harvard University Logo"
                        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 filter drop-shadow-2xl brightness-125 contrast-150 saturate-130"
                        style={{
                          mixBlendMode: 'multiply',
                          backgroundColor: 'transparent'
                        }}
                      />
                    </div>
                    ) : cert.isIBM ? (
                      <div className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-3 sm:mb-4 mobile-certification-icon">
                      <img 
                        src="https://i.postimg.cc/1t6gnttx/Any-Conv-com-ibm.webp"
                        alt="IBM Logo"
                        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 filter drop-shadow-2xl brightness-125 contrast-150 saturate-130"
                        style={{
                          mixBlendMode: 'multiply',
                          backgroundColor: 'transparent'
                        }}
                      />
                    </div>
                    ) : cert.isIFRS ? (
                      <div className="relative flex items-center justify-center w-20 h-20 mb-4">
                      <img 
                        src="https://i.postimg.cc/xjP08HRG/Any-Conv-com-Adobe-Express-file.webp"
                        alt="IFRS Logo"
                        className="w-20 h-20 filter drop-shadow-2xl brightness-125 contrast-150 saturate-130"
                        style={{
                          mixBlendMode: 'difference',
                          backgroundColor: 'transparent',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                    ) : cert.isCybersecurity ? (
                      <div className="relative flex items-center justify-center w-16 h-16 mb-4">
                      <img 
                        src="https://i.postimg.cc/qqrD3NpW/Any-Conv-com-Adobe-Express-file-1.webp"
                        alt="Cybersecurity Logo"
                        className="w-16 h-16 filter drop-shadow-2xl brightness-135 contrast-175 saturate-140"
                        style={{
                          mixBlendMode: 'multiply',
                          backgroundColor: 'transparent',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                    ) : cert.isDataEngineering ? (
                      <div className="relative flex items-center justify-center w-16 h-16 mb-4">
                      <img 
                        src="https://i.postimg.cc/5t1mgZhF/Any-Conv-com-18689183-1.webp"
                        alt="Data Engineering Logo"
                        className="w-16 h-16 filter drop-shadow-2xl brightness-125 contrast-150 saturate-130"
                        style={{
                          mixBlendMode: 'multiply',
                          backgroundColor: 'transparent',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                    ) : cert.isGoogle ? (
                      <div className="relative flex items-center justify-center w-16 h-16 mb-4">
                      <img 
                        src="https://i.postimg.cc/BnNChh4Y/icons8-google-logo-96.png"
                        alt="Google Logo"
                        className="w-16 h-16 filter drop-shadow-2xl brightness-125 contrast-150 saturate-130"
                        style={{
                          mixBlendMode: 'multiply',
                          backgroundColor: 'transparent',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                    ) : cert.isSENAI ? (
                      <div className="relative flex items-center justify-center w-20 h-20 mb-4">
                      <img 
                        src="https://i.postimg.cc/R09jtpGg/Any-Conv-com-senai-logo-2.webp"
                        alt="SENAI Logo"
                        className="w-20 h-20 filter drop-shadow-2xl brightness-125 contrast-150 saturate-130"
                        style={{
                          mixBlendMode: 'multiply',
                          backgroundColor: 'transparent',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                    ) : cert.isPython ? (
                      <div className="relative flex items-center justify-center w-16 h-16 mb-4">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                        alt="Python Logo"
                        className="w-16 h-16 filter drop-shadow-2xl brightness-125 contrast-150 saturate-130"
                        style={{
                          mixBlendMode: 'multiply',
                          backgroundColor: 'transparent',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                    ) : cert.isLinux ? (
                      <div className="relative flex items-center justify-center w-16 h-16 mb-4">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg"
                        alt="Linux Logo"
                        className="w-16 h-16 filter drop-shadow-2xl brightness-125 contrast-150 saturate-130"
                        style={{
                          mixBlendMode: 'multiply',
                          backgroundColor: 'transparent',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                    ) : cert.isJavaScript ? (
                      <div className="relative flex items-center justify-center w-16 h-16 mb-4">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
                        alt="JavaScript Logo"
                        className="w-16 h-16 filter drop-shadow-2xl brightness-125 contrast-150 saturate-130"
                        style={{
                          mixBlendMode: 'multiply',
                          backgroundColor: 'transparent',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                    ) : cert.isHigherEducation ? (
                      <div className="relative flex items-center justify-center w-16 h-16 mb-4">
                      <div className={`relative flex items-center justify-center w-16 h-16 bg-gradient-to-br ${cert.color} rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300`}>
                        <svg 
                          className="w-8 h-8 text-white filter drop-shadow-lg" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                          <path d="M2 17L12 22L22 17"/>
                          <path d="M2 12L12 17L22 12"/>
                        </svg>
                        
                        {/* Certificate Badge */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-dark-800 group-hover:scale-110 transition-transform duration-300">
                          <svg 
                            className="w-4 h-4 text-white" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path 
                              fillRule="evenodd" 
                              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                              clipRule="evenodd" 
                            />
                          </svg>
                          
                          {/* Shine Effect */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                    </div>
                    ) : (
                      <div className="relative flex items-center justify-center w-16 h-16 mb-4">
                      <div className={`relative flex items-center justify-center w-16 h-16 bg-gradient-to-br ${cert.color} rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300`}>
                        <svg 
                          className="w-8 h-8 text-white filter drop-shadow-lg" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"/>
                          <path d="M12 7C10.34 7 9 8.34 9 10C9 11.66 10.34 13 12 13C13.66 13 15 11.66 15 10C15 8.34 13.66 7 12 7ZM12 11C11.45 11 11 10.55 11 10C11 9.45 11.45 9 12 9C12.55 9 13 9.45 13 10C13 10.55 12.55 11 12 11Z"/>
                          <path d="M7 15H17V17H7V15Z"/>
                          <path d="M9 19H15V21H9V19Z"/>
                        </svg>
                        
                        {/* Certificate Badge */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-dark-800 group-hover:scale-110 transition-transform duration-300">
                          <svg 
                            className="w-4 h-4 text-white" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path 
                              fillRule="evenodd" 
                              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                              clipRule="evenodd" 
                            />
                          </svg>
                          
                          {/* Shine Effect */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                    </div>
                  )}
                    
                    {/* Certification Name */}
                    <h3 className="text-center text-gray-900 dark:text-white font-bold text-xs sm:text-sm leading-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 px-1 sm:px-2 mobile-certification-title">
                      {cert.name}
                    </h3>
                  </div>

                  {/* Certificate Preview */}
                  {cert.previewUrl && (
                    <div className="absolute inset-0 bg-black/90 backdrop-blur-sm rounded-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center z-50">
                      <div 
                        className="relative max-w-xs max-h-64 p-4 cursor-pointer hover:scale-105 transition-transform duration-200"
                        onClick={() => setSelectedCert(cert)}
                      >
                        <img 
                          src={cert.previewUrl}
                          alt={`${cert.name} Certificate Preview`}
                          className="w-full h-auto rounded-lg shadow-2xl border-2 border-white/20"
                        />
                        <div className="absolute top-2 right-2 bg-white/90 dark:bg-dark-800/90 rounded-full p-1">
                          <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="absolute bottom-2 left-2 bg-primary-500/90 text-white text-xs px-2 py-1 rounded-full">
                          Clique para ampliar
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-xl z-[100] flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.7, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl max-h-[95vh] bg-white/95 dark:bg-dark-800/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-white/20 dark:border-dark-700/50 mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-sm"></div>
            <div className="absolute inset-[1px] bg-white/95 dark:bg-dark-800/95 backdrop-blur-xl rounded-3xl"></div>

            {/* Modal Header */}
            <div className="relative z-10 flex items-center justify-between p-4 sm:p-6 lg:p-8 border-b border-white/20 dark:border-dark-700/50 bg-gradient-to-r from-white/50 to-white/30 dark:from-dark-800/50 dark:to-dark-800/30">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                    {selectedCert.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">Certificado Oficial</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 sm:p-3 hover:bg-white/20 dark:hover:bg-dark-700/50 rounded-lg sm:rounded-xl transition-all duration-200 group"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="relative z-10 p-4 sm:p-6 lg:p-8 overflow-auto max-h-[calc(95vh-160px)] sm:max-h-[calc(95vh-180px)] lg:max-h-[calc(95vh-200px)]">
              <div className="flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="relative group"
                >
                  <img 
                    src={selectedCert.previewUrl}
                    alt={`${selectedCert.name} Certificate`}
                    className="max-w-full h-auto rounded-xl sm:rounded-2xl shadow-2xl border-2 border-white/30 dark:border-dark-600/30 hover:shadow-3xl transition-all duration-300"
                  />
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="relative z-10 flex items-center justify-between p-4 sm:p-6 lg:p-8 border-t border-white/20 dark:border-dark-700/50 bg-gradient-to-r from-white/30 to-white/20 dark:from-dark-800/30 dark:to-dark-800/20">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-md sm:rounded-lg flex items-center justify-center">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">Verificado</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Certificado autêntico</p>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 bg-gradient-to-r from-primary-500 to-blue-600 hover:from-primary-600 hover:to-blue-700 text-white rounded-lg sm:rounded-xl transition-all duration-200 font-medium shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  Fechar
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Certifications;