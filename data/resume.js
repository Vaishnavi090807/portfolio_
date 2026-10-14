export const profile = {
  firstName: 'Vaishnavi',
  lastName: 'Sabbella',
  email: 'sabbellavaishnavi99@gmail.com',
  links: [
    { label: 'GitHub', handle: 'Vaishnavi090807', href: 'https://github.com/Vaishnavi090807' },
    { label: 'LinkedIn', handle: 'vaishnavi-sabbella', href: 'https://www.linkedin.com/in/vaishnavi-sabbella' },
    { label: 'GeeksforGeeks', handle: 'vaishnavi0908', href: 'https://www.geeksforgeeks.org/user/vaishnavi0908/' },
    { label: 'CodeChef', handle: 'svaishnavi0908', href: 'https://www.codechef.com/users/svaishnavi0908' },
    { label: 'LeetCode', handle: 'vaishnavi sabbella', href: null },
  ],
};

export const about = {
  title: 'Backend-minded, algorithm-driven, and a fast learner.',
  paragraphs: [
    'I am a Computer Science undergraduate at Amrita Vishwa Vidyapeetham with a strong foundation in Object-Oriented Programming, Data Structures and Algorithms, the Software Development Life Cycle and relational databases. I build backend software in Python, Java and C++.',
    'I have built a multithreaded TCP chat server, a graph and dynamic-programming strategy engine and a local RAG assistant, and delivered REST API, NLP and ML tooling during a Python internship using Git, GitHub and peer code review. I am comfortable with AWS (S3, RDS) and Linux.',
    'Beyond academics, I served as House Captain, leading my team to victory in the inter-house competition, and the following year as School Vice Captain. That experience shaped how I work in a team: clear communication and real accountability.',
  ],
  stats: [
    { value: 8.51, decimals: 2, suffix: '/10', label: 'GPA at Amrita Vishwa Vidyapeetham' },
    { value: 200, decimals: 0, suffix: '', label: 'concurrent clients load-tested on the chat server' },
    { value: 96.2, decimals: 1, suffix: '%', label: 'test accuracy on the SMS spam classifier' },
    { value: 4, decimals: 0, suffix: '', label: 'working modules shipped in a 4-week internship' },
  ],
};

export const skillGroups = [
  { title: 'Programming languages', skills: ['Python', 'Java', 'C++', 'JavaScript', 'TypeScript'] },
  { title: 'Web technologies', skills: ['HTML5', 'CSS', 'React', 'FastAPI', 'REST API design and integration'] },
  { title: 'Databases', skills: ['SQL', 'PostgreSQL', 'SQLite', 'SQLAlchemy', 'Schema design and queries'] },
  { title: 'Cloud', skills: ['AWS S3', 'AWS RDS', 'Cloud fundamentals', 'Docker'] },
  { title: 'AI and machine learning', skills: ['GenAI', 'Prompt engineering', 'RAG', 'Chroma', 'Ollama', 'Mistral-7B', 'NumPy', 'Pandas', 'Scikit-learn', 'NLTK'] },
  { title: 'Tools and systems', skills: ['Git', 'GitHub', 'Linux', 'TCP sockets', 'Multithreading', 'Debugging and troubleshooting'] },
  { title: 'Computer science core', skills: ['Object-Oriented Programming', 'Data structures and algorithms', 'Graph algorithms', 'Dynamic programming', 'SDLC', 'Operating systems', 'Computer networks', 'DBMS'] },
];

export const internship = {
  role: 'Python Developer Intern',
  company: 'Codtech IT Solution',
  period: 'May 2025 to June 2025',
  place: 'Remote, Hyderabad',
  repo: 'API-Integration-and-Data-Visualization',
  image: '/images/projects/api.svg',
  points: [
    {
      title: 'REST API design and NLP intent matching',
      text: 'Built Python REST APIs powering an AI chatbot that lemmatizes input with NLTK and maps it to 5 intents using TF-IDF cosine similarity with a 0.3 confidence threshold, following the SDLC from design to testing.',
    },
    {
      title: 'Supervised ML with TF-IDF and Multinomial Naive Bayes',
      text: 'Trained an SMS spam classifier on an 80/20 train-test split, reaching 96.2% test accuracy on 5,572 messages with 100% spam precision, so no legitimate message was flagged as spam.',
    },
    {
      title: 'External API consumption and data visualization',
      text: 'Consumed a live weather REST API to build a real-time dashboard, turning raw JSON responses into forecast charts that end users can read at a glance.',
    },
    {
      title: 'Delivery and code quality',
      text: 'Shipped 4 working modules (weather dashboard, automated report generator, AI chatbot, spam detector) in 4 weeks, with modular, unit-tested Python and Git and GitHub peer code reviews.',
    },
  ],
};

export const projects = [
  {
    title: 'Real-Time Multi-Client Chat Application',
    period: 'June 2026',
    status: 'Completed',
    image: '/images/projects/chat.svg',
    alt: 'Illustration of a central chat server connected to ten client nodes exchanging messages',
    tags: ['Java', 'Multithreading', 'TCP sockets', 'Concurrent collections', 'OOP', 'File handling'],
    points: [
      'Engineered a multi-client chat server in Core Java with one thread per client and thread-safe concurrent collections. Load-tested with 200 concurrent clients, delivering 99.99% of about 199,000 broadcast messages.',
      'Designed an abstract Participant class, a ChatService interface and custom checked exceptions, separating networking, business logic and error handling into three layers.',
      'Added username validation, broadcasting, graceful disconnect handling and file-I/O chat logs so no history is lost when a client leaves or the server restarts.',
    ],
  },
  {
    title: 'Flood Frenzy Strategy Engine',
    period: 'January 2026',
    status: 'Completed',
    image: '/images/projects/flood.svg',
    alt: 'Illustration of a 13 by 13 colour grid with a captured region in the top-left corner',
    tags: ['Java', 'Swing', 'Graph algorithms', 'Dynamic programming', 'BFS', 'Backtracking'],
    points: [
      'Modeled a 13x13, 5-colour board as a grid graph and used BFS flood-fill to compute captured territory in O(N^2) per turn, driving a best-of-3 player-versus-CPU game.',
      'Formulated the minimum colour changes as a 0-1 BFS shortest-path DP, then backtracked parent pointers to power move hints, a heatmap view and a DP-driven CPU opponent.',
      'Benchmarked greedy against DP and backtracking on the same board: 9 moves versus 8 (11.1% fewer), each solving the board in 1 ms or less. Built 3 CPU difficulty tiers, undo and redo, turn timers and replay.',
    ],
  },
  {
    title: 'SEBI Investment Risk Assistant',
    period: 'January 2026',
    status: 'In progress',
    image: '/images/projects/rag.svg',
    alt: 'Illustration of documents flowing into a vector space and producing a grounded answer',
    tags: ['Python', 'FastAPI', 'SQLite', 'Chroma', 'GenAI', 'RAG', 'Prompt engineering', 'Ollama', 'Mistral-7B'],
    points: [
      'Building a fully local RAG pipeline with FastAPI, SQLite, a Chroma vector store and Ollama running Mistral-7B that grounds answers in SEBI fraud orders, with no external API cost and data kept on-device.',
      'Hand-tuning prompts and retrieval to assess investment risk from SEBI orders. Currently at 60 to 75% retrieval accuracy on an initial test set, and iterating to raise it.',
    ],
  },
  {
    title: 'SportSphere: Multi-Branch Turf Booking System',
    period: '2026 to present',
    status: 'In progress',
    image: '/images/projects/turf.svg',
    alt: 'Illustration of a turf pitch next to a grid of bookable time slots',
    tags: ['React', 'TypeScript', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Docker', 'Git'],
    points: [
      'Designing a normalized PostgreSQL schema across 6 core entities (branches, sports, time slots, bookings, users, pricing) with SQLAlchemy models, keeping booking and billing data consistent.',
      'Building FastAPI services with request validation and structured business logic for multi-branch, multi-sport slot booking and Energy Shop purchases.',
      'Implementing booking logic that targets zero double-bookings across branch- and sport-specific pricing rules, with a React and TypeScript frontend and Docker containers.',
    ],
  },
];

export const education = {
  degree: 'Bachelor of Technology in Computer Science and Engineering',
  school: 'Amrita Vishwa Vidyapeetham, Tamil Nadu, India',
  gpa: '8.51 / 10.00',
  graduating: 'June 2028',
  coursework: [
    { name: 'Probability and Statistics', grade: 'A+' },
    { name: 'Data Structures and Algorithms', grade: 'B+' },
    { name: 'Operating Systems', grade: 'A' },
    { name: 'Object-Oriented Programming' },
    { name: 'Database Management Systems' },
    { name: 'Computer Networks' },
    { name: 'Linear Algebra' },
    { name: 'Calculus' },
  ],
};

export const upskilling = [
  { name: 'Risk Job Simulation', org: 'Goldman Sachs', date: 'May 2026' },
  { name: 'Data Analytics Job Simulation', org: 'Deloitte', date: 'May 2026' },
  { name: 'Python (Basics) Assessment', org: 'HackerRank', date: 'May 2026' },
  { name: 'Data Structures and Algorithms', org: 'Udemy', date: 'May 2026' },
  { name: 'Python', org: 'Udemy', date: 'Feb 2026' },
];

export const publications = [
  {
    title: 'AI-driven intelligent automation for encrypted traffic pattern recognition in IoT-enabled networked systems',
    venue: '6th International Conference on Computer Vision and Robotics (CVR 2026)',
    status: 'Accepted for publication',
    authors: 'Ramya, G.R., Pabolu Amrutha Sai Spandana, Paladi, I., Sabbella, V. and Mallidi Sai Krishna Reddy',
  },
  {
    title: 'Water salinity and its impact in Kalpar Village: A participatory rural appraisal approach',
    venue: 'Industrial Ecology and Environmental Management Book Series, Springer Nature',
    status: '2026',
    authors: 'Nivethitha, B., Swetha, M., Manideep, A., Sabbella, V., Krithikk, T., Satish, A. and Nair, A.R.',
  },
];

export const leadership = [
  { role: 'School Vice Captain', text: 'Represented and led the student body, building communication and accountability.' },
  { role: 'House Captain', text: 'Led my house to victory in the inter-house competition.' },
];
