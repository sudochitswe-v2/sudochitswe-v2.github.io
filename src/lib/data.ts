export const PROFILE_DATA = {
  name: 'Chit Swe',
  title: 'Full Stack Developer',
  introduction:
    'A passionate and responsible Full Stack Developer with a knack for creative thinking and teamwork. Eager to learn new technologies and build innovative solutions.',
  contact: {
    email: 'chitswe.dev@gmail.com',
  },
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/sudochitswe',
    github: 'https://github.com/sudochitswe-v2',
    mastodon: "https://burma.social/@sudo_chitswe",
  },
};

export const SKILLS_BY_LEVEL = {
  Expert: [
    'C#',
    '.NET Core',
    'DBMS',
    'Git',
  ],
  Intermediate: [
    'HTML',
    'CSS',
    'Flutter',
    'Linux',
    'React.js',
    'Dart',
    'JavaScript',
    'Firebase',
  ],
  Beginner: ['Docker', 'Tableau', 'Azure'],
};

export const SOFT_SKILLS = [
  'Communication',
  'Creative thinking',
  'Innovative',
  'Tolerant',
  'Flexible',
  'Responsible',
  'Willing to learn',
  'Teamwork',
  'Leadership',
];

export const EXPERIENCE_DATA = [
  {
    company: 'Apex Integra Co.,Ltd.',
    role: 'Full Stack Developer',
    years: '2022 - 2025',
    description: '',
  }
];

export const COMPANY_PROJECTS_DATA = [
  {
    id: 'golf-network',
    title: 'Golf Network Myanmar',
    description:
      'A comprehensive social and utility platform for golfers in Myanmar, featuring course information, event management, and community features.',
    technologies: ['.NET Core', 'React.js', 'Flutter', 'Dart', 'Firebase', 'MSSQL'],
    imageUrlId: 'project1',
  },
  {
    id: 'eload-manager',
    title: 'E-Load Manager',
    description:
      'A robust system for managing and tracking electronic mobile top-ups, designed for distributors and retailers.',
    technologies: ['.NET Core', 'React.js', 'Flutter', 'Dart', 'Firebase', 'MSSQL'],
    imageUrlId: 'project2',
  },
  {
    id: 'c4e-rewards',
    title: 'C4E Rewards',
    description:
      'A mobile application for a customer loyalty and rewards program, enhancing customer engagement and retention.',
    technologies: ['Flutter', 'Dart', 'Odoo'],
    imageUrlId: 'project3',
  },
  {
    id: 'bcms2',
    title: 'BCMS 2',
    description:
      'An outsourced project at GUI Solution (Singapore) that aims to modernize the Buffet Catering Management System from monolithic application into a cloud-native micro-services application over the azure.',
    technologies: ['C#', '.NET Core', 'WinForm', 'MSSQL', 'Azure', 'Docker', 'Blazor'],
    imageUrlId: 'project4',
  },
];

export const PERSONAL_PROJECTS_DATA = [
  {
    id: 'personal-project-10',
    title: 'ChaYay (ချရေး)',
    description: 'A lightweight and simple markdown editor built with flutter for cross-platform use.',
    technologies: ['Flutter', 'Fluent UI'],
    githubUrl: 'https://github.com/sudochitswe-v2/chayay',
    demoUrl: 'https://github.com/sudochitswe-v2/chayay-release',
    imageUrl: "https://raw.githubusercontent.com/sudochitswe-v2/chayay-release/master/screenshot.png", // This would be your actual image,
  },
  {
    id: 'personal-project-1',
    title: 'Kyi Poh',
    description: 'Custom front door movie streaming app using exposed movie APIs to fetch and display movie information.',
    technologies: ['React.js', 'JavaScript', 'CSS', 'HTML', 'Movie APIs'],
    githubUrl: 'https://github.com/sudochitswe-v2/kyipoh-web  ',
    demoUrl: 'https://kyipoh.vercel.app',
    imageUrl: "https://raw.githubusercontent.com/sudochitswe-v2/kyipoh-web/refs/heads/master/screenshot.png", // This would be your actual image,
  },
  {
    id: 'personal-project-9',
    title: 'Myan Feeds',
    description: 'Rss feed reader app that fetches and displays news articles from various sources, allowing users to stay updated with the latest news in Myanmar.',
    technologies: ['Next.js','Rss'],
    githubUrl: 'https://github.com/sudochitswe-v2/myanfeeds',
    demoUrl: 'https://myanfeeds.vercel.app/',
    imageUrl: undefined, // This would be your actual image,
  },
  {
    id: 'personal-project-2',
    title: 'TruthLine',
    description: 'Websetite that provides verified news articles and fact-checking services to combat misinformation. (Hackathon Project)',
    technologies: ['.NET MVC', 'Razor Pages', 'MariaDb', 'Bootstrap'],
    githubUrl: 'https://github.com/sudochitswe-v2/TruthLine.infernov',
    demoUrl: undefined,
    imageUrl: undefined, // This would be your actual image
  },
  {
    id: 'personal-project-3',
    title: 'CSMF',
    description: 'Web-based loan management system designed to streamline the operations of microfinance institutions.',
    technologies: ['.NET MVC', 'Razor Pages', 'MariaDb', 'Bootstrap', 'Hangfire'],
    githubUrl: 'https://github.com/sudochitswe-v2/CSMF',
    demoUrl: undefined,
    imageUrl: undefined, // This would be your actual image
  },
  {
    id: 'personal-project-4',
    title: 'Foodify',
    description: 'online culinary platform that connects food enthusiasts and providing a space to explore, share, and discover diverse recipes and cooking tips.',
    technologies: ['Laravel', 'Blade', 'PHP', 'MariaDb', 'Bootstrap'],
    githubUrl: 'https://github.com/sudochitswe-v2/foodify-laravel',
    demoUrl: undefined,
    imageUrl: undefined, // This would be your actual image
  },
  {
    id: 'personal-project-5',
    title: 'DotBlog Web API',
    description: 'simple blog app api with .NET 8 best practices and JWT authentication.',
    technologies: ['.NET 8', 'C#', 'Entity Framework Core', 'MSSQL', 'JWT'],
    githubUrl: 'https://github.com/sudochitswe-v2/DotBlog',
    demoUrl: undefined,
    imageUrl: undefined, // This would be your actual image
  },
  {
    id: 'personal-project-6',
    title: 'Kfitness Web API',
    description: 'A RESTful API for a fitness application that manages user workouts and progress tracking.',
    technologies: ['PHP', 'MariaDb', 'Composer'],
    githubUrl: 'https://github.com/sudochitswe-v2/kfitness',
    demoUrl: undefined,
    imageUrl: undefined, // This would be your actual image
  },
  {
    id: 'personal-project-7',
    title: 'Kfitness Mobile',
    description: 'A fitness application written in native language that manages user workouts and progress tracking.',
    technologies: ['Kotlin', 'Android Studio', 'Volley'],
    githubUrl: 'https://github.com/sudochitswe-v2/KFitnessMobile',
    demoUrl: undefined,
    imageUrl: undefined, // This would be your actual image
  },
  {
    id: 'personal-project-8',
    title: 'NCC Fitness Tracker',
    description: 'A fitness tracker using .NET Framework WinForm Desktop App',
    technologies: ['.NET Framework', 'C#', 'WinForm', 'MSSQL'],
    githubUrl: 'https://github.com/sudochitswe-v2/NCCFitnessTracker',
    demoUrl: undefined,
    imageUrl: undefined, // This would be your actual image
  }
];

export const EDUCATION_DATA = [
  {
    id: 1,
    institution: 'Lovely Professional University',
    degree: 'B.Tech Computer Science & Engineering',
    years: '2025 - 2029',
  },
  {
    id: 2,
    institution: 'NCC Education',
    degree: 'Level 5 Diploma in Computing',
    years: '2024 - 2025',
  },
  {
    id: 3,
    institution: 'NCC Education',
    degree: 'Level 4 Diploma in Computing',
    years: '2023 - 2024',
  }
];
