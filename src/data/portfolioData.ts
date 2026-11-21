export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  role: string;
  category: string;
  status: string;
  year: string;
  summary: string;
  description: string[];
  highlights: string[];
  metrics: { label: string; value: string }[];
  stack: string[];
  repoUrl?: string;
  repoLabel?: string;
  imageUrl: string;
  imageAlt: string;
}

export interface SkillGroup {
  category: string;
  summary: string;
  items: string[];
}

export interface SoftStrength {
  name: string;
  desc: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  type: string;
  summary: string;
  details: string[];
}

export interface CredentialItem {
  title: string;
  note?: string;
  linkUrl?: string;
  linkLabel?: string;
}

export interface CredentialGroup {
  issuer: string;
  items: CredentialItem[];
}

export const PROFILE = {
  name: 'Chaya R.',
  resumeFullName: 'CHAYA R',
  headline: 'Building thoughtful software and applied machine learning systems.',
  role: 'Aspiring Software Developer · AI & ML Enthusiast',
  degree: 'BCA in Artificial Intelligence & Machine Learning',
  institution: 'RNS First Grade College (Autonomous)',
  graduationYear: '2027',
  educationDates: '2024 – 2027',
  preUniversity: {
    title: 'Pre-University Education (PUC)',
    institution: 'RNS PU College',
    dates: '2022 – 2024'
  },
  cgpa: '8.44 / 10',
  location: 'Bengaluru, Karnataka, India',
  shortLocation: 'Bengaluru, Karnataka',
  phone: '+91 8660639763',
  email: 'chayar606@gmail.com',
  resumeEmail: 'chayasuvarna@gmail.com',
  languagesSpoken: ['English', 'Kannada', 'Hindi'],
  githubUrl: 'https://github.com/ChayaR777',
  githubHandle: 'ChayaR777',
  linkedinUrl: 'https://www.linkedin.com/in/chayar16092006bca',
  linkedinHandle: 'linkedin.com/in/chayar16092006bca',
  credlyUrl: 'https://www.credly.com/users/chaya-r/badges/credly',
  credlyHandle: 'credly.com/users/chaya-r/badges/credly',
  heroImage: '/src/assets/images/hero_warm_studio_1795245828947.jpg',
  introParagraphs: [
    'I am an aspiring software developer pursuing a Bachelor of Computer Applications with a specialization in Artificial Intelligence and Machine Learning at RNS First Grade College (Autonomous) in Bengaluru.',
    'My work sits at the intersection of core software engineering and applied intelligence. Across Python, Java, C/C++, SQL, and web technologies, I enjoy peeling back how systems operate beneath the surface and turning ideas into dependable, practical applications.',
    'Beyond coursework, I actively explore financial data pipelines, backend software architecture, cloud computing, and cybersecurity—guided by curiosity, structured learning, and steady hands-on experimentation.'
  ],
  resumeSummary:
    'BCA student specializing in Artificial Intelligence & Machine Learning (CGPA 8.44/10), currently undergoing six-month Data Science training at Pentagon Space with industry-recognized credentials from IBM, Google, Infosys Springboard, NPTEL, and J.P. Morgan Chase (Forage). Strong foundation in Python, Java, SQL, data preprocessing, and software engineering principles, ready to contribute adaptability and analytical problem-solving to technical roles and apprenticeships.',
  focusAreas: [
    'Artificial Intelligence & Machine Learning',
    'Backend Software Engineering',
    'Cloud Computing & Systems',
    'Cybersecurity & Cryptography',
    'Generative AI Applications',
    'Product Engineering'
  ]
};

export const SOFT_STRENGTHS: SoftStrength[] = [
  {
    name: 'Logical & Analytical Thinking',
    desc: 'Breaking complex technical problems into structured, verifiable steps.'
  },
  {
    name: 'Learning by Doing',
    desc: 'Building hands-on prototypes to validate concepts beneath surface abstractions.'
  },
  {
    name: 'Problem Solving',
    desc: 'Methodical debugging and persistence across unfamiliar codebases and tools.'
  },
  {
    name: 'Team Collaboration',
    desc: 'Coordinating clearly across academic labs, technical training, and community events.'
  },
  {
    name: 'Adaptability',
    desc: 'Moving comfortably between Python data workflows, Java backends, and web UI.'
  },
  {
    name: 'Systems Curiosity',
    desc: 'Exploring how networks, security primitives, and data pipelines interact.'
  }
];

export const COMPLETED_PROJECTS: ProjectItem[] = [
  {
    id: 'stock-price-predictor',
    number: '01',
    title: 'Stock Price Predictor',
    role: 'ML & Data Pipeline Developer',
    category: 'Machine Learning & Data Analysis',
    status: 'Completed',
    year: '2026',
    summary:
      'An end-to-end financial time-series data pipeline and machine learning workflow analyzing historical Apple (AAPL) equity market trends from 2015 onward.',
    description: [
      'Designed a structured data acquisition and preprocessing workflow focused on Apple Inc. (AAPL) historical market prices starting from January 2, 2015.',
      'Automated market dataset retrieval via the yfinance library and maintained clean structured records in local CSV storage (data/AAPL.csv) for reproducible feature exploration and predictive modeling experiments.'
    ],
    highlights: [
      'Historical equity dataset coverage starting January 2, 2015 (AAPL)',
      'Automated market ingestion through Yahoo Finance (yfinance) and Pandas',
      'Structured preprocessing pipeline separating raw data storage and modeling steps',
      'Time-series visualization and trend exploration using Matplotlib and Scikit-learn'
    ],
    metrics: [
      { label: 'Target Asset', value: 'AAPL (Yahoo Finance)' },
      { label: 'Dataset Origin', value: 'Jan 2, 2015 – Present' },
      { label: 'Data Artifact', value: 'data/AAPL.csv' },
      { label: 'Core Runtime', value: 'Python 3.13' }
    ],
    stack: ['Python 3.13', 'yfinance', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
    imageUrl: '/src/assets/images/project_stock_predictor_1795245829244.jpg',
    imageAlt: 'Financial time-series chart and stock market trend analysis displayed on a minimalist laptop'
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Programming Languages',
    summary: 'Core typed, systems, and scripting languages across coursework and projects.',
    items: ['Python 3.13', 'Java 17', 'C', 'C++', 'SQL']
  },
  {
    category: 'AI & Machine Learning',
    summary: 'Foundational algorithms, data preparation, and applied generative AI.',
    items: [
      'Machine Learning Fundamentals',
      'Data Preprocessing',
      'Regression & Classification',
      'KNN & Perceptron',
      'Neural Networks',
      'Generative AI & Prompt Engineering'
    ]
  },
  {
    category: 'Web & Backend Engineering',
    summary: 'Structured frontend interfaces, relational databases, and service builds.',
    items: ['HTML5', 'CSS3', 'JavaScript', 'DBMS & SQLite', 'Maven', 'REST API Fundamentals']
  },
  {
    category: 'Libraries & Developer Tools',
    summary: 'Scientific Python ecosystem, computer vision utilities, and IDE workflows.',
    items: [
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Scikit-learn',
      'TensorFlow',
      'OpenCV & Pillow',
      'yfinance',
      'Git & GitHub',
      'VS Code & IntelliJ IDEA'
    ]
  },
  {
    category: 'Systems, Cloud & Security',
    summary: 'Networking, cryptographic foundations, and cloud infrastructure concepts.',
    items: [
      'Cybersecurity',
      'Cryptography',
      'Cloud Computing',
      'Linux',
      'Computer Networks',
      'Digital Image Processing',
      'Quantum Computing Fundamentals'
    ]
  }
];

export const EXPERIENCE_AND_COMMUNITY: ExperienceItem[] = [
  {
    id: 'pentagon-space',
    role: 'Data Science Training Program',
    organization: 'Pentagon Space',
    type: 'Under Training · Ongoing',
    summary:
      'Currently undergoing a structured six-month Data Science training and technical development program after being selected through the college placement process.',
    details: [
      'Developing hands-on proficiency in Python programming, data preprocessing, statistical analysis, and ML workflows.',
      'Strengthening applied problem-solving discipline alongside BCA Artificial Intelligence & Machine Learning coursework.'
    ]
  },
  {
    id: 'nss-volunteering',
    role: 'Active Student Volunteer',
    organization: 'National Service Scheme (NSS)',
    type: 'Community Leadership & Volunteering',
    summary:
      'Contributed across campus and civic outreach programs across Bengaluru, practicing teamwork, event coordination, and public service.',
    details: [
      'Volunteered in BDA Green Bengaluru environmental initiatives, Police Marshal coordination, and Blood Donation drives.',
      'Supported institutional celebrations including Aarohi, Republic Day, and Independence Day events.'
    ]
  }
];

export const CREDENTIAL_GROUPS: CredentialGroup[] = [
  {
    issuer: 'J.P. Morgan Chase & Co. (Forage)',
    items: [
      {
        title: 'Software Engineering Job Simulation (Midas)',
        note: 'Java 17 · Maven · Messaging',
        linkUrl: 'https://github.com/ChayaR777/forage-midas',
        linkLabel: 'View Repo'
      }
    ]
  },
  {
    issuer: 'IBM & Coursera',
    items: [
      { title: 'Introduction to Software Engineering', note: 'Coursera' },
      { title: 'IBM Data Fundamentals', note: 'Credly' },
      { title: 'IBM AI Literacy', note: 'Credly' },
      { title: 'IBM Quantum Enigma Badge', note: 'Credly' },
      { title: 'Adult Learner Data Analytics Program', note: 'ICT Academy / IBM India CSR' },
      { title: 'IBM Cybersecurity Learning Program', note: 'In Progress' }
    ]
  },
  {
    issuer: 'Google',
    items: [{ title: 'Introduction to Generative AI' }]
  },
  {
    issuer: 'Infosys Springboard',
    items: [
      { title: 'Pragati: Path to Future Cohort 6 (AI & Generative AI)' },
      { title: 'Prompt Engineering' },
      { title: 'Natural Language Processing for Developers' },
      { title: 'AI First Software' },
      { title: 'OpenAI Essentials' },
      { title: 'Cohort 7 Cloud Learning' },
      { title: 'HTML Certification' }
    ]
  },
  {
    issuer: 'NPTEL',
    items: [
      { title: 'Cryptography and Network Security' },
      { title: 'Soft Skills & Personality Development' }
    ]
  }
];
