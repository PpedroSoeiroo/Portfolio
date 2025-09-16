'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations
const translations = {
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.skills': 'Habilidades',
    'nav.certifications': 'Certificações',
    'nav.projects': 'Projetos',
    'nav.experiences': 'Experiências',
    'nav.contact': 'Contato',
    
    // Hero
    'hero.greeting': 'Olá, eu sou',
    'hero.title': 'Desenvolvedor Full Stack',
    'hero.subtitle': 'Crio experiências digitais incríveis com tecnologias web modernas. Especializado em React, Next.js, Node.js e muito mais.',
    'hero.cta.primary': 'Ver Projetos',
    'hero.cta.secondary': 'Baixar CV',
    
    // Typewriter texts
    'typewriter.fullstack': 'Desenvolvedor Full Stack',
    'typewriter.react': 'Desenvolvedor React',
    'typewriter.nextjs': 'Especialista Next.js',
    'typewriter.typescript': 'Especialista TypeScript',
    'typewriter.nodejs': 'Desenvolvedor Node.js',
    'typewriter.engineer': 'Engenheiro Full Stack',
    
    // About
    'about.title': 'Sobre Mim',
    'about.subtitle': 'Conheça um pouco mais sobre minha jornada',
    'about.description1': 'apaixonado, com mais de 3 anos de experiência criando soluções web modernas e eficientes. Minha paixão é transformar ideias em realidade através de código limpo e bem estruturado.',
    'about.description2': 'Especializo-me em tecnologias como React, Next.js, Node.js, TypeScript, Python e JavaScript, sempre buscando as melhores práticas e padrões da indústria. Acredito que a tecnologia deve ser acessível e resolver problemas reais.',
    'about.description3': 'Quando não estou codificando, você pode me encontrar explorando novas tecnologias, contribuindo para projetos open source ou compartilhando conhecimento com a comunidade de desenvolvedores.',
    
    // Skills
    'skills.title': 'Minhas Habilidades',
    'skills.subtitle': 'Tecnologias que domino',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Ferramentas & Outros',
    
    // Certifications
    'certifications.title': 'Certificações',
    'certifications.subtitle': 'Certificações profissionais e cursos que validam minha expertise',
    'certifications.higherEducation': 'Ensino Superior em Análise e Desenvolvimento de Sistemas',
    'certifications.dbAdmin': 'Administrador de Banco de Dados Certificado',
    'certifications.jsAdvanced': 'JavaScript (Avançado)',
    'certifications.cybersecurity': 'Princípios de Cibersegurança',
    'certifications.promptEngineering': 'Prompt Engineering for Everyone',
    'certifications.programmingLogic': 'Lógica de Programação',
    'certifications.cs50': 'CS50 - Harvard',
    'certifications.cybersecurityIBM': 'Cybersecurity Analyst Assessment - IBM',
    'certifications.dataScience': 'PH125 Data Science - Harvard',
    'certifications.dataEngineering': 'Fundamentos de Engenharia de Dados',
    'certifications.googleAnalytics': 'Google Analytics para Iniciantes - Google',
    'certifications.comptia': 'Cybersecurity Assessment: CompTIA Security+ & CYSA+ - IBM',
    'certifications.pythonAdvanced': 'Python - Avançado',
    'certifications.linuxFundamentals': 'Linux Fundamentals',
    
    // Projects
    'projects.title': 'Meus Projetos',
    'projects.subtitle': 'Alguns dos meus trabalhos recentes',
    'projects.featured': 'Projetos em Destaque',
    'projects.all': 'Todos os Projetos',
    'projects.demo': 'Ver Demo',
    'projects.code': 'Ver Código',
    'projects.viewAll': 'Ver Todos os Projetos',
    
    // Experiences
    'experiences.title': 'Experiências',
    'experiences.subtitle': 'Minha jornada profissional e projetos desenvolvidos',
    'experiences.current': 'Atual',
    'experiences.contact': 'Vamos Trabalhar Juntos',
    
    // Experience Details
    'experiences.freelancer.title': 'Desenvolvedor Full Stack Freelancer',
    'experiences.freelancer.company': 'Trabalho Autônomo',
    'experiences.freelancer.period': '2022 - Presente',
    'experiences.freelancer.description': 'Desenvolvimento de aplicações web completas para clientes diversos, desde landing pages até sistemas complexos. Especialização em React, Next.js, Node.js e TypeScript, sempre focando em soluções escaláveis e performáticas.',
    
    'experiences.webDeveloper.title': 'Desenvolvedor Web',
    'experiences.webDeveloper.company': 'Empresa de Tecnologia',
    'experiences.webDeveloper.period': '2022 - 2023',
    'experiences.webDeveloper.description': 'Desenvolvimento de interfaces web responsivas e sistemas backend robustos. Trabalho em equipe utilizando metodologias ágeis, contribuindo para projetos de grande escala com foco em qualidade e performance.',
    
    'experiences.frontendDev.title': 'Desenvolvedor Frontend',
    'experiences.frontendDev.company': 'Agência Digital',
    'experiences.frontendDev.period': '2020 - 2021',
    'experiences.frontendDev.description': 'Criação de interfaces modernas e interativas utilizando React e Vue.js. Desenvolvimento de componentes reutilizáveis e implementação de designs responsivos, sempre priorizando a experiência do usuário.',
    
    'experiences.dataVoice.title': 'Técnico em Informática e Atendimento',
    'experiences.dataVoice.company': 'Data Voice Informática',
    'experiences.dataVoice.period': 'Fevereiro/2021 - Dezembro/2024',
    'experiences.dataVoice.description': 'Atendimento ao cliente e suporte técnico. Edição básica de logos e documentos (Word, PDF, Excel). Personalização gráfica: criação de cardápios e cartões de visita. Manutenção e reparo de computadores, notebooks e impressoras.',
    
    'experiences.cef.title': 'Secretário',
    'experiences.cef.company': 'CEF',
    'experiences.cef.period': 'Fevereiro/2021 - Dezembro/2021',
    'experiences.cef.description': 'Atendimento ao cliente. Edição de documentos (Word, PDF, Excel). Emissão de boletos de pagamento, relatórios escolares e planilhas.',
    
    // Project Details
    'projects.snakeGame.title': 'Snake Game',
    'projects.snakeGame.description': 'Snake Game clássico',
    
    'projects.barbeariaReal.title': 'WebSite Barba Real',
    'projects.barbeariaReal.description': 'Website responsivo para barbearia desenvolvido em HTML5, CSS3, JavaScript e TypeScript. O projeto apresenta uma interface moderna e elegante, com seções de especialidades, serviços, galeria de cortes, preços, depoimentos e formulário de contato.\n\nO HTML5 garante a estrutura semântica, o CSS3 aplica design responsivo com grid e flexbox, o JavaScript adiciona interatividade (sliders, filtros, animações) e o TypeScript oferece tipagem estática e melhor organização do código.\n\nO resultado é um site otimizado, profissional e voltado para destacar a identidade da barbearia e facilitar a conexão com os clientes.',
    
    'projects.erikaNutricionista.title': 'Landing page Érika Letícia Nutricionista',
    'projects.erikaNutricionista.description': 'Landing page responsiva para nutricionista desenvolvido em HTML, CSS, TypeScript e TailwindCSS. O projeto apresenta design moderno e limpo, com foco em apresentação profissional, serviços, redes sociais e contato. O HTML organiza a estrutura semântica, o CSS complementa ajustes visuais, o TailwindCSS garante estilização rápida e responsiva com utilitários prontos, e o TypeScript adiciona segurança e melhor manutenção do código. O resultado é um site leve, otimizado e funcional, ideal para destacar a identidade profissional da nutricionista e facilitar o contato com clientes.',
    
    'projects.nutrizen.title': 'Landing Page NutriZen',
    'projects.nutrizen.description': 'Landing page NutriZen foi desenvolvido utilizando HTML5, CSS3, JavaScript e ReactJS, com foco em oferecer uma experiência moderna, responsiva e intuitiva para apresentação da clínica de nutrição.\n\nA estrutura semântica em HTML5 garante clareza e acessibilidade, enquanto o CSS3 aplica um design limpo e responsivo. O JavaScript adiciona dinamismo e interatividade, e o ReactJS possibilita a construção de componentes reutilizáveis, garantindo melhor organização e performance na aplicação.\n\nO projeto conta com seções de sobre, serviços, depoimentos e contato, além de chamadas para ação estratégicas, fortalecendo a identidade digital da clínica e facilitando a comunicação com os clientes.',
    
    'projects.microsaasTarefas.title': 'MicroSaas Lista de Tarefas',
    'projects.microsaasTarefas.description': 'Este é um microSaaS de Lista de Tarefas, desenvolvido para auxiliar na organização diária, com a possibilidade de exportar dados em XLS e PDF.\n\nO sistema conta com uma interface simples e responsiva, permitindo que o usuário adicione novas tarefas de forma prática e, em seguida, exporte sua lista em diferentes formatos para compartilhamento ou backup.\n\nHTML5: estrutura semântica da aplicação.\nCSS3: estilização com design minimalista e responsivo.\nJavaScript/TypeScript (caso tenha sido usado): controle das interações e lógica de exportação.\n\nFuncionalidades:\n• Adicionar e gerenciar tarefas.\n• Exportar lista em XLS.\n• Exportar lista em PDF.\n\nO projeto demonstra como um microSaaS simples pode entregar valor real, focando em produtividade e acessibilidade para usuários que precisam de uma ferramenta rápida e funcional.',
    
    'projects.cineseries.title': 'Site CineSeries',
    'projects.cineseries.description': 'Este projeto é um site de filmes e séries em desenvolvimento, criado com foco em exibir lançamentos, catálogos e informações detalhadas a partir de APIs externas.\n\nA aplicação será construída utilizando HTML5, CSS3 e JavaScript para estrutura e interatividade, com TypeScript garantindo tipagem estática e organização do código. O Node.js é utilizado no backend para consumo e integração de APIs REST, permitindo a listagem dinâmica de filmes, séries e suas respectivas informações (ano, nota, título e imagem).\n\n🔹 Principais Tecnologias e Recursos\n\nHTML5 & CSS3: estrutura e layout responsivo.\nJavaScript & TypeScript: lógica e tipagem estática para maior segurança.\nNode.js: integração com APIs REST e manipulação de dados dinâmicos.\nConsumo de API: exibição de filmes, séries, notas e categorias em tempo real.\n\nO objetivo final é entregar uma plataforma moderna e funcional de streaming, com design intuitivo e conteúdo atualizado diretamente de APIs.',
    
    // Contact
    'contact.title': 'Entre em Contato',
    'contact.subtitle': 'Vamos trabalhar juntos',
    'contact.form.name': 'Nome',
    'contact.form.email': 'Email',
    'contact.form.message': 'Mensagem',
    'contact.form.submit': 'Enviar Mensagem',
    'contact.form.sending': 'Enviando...',
    'contact.form.success': 'Obrigado! Sua mensagem foi enviada com sucesso. Entrarei em contato em breve.',
    'contact.form.error': 'Erro ao enviar mensagem. Tente novamente.',
    'contact.info.title': 'Informações de Contato',
    'contact.info.description': 'Tem um projeto em mente ou quer colaborar? Adoraria ouvir de você!',
    
    // Footer
    'footer.description': 'Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis e resolver problemas complexos com tecnologias web modernas.',
    'footer.contact': 'Informações de Contato',
    'footer.quickLinks': 'Links Rápidos',
    'footer.copyright': 'Todos os direitos reservados.',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Uso',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.certifications': 'Certifications',
    'nav.projects': 'Projects',
    'nav.experiences': 'Experiences',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hi, I\'m',
    'hero.title': 'Full Stack Developer',
    'hero.subtitle': 'I create amazing digital experiences with modern web technologies. Specialized in React, Next.js, Node.js and much more.',
    'hero.cta.primary': 'View Projects',
    'hero.cta.secondary': 'Download CV',
    
    // Typewriter texts
    'typewriter.fullstack': 'Full Stack Developer',
    'typewriter.react': 'React Developer',
    'typewriter.nextjs': 'Next.js Expert',
    'typewriter.typescript': 'TypeScript Specialist',
    'typewriter.nodejs': 'Node.js Developer',
    'typewriter.engineer': 'Full Stack Engineer',
    
    // About
    'about.title': 'About Me',
    'about.subtitle': 'Get to know a bit more about my journey',
    'about.description1': 'passionate, with more than 3 years of experience creating modern and efficient web solutions. My passion is transforming ideas into reality through clean and well-structured code.',
    'about.description2': 'I specialize in technologies like React, Next.js, Node.js, TypeScript, Python and JavaScript, always seeking the best practices and industry standards. I believe technology should be accessible and solve real problems.',
    'about.description3': 'When I\'m not coding, you can find me exploring new technologies, contributing to open source projects or sharing knowledge with the developer community.',
    
    // Skills
    'skills.title': 'My Skills',
    'skills.subtitle': 'Technologies I master',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Tools & Others',
    
    // Certifications
    'certifications.title': 'Certifications',
    'certifications.subtitle': 'Professional certifications and courses that validate my expertise',
    'certifications.higherEducation': 'Higher Education in Systems Analysis and Development',
    'certifications.dbAdmin': 'Certified Database Administrator',
    'certifications.jsAdvanced': 'JavaScript (Advanced)',
    'certifications.cybersecurity': 'Cybersecurity Principles',
    'certifications.promptEngineering': 'Prompt Engineering for Everyone',
    'certifications.programmingLogic': 'Programming Logic',
    'certifications.cs50': 'CS50 - Harvard',
    'certifications.cybersecurityIBM': 'Cybersecurity Analyst Assessment - IBM',
    'certifications.dataScience': 'PH125 Data Science - Harvard',
    'certifications.dataEngineering': 'Data Engineering Fundamentals',
    'certifications.googleAnalytics': 'Google Analytics for Beginners - Google',
    'certifications.comptia': 'Cybersecurity Assessment: CompTIA Security+ & CYSA+ - IBM',
    'certifications.pythonAdvanced': 'Python - Advanced',
    'certifications.linuxFundamentals': 'Linux Fundamentals',
    
    // Projects
    'projects.title': 'My Projects',
    'projects.subtitle': 'Some of my recent work',
    'projects.featured': 'Featured Projects',
    'projects.all': 'All Projects',
    'projects.demo': 'View Demo',
    'projects.code': 'View Code',
    'projects.viewAll': 'View All Projects',
    
    // Experiences
    'experiences.title': 'Experiences',
    'experiences.subtitle': 'My professional journey and developed projects',
    'experiences.current': 'Current',
    'experiences.contact': 'Let\'s Work Together',
    
    // Experience Details
    'experiences.freelancer.title': 'Full Stack Developer Freelancer',
    'experiences.freelancer.company': 'Self-Employed',
    'experiences.freelancer.period': '2022 - Present',
    'experiences.freelancer.description': 'Development of complete web applications for diverse clients, from landing pages to complex systems. Specialization in React, Next.js, Node.js and TypeScript, always focusing on scalable and performant solutions.',
    
    'experiences.webDeveloper.title': 'Web Developer',
    'experiences.webDeveloper.company': 'Technology Company',
    'experiences.webDeveloper.period': '2022 - 2023',
    'experiences.webDeveloper.description': 'Development of responsive web interfaces and robust backend systems. Teamwork using agile methodologies, contributing to large-scale projects with focus on quality and performance.',
    
    'experiences.frontendDev.title': 'Frontend Developer',
    'experiences.frontendDev.company': 'Digital Agency',
    'experiences.frontendDev.period': '2020 - 2021',
    'experiences.frontendDev.description': 'Creation of modern and interactive interfaces using React and Vue.js. Development of reusable components and implementation of responsive designs, always prioritizing user experience.',
    
    'experiences.dataVoice.title': 'IT Technician & Customer Service',
    'experiences.dataVoice.company': 'Data Voice Informática',
    'experiences.dataVoice.period': 'February/2021 - December/2024',
    'experiences.dataVoice.description': 'Customer service and technical support. Basic editing of logos and documents (Word, PDF, Excel). Graphic customization: creation of menus and business cards. Maintenance and repair of computers, laptops, and printers.',
    
    'experiences.cef.title': 'Secretary',
    'experiences.cef.company': 'CEF',
    'experiences.cef.period': 'February/2021 - December/2021',
    'experiences.cef.description': 'Customer service. Document editing (Word, PDF, Excel). Issuance of payment slips, school reports, and spreadsheets.',
    
    // Project Details
    'projects.snakeGame.title': 'Snake Game',
    'projects.snakeGame.description': 'Classic Snake Game',
    
    'projects.barbeariaReal.title': 'Barba Real Website',
    'projects.barbeariaReal.description': 'Responsive website for barbershop developed with HTML5, CSS3, JavaScript and TypeScript. The project features a modern and elegant interface, with sections for specialties, services, haircut gallery, prices, testimonials and contact form.\n\nHTML5 ensures semantic structure, CSS3 applies responsive design with grid and flexbox, JavaScript adds interactivity (sliders, filters, animations) and TypeScript offers static typing and better code organization.\n\nThe result is an optimized, professional website focused on highlighting the barbershop\'s identity and facilitating connection with clients.',
    
    'projects.erikaNutricionista.title': 'Érika Letícia Nutritionist Landing Page',
    'projects.erikaNutricionista.description': 'Responsive landing page for nutritionist developed with HTML, CSS, TypeScript and TailwindCSS. The project features modern and clean design, focusing on professional presentation, services, social media and contact. HTML organizes semantic structure, CSS complements visual adjustments, TailwindCSS ensures fast and responsive styling with ready utilities, and TypeScript adds security and better code maintenance. The result is a light, optimized and functional website, ideal for highlighting the nutritionist\'s professional identity and facilitating contact with clients.',
    
    'projects.nutrizen.title': 'NutriZen Landing Page',
    'projects.nutrizen.description': 'NutriZen landing page was developed using HTML5, CSS3, JavaScript and ReactJS, focusing on offering a modern, responsive and intuitive experience for nutrition clinic presentation.\n\nSemantic structure in HTML5 ensures clarity and accessibility, while CSS3 applies clean and responsive design. JavaScript adds dynamism and interactivity, and ReactJS enables building reusable components, ensuring better organization and application performance.\n\nThe project includes sections about, services, testimonials and contact, plus strategic calls to action, strengthening the clinic\'s digital identity and facilitating communication with clients.',
    
    'projects.microsaasTarefas.title': 'MicroSaaS Task List',
    'projects.microsaasTarefas.description': 'This is a Task List microSaaS, developed to assist in daily organization, with the possibility of exporting data in XLS and PDF.\n\nThe system features a simple and responsive interface, allowing users to add new tasks practically and then export their list in different formats for sharing or backup.\n\nHTML5: semantic application structure.\nCSS3: styling with minimalist and responsive design.\nJavaScript/TypeScript (if used): interaction control and export logic.\n\nFeatures:\n• Add and manage tasks.\n• Export list to XLS.\n• Export list to PDF.\n\nThe project demonstrates how a simple microSaaS can deliver real value, focusing on productivity and accessibility for users who need a fast and functional tool.',
    
    'projects.cineseries.title': 'CineSeries Website',
    'projects.cineseries.description': 'This project is a movies and series website in development, created with focus on displaying releases, catalogs and detailed information from external APIs.\n\nThe application will be built using HTML5, CSS3 and JavaScript for structure and interactivity, with TypeScript ensuring static typing and code organization. Node.js is used in the backend for consumption and integration of REST APIs, enabling dynamic listing of movies, series and their respective information (year, rating, title and image).\n\n🔹 Main Technologies and Resources\n\nHTML5 & CSS3: responsive structure and layout.\nJavaScript & TypeScript: logic and static typing for greater security.\nNode.js: REST API integration and dynamic data manipulation.\nAPI consumption: real-time display of movies, series, ratings and categories.\n\nThe final goal is to deliver a modern and functional streaming platform, with intuitive design and content updated directly from APIs.',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Let\'s work together',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Thank you! Your message has been sent successfully. I\'ll get back to you soon.',
    'contact.form.error': 'Error sending message. Please try again.',
    'contact.info.title': 'Contact Information',
    'contact.info.description': 'Have a project in mind or want to collaborate? I\'d love to hear from you!',
    
    // Footer
    'footer.description': 'Full Stack Developer passionate about creating amazing digital experiences and solving complex problems with modern web technologies.',
    'footer.contact': 'Contact Info',
    'footer.quickLinks': 'Quick Links',
    'footer.copyright': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
