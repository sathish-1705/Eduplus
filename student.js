/* =============================================
   EduPlus — Student Dashboard JavaScript
   ============================================= */

// ---- Data ----
const studentData = {
  name: 'Bruce Wayne', initials: 'BW',
  roll: '21CSE042', dept: 'CSE', batch: '2021-2025', cgpa: 8.4, pgpa: 8.6, attendance: 92,
  email: 'bruce@college.edu',
  phone: '+91 98765 43210',
  fatherName: 'Thomas Wayne',
  motherName: 'Martha Wayne',
  parentPhone: '+91 98765 40001',
  bankName: 'Gotham National Bank',
  bankBranch: 'Chennai Main Branch',
  bankAccount: '458732109845',
  ifsc: 'GNBK0004521',
  aadhar: '4567 8912 3456',
  abcId: 'ABC2025BW1042',
  skills: ['Python', 'Java', 'React.js', 'SQL', 'Data Structures', 'Machine Learning', 'Git'],
  semesters: [
    { sem: 'Sem 1', gpa: 8.2 }, { sem: 'Sem 2', gpa: 8.5 },
    { sem: 'Sem 3', gpa: 8.1 }, { sem: 'Sem 4', gpa: 8.7 },
    { sem: 'Sem 5', gpa: 8.4 }, { sem: 'Sem 6', gpa: 8.6 },
  ],
  scores: { Aptitude: 71, Coding: 68, Verbal: 80, Technical: 74 }
};

const upcomingTasks = [
  { name: 'Aptitude Mock Test – Series 8', type: 'test', date: 'Today, 3:00 PM', color: '#6c63ff' },
  { name: 'Coding Assignment: Linked Lists', type: 'assignment', date: 'Tomorrow, 11:59 PM', color: '#ff9f43' },
  { name: 'Mock Interview with Mr. Rajan', type: 'interview', date: 'Mar 18, 10:00 AM', color: '#00d4aa' },
  { name: 'Verbal Ability Test – Q3', type: 'test', date: 'Mar 20, 2:00 PM', color: '#ff6b6b' },
  { name: 'Resume Submission Deadline', type: 'deadline', date: 'Mar 22, 5:00 PM', color: '#74b9ff' },
];

const aiRecs = [
  { title: 'Focus: Probability & Statistics', icon: 'fas fa-chart-pie', color: '#6c63ff', bg: 'rgba(108,99,255,0.1)',
    text: 'Your accuracy in Probability is 38%. Practice 10 questions daily.', action: 'View Resources →' },
  { title: 'Improve: Dynamic Programming', icon: 'fas fa-code', color: '#00d4aa', bg: 'rgba(0,212,170,0.1)',
    text: 'Only 42% on DP problems. Start with memoization patterns.', action: 'Start Practice →' },
  { title: 'Strength: Verbal Reasoning', icon: 'fas fa-trophy', color: '#ff9f43', bg: 'rgba(255,159,67,0.1)',
    text: 'Excellent! 80% score. Maintain with 5 questions/day.', action: 'Keep Going →' },
];

const badgesList = [
  { icon: '⚡', name: 'Speed Coder', earned: true },
  { icon: '🎯', name: "Bull's Eye", earned: true },
  { icon: '🔥', name: '7-Day Streak', earned: true },
  { icon: '🧠', name: 'Logic King', earned: true },
  { icon: '📚', name: 'Scholar', earned: true },
  { icon: '💡', name: 'Quick Thinker', earned: true },
  { icon: '🏆', name: 'Top 10%', earned: true },
  { icon: '⭐', name: 'Star Performer', earned: true },
  { icon: '🚀', name: 'Speedrunner', earned: false },
  { icon: '🛡️', name: 'Unstoppable', earned: false },
  { icon: '💎', name: 'Diamond Coder', earned: false },
  { icon: '🌟', name: 'Campus Legend', earned: false },
];

const testsData = [
  { id: 1, title: 'Aptitude Speed Test', category: 'aptitude', status: 'ongoing', duration: 30, questions: 30, marks: 60, scheduled: 'Live now' },
  { id: 2, title: 'Data Structures & Algorithms', category: 'coding', status: 'upcoming', duration: 60, questions: 15, marks: 75, scheduled: 'Mar 18, 9:00 AM' },
  { id: 3, title: 'Verbal Ability – Series 7', category: 'verbal', status: 'completed', duration: 25, questions: 25, marks: 50, score: 42, percent: 84 },
  { id: 4, title: 'Core Java Technical Round', category: 'technical', status: 'completed', duration: 45, questions: 40, marks: 80, score: 61, percent: 76 },
  { id: 5, title: 'Quantitative Aptitude Q2', category: 'aptitude', status: 'completed', duration: 30, questions: 30, marks: 60, score: 38, percent: 63 },
  { id: 6, title: 'Python Basics Assessment', category: 'coding', status: 'completed', duration: 40, questions: 20, marks: 40, score: 32, percent: 80 },
];

const assignments = [
  { name: 'Linked List Problems (20 Qs)', trainer: 'Mr. Rajan Kumar', deadline: 'Mar 17, 11:59 PM', status: 'pending' },
  { name: 'Resume Draft Submission', trainer: 'Ms. Priya Nair', deadline: 'Mar 22, 5:00 PM', status: 'pending' },
  { name: 'Aptitude Worksheet – Series 6', trainer: 'Mr. Karthik V.', deadline: 'Mar 12, 11:59 PM', status: 'submitted' },
  { name: 'Group Discussion Practice Report', trainer: 'Ms. Priya Nair', deadline: 'Mar 8, 5:00 PM', status: 'graded' },
];

const resultsData = [
  { name: 'Verbal Ability – Series 7', cat: 'Verbal', date: 'Mar 14, 2026', score: '42/50', pct: 84, rank: 8 },
  { name: 'Core Java Technical Round', cat: 'Technical', date: 'Mar 11, 2026', score: '61/80', pct: 76, rank: 15 },
  { name: 'Quantitative Aptitude Q2', cat: 'Aptitude', date: 'Mar 7, 2026', score: '38/60', pct: 63, rank: 34 },
  { name: 'Python Basics Assessment', cat: 'Coding', date: 'Mar 5, 2026', score: '32/40', pct: 80, rank: 11 },
  { name: 'Aptitude Speed Test Q1', cat: 'Aptitude', date: 'Feb 28, 2026', score: '48/60', pct: 80, rank: 9 },
  { name: 'DSA Intermediate', cat: 'Coding', date: 'Feb 22, 2026', score: '55/75', pct: 73, rank: 19 },
];

const catMarksData = [
  { subject: 'Data Structures', cat1: 78, cat2: 84, cat3: 81 },
  { subject: 'Database Management Systems', cat1: 72, cat2: 76, cat3: 80 },
  { subject: 'Object Oriented Programming', cat1: 88, cat2: 91, cat3: 86 },
  { subject: 'Operating Systems', cat1: 69, cat2: 74, cat3: 77 },
  { subject: 'Computer Networks', cat1: 83, cat2: 79, cat3: 85 },
  { subject: 'Web Technology', cat1: 90, cat2: 87, cat3: 93 },
];

const endSemesterGrades = [
  { subject: 'Data Structures', grade: 'A+' },
  { subject: 'Database Management Systems', grade: 'A' },
  { subject: 'Object Oriented Programming', grade: 'O' },
  { subject: 'Operating Systems', grade: 'B+' },
  { subject: 'Computer Networks', grade: 'A+' },
  { subject: 'Web Technology', grade: 'O' },
];

const reportSemesterData = {
  1: {
    cat: [
      { subject: 'Mathematics I', cat1: 76, cat2: 81, cat3: 79 },
      { subject: 'Physics for Information Science', cat1: 72, cat2: 75, cat3: 78 },
      { subject: 'Engineering Chemistry', cat1: 68, cat2: 73, cat3: 71 },
      { subject: 'Problem Solving and Python Programming', cat1: 85, cat2: 88, cat3: 90 },
      { subject: 'English for Technical Communication', cat1: 80, cat2: 83, cat3: 84 },
      { subject: 'Engineering Graphics', cat1: 74, cat2: 77, cat3: 76 },
    ],
    semester: [
      { subject: 'Mathematics I', grade: 'A' },
      { subject: 'Physics for Information Science', grade: 'A+' },
      { subject: 'Engineering Chemistry', grade: 'B+' },
      { subject: 'Problem Solving and Python Programming', grade: 'O' },
      { subject: 'English for Technical Communication', grade: 'A+' },
      { subject: 'Engineering Graphics', grade: 'A' },
    ]
  },
  2: {
    cat: [
      { subject: 'Mathematics II', cat1: 71, cat2: 76, cat3: 74 },
      { subject: 'Basic Electrical and Electronics Engineering', cat1: 69, cat2: 72, cat3: 75 },
      { subject: 'Environmental Science', cat1: 82, cat2: 84, cat3: 86 },
      { subject: 'Programming in C', cat1: 78, cat2: 83, cat3: 81 },
      { subject: 'Communicative English', cat1: 84, cat2: 86, cat3: 88 },
      { subject: 'Engineering Practices Laboratory', cat1: 80, cat2: 82, cat3: 85 },
    ],
    semester: [
      { subject: 'Mathematics II', grade: 'A' },
      { subject: 'Basic Electrical and Electronics Engineering', grade: 'B+' },
      { subject: 'Environmental Science', grade: 'O' },
      { subject: 'Programming in C', grade: 'A+' },
      { subject: 'Communicative English', grade: 'O' },
      { subject: 'Engineering Practices Laboratory', grade: 'A+' },
    ]
  },
  3: {
    cat: [
      { subject: 'Discrete Mathematics', cat1: 79, cat2: 82, cat3: 84 },
      { subject: 'Digital Principles and Computer Organization', cat1: 74, cat2: 77, cat3: 79 },
      { subject: 'Data Structures', cat1: 81, cat2: 85, cat3: 83 },
      { subject: 'Object Oriented Programming', cat1: 86, cat2: 89, cat3: 90 },
      { subject: 'Database Management Systems', cat1: 73, cat2: 78, cat3: 80 },
      { subject: 'Computer Networks', cat1: 76, cat2: 79, cat3: 82 },
    ],
    semester: [
      { subject: 'Discrete Mathematics', grade: 'A+' },
      { subject: 'Digital Principles and Computer Organization', grade: 'A' },
      { subject: 'Data Structures', grade: 'A+' },
      { subject: 'Object Oriented Programming', grade: 'O' },
      { subject: 'Database Management Systems', grade: 'A' },
      { subject: 'Computer Networks', grade: 'A+' },
    ]
  },
  4: {
    cat: [
      { subject: 'Design and Analysis of Algorithms', cat1: 77, cat2: 82, cat3: 80 },
      { subject: 'Operating Systems', cat1: 69, cat2: 74, cat3: 77 },
      { subject: 'Software Engineering', cat1: 82, cat2: 85, cat3: 84 },
      { subject: 'Web Technology', cat1: 88, cat2: 90, cat3: 92 },
      { subject: 'Probability and Statistics', cat1: 71, cat2: 75, cat3: 78 },
      { subject: 'Java Programming', cat1: 84, cat2: 86, cat3: 89 },
    ],
    semester: [
      { subject: 'Design and Analysis of Algorithms', grade: 'A' },
      { subject: 'Operating Systems', grade: 'B+' },
      { subject: 'Software Engineering', grade: 'A+' },
      { subject: 'Web Technology', grade: 'O' },
      { subject: 'Probability and Statistics', grade: 'A' },
      { subject: 'Java Programming', grade: 'A+' },
    ]
  },
  5: {
    cat: [
      { subject: 'Computer Graphics', cat1: 74, cat2: 78, cat3: 80 },
      { subject: 'Mobile Computing', cat1: 79, cat2: 81, cat3: 83 },
      { subject: 'Computer Architecture', cat1: 72, cat2: 76, cat3: 78 },
      { subject: 'Theory of Computation', cat1: 68, cat2: 73, cat3: 75 },
      { subject: 'Open Source Programming', cat1: 85, cat2: 88, cat3: 90 },
      { subject: 'Professional Ethics', cat1: 89, cat2: 91, cat3: 93 },
    ],
    semester: [
      { subject: 'Computer Graphics', grade: 'A' },
      { subject: 'Mobile Computing', grade: 'A+' },
      { subject: 'Computer Architecture', grade: 'A' },
      { subject: 'Theory of Computation', grade: 'B+' },
      { subject: 'Open Source Programming', grade: 'O' },
      { subject: 'Professional Ethics', grade: 'O' },
    ]
  },
  6: {
    cat: catMarksData,
    semester: endSemesterGrades
  },
  7: {
    cat: [
      { subject: 'Cloud Computing', cat1: 83, cat2: 86, cat3: 88 },
      { subject: 'Information Security', cat1: 79, cat2: 82, cat3: 84 },
      { subject: 'Big Data Analytics', cat1: 76, cat2: 81, cat3: 83 },
      { subject: 'Artificial Intelligence', cat1: 88, cat2: 91, cat3: 93 },
      { subject: 'Internet of Things', cat1: 81, cat2: 84, cat3: 86 },
      { subject: 'Employability Skills', cat1: 90, cat2: 92, cat3: 94 },
    ],
    semester: [
      { subject: 'Cloud Computing', grade: 'A+' },
      { subject: 'Information Security', grade: 'A+' },
      { subject: 'Big Data Analytics', grade: 'A' },
      { subject: 'Artificial Intelligence', grade: 'O' },
      { subject: 'Internet of Things', grade: 'A+' },
      { subject: 'Employability Skills', grade: 'O' },
    ]
  },
  8: {
    cat: [
      { subject: 'Machine Learning', cat1: 86, cat2: 89, cat3: 91 },
      { subject: 'Data Mining and Warehousing', cat1: 80, cat2: 84, cat3: 86 },
      { subject: 'Cyber Security', cat1: 78, cat2: 82, cat3: 85 },
      { subject: 'Human Computer Interaction', cat1: 88, cat2: 90, cat3: 92 },
      { subject: 'Project Work', cat1: 91, cat2: 93, cat3: 95 },
      { subject: 'Internship Viva Voce', cat1: 87, cat2: 89, cat3: 94 },
    ],
    semester: [
      { subject: 'Machine Learning', grade: 'O' },
      { subject: 'Data Mining and Warehousing', grade: 'A+' },
      { subject: 'Cyber Security', grade: 'A+' },
      { subject: 'Human Computer Interaction', grade: 'O' },
      { subject: 'Project Work', grade: 'O' },
      { subject: 'Internship Viva Voce', grade: 'A+' },
    ]
  }
};

let currentReportSemester = '1';

const drives = [
  { company: 'TCS', role: 'System Engineer', ctc: '3.6 LPA', minCgpa: 6.0, date: 'Mar 25, 2026',
    eligible: true, status: 'upcoming', color: '#2196f3', icon: '🔷', departments: 'All Depts.', applied: true },
  { company: 'Infosys', role: 'Systems Engineer', ctc: '4.65 LPA', minCgpa: 6.5, date: 'Apr 2, 2026',
    eligible: true, status: 'upcoming', color: '#00897b', icon: '🟢', departments: 'CSE/IT/ECE', applied: false },
  { company: 'Wipro', role: 'Project Engineer', ctc: '3.5 LPA', minCgpa: 6.0, date: 'Apr 8, 2026',
    eligible: true, status: 'upcoming', color: '#7b1fa2', icon: '🟣', departments: 'All Depts.', applied: false },
  { company: 'Zoho', role: 'Software Dev', ctc: '7.0 LPA', minCgpa: 8.0, date: 'Apr 15, 2026',
    eligible: true, status: 'upcoming', color: '#e53935', icon: '🔴', departments: 'CSE/IT', applied: false },
  { company: 'Capgemini', role: 'Analyst', ctc: '3.8 LPA', minCgpa: 6.5, date: 'Apr 20, 2026',
    eligible: true, status: 'upcoming', color: '#00acc1', icon: '🔵', departments: 'All Depts.', applied: false },
  { company: 'Cognizant', role: 'Prog. Analyst', ctc: '4.0 LPA', minCgpa: 6.0, date: 'May 1, 2026',
    eligible: false, status: 'upcoming', color: '#43a047', icon: '🟡', departments: 'CSE/IT', applied: false },
];

const alumniMentors = [
  { name: 'Arun Karthik', role: 'Software Engineer', company: 'Infosys', batch: '2024 Passed Out', focus: 'Interview preparation and communication', tag: 'Service-based' },
  { name: 'Nivetha Ramesh', role: 'Associate Developer', company: 'Zoho', batch: '2023 Passed Out', focus: 'Projects, portfolio and coding rounds', tag: 'Product-based' },
  { name: 'Praveen Kumar S', role: 'Program Analyst', company: 'Cognizant', batch: '2024 Passed Out', focus: 'Aptitude strategy and HR round readiness', tag: 'Placement Tips' },
];

const alumniDiscussions = [
  {
    topic: 'How do I improve my resume for final placement season?',
    category: 'Resume Review',
    student: 'Bruce Wayne',
    alumni: 'Nivetha Ramesh',
    company: 'Zoho',
    time: '2 hours ago',
    replies: [
      'Keep your resume to one page and put your strongest project in the top half.',
      'Use action verbs and include measurable impact like accuracy, users, or completion time.',
      'Mention the tools you actually used because interviewers usually ask from those keywords.'
    ]
  },
  {
    topic: 'What should I focus on for service-based company interviews?',
    category: 'Interview Prep',
    student: 'Harishankar M',
    alumni: 'Arun Karthik',
    company: 'Infosys',
    time: 'Yesterday',
    replies: [
      'Prepare aptitude daily for at least 45 minutes and revise percentages, ratios, and time and work.',
      'Be ready with a simple self introduction, strengths, mini project explanation, and relocation answer.',
      'Practice speaking clearly more than sounding complicated. Confidence matters a lot in HR rounds.'
    ]
  },
  {
    topic: 'How do I balance CAT exams with placement coding practice?',
    category: 'Study Planning',
    student: 'Shalini Priya',
    alumni: 'Praveen Kumar S',
    company: 'Cognizant',
    time: '2 days ago',
    replies: [
      'Split weekdays into academics first and keep one fixed 60-minute coding slot in the evening.',
      'Use weekends for mock tests, resume updates, and one discussion practice with friends.',
      'A realistic routine followed consistently is better than a very heavy plan you cannot maintain.'
    ]
  }
];

const placementTopics = [
  { icon: 'fas fa-brain', color: '#6c63ff', bg: 'rgba(108,99,255,0.12)',
    title: 'Aptitude Training', desc: 'Quantitative, Logical Reasoning, and Data Interpretation.', progress: 71 },
  { icon: 'fas fa-code', color: '#00d4aa', bg: 'rgba(0,212,170,0.12)',
    title: 'Coding Skills', desc: 'Data Structures, Algorithms, and problem-solving practice.', progress: 68 },
  { icon: 'fas fa-comments', color: '#ff9f43', bg: 'rgba(255,159,67,0.12)',
    title: 'Group Discussion', desc: 'Topic selection, speaking skills, and leadership traits.', progress: 55 },
  { icon: 'fas fa-file-alt', color: '#74b9ff', bg: 'rgba(116,185,255,0.12)',
    title: 'Resume Writing', desc: 'ATS-friendly resumes, action verbs, and formatting tips.', progress: 80 },
  { icon: 'fas fa-user-tie', color: '#ff6b6b', bg: 'rgba(255,107,107,0.12)',
    title: 'Interview Practice', desc: 'Mock HR, technical and behavioral interview sessions.', progress: 62 },
  { icon: 'fas fa-microphone', color: '#a29bfe', bg: 'rgba(162,155,254,0.12)',
    title: 'Communication Skills', desc: 'English fluency, email writing, and presentation skills.', progress: 75 },
];

const weakAreas = [
  { topic: 'Probability & Statistics', score: 38, color: '#ff6b6b' },
  { topic: 'Dynamic Programming', score: 42, color: '#ff9f43' },
  { topic: 'Number System', score: 45, color: '#ff9f43' },
  { topic: 'Time & Work', score: 52, color: '#ff9f43' },
];
const strongAreas = [
  { topic: 'Verbal Reasoning', score: 84, color: '#00d4aa' },
  { topic: 'Python Programming', score: 80, color: '#00d4aa' },
  { topic: 'OOP Concepts', score: 78, color: '#74b9ff' },
  { topic: 'Logical Reasoning', score: 76, color: '#74b9ff' },
];

const resourcesData = [
  { icon: 'fas fa-calculator', color: '#6c63ff', bg: 'rgba(108,99,255,0.12)',
    title: 'Quantitative Aptitude Guide', desc: 'Complete guide with 500+ solved examples and tricks for CAT and placement exams.', type: 'aptitude', duration: '12h', level: 'Medium' },
  { icon: 'fas fa-code-branch', color: '#00d4aa', bg: 'rgba(0,212,170,0.12)',
    title: 'DSA Masterclass', desc: 'Arrays, Linked Lists, Trees, Graphs, DP — complete patterns with LeetCode problems.', type: 'coding', duration: '40h', level: 'Hard' },
  { icon: 'fas fa-book', color: '#ff9f43', bg: 'rgba(255,159,67,0.12)',
    title: 'English Grammar Essentials', desc: 'Grammar rules, vocabulary building, and sentence correction for placement exams.', type: 'verbal', duration: '8h', level: 'Easy' },
  { icon: 'fas fa-comments', color: '#a29bfe', bg: 'rgba(162,155,254,0.12)',
    title: 'GD Topics & Strategies', desc: '100+ GD topics with points for and against, opening lines, and tips to lead discussions.', type: 'gd', duration: '5h', level: 'Medium' },
  { icon: 'fas fa-user-tie', color: '#ff6b6b', bg: 'rgba(255,107,107,0.12)',
    title: 'HR Interview Q&A Bank', desc: '200+ HR questions with model answers, STAR method, and salary negotiation tips.', type: 'interview', duration: '10h', level: 'Medium' },
  { icon: 'fas fa-python', color: '#74b9ff', bg: 'rgba(116,185,255,0.12)',
    title: 'Python for Interviews', desc: 'Common Python interview questions, list comprehensions, and built-in tricks.', type: 'coding', duration: '15h', level: 'Medium' },
  { icon: 'fas fa-chart-line', color: '#00d4aa', bg: 'rgba(0,212,170,0.12)',
    title: 'Data Interpretation Crash Course', desc: 'Tables, graphs, and pie charts — speed calculation techniques for DI sections.', type: 'aptitude', duration: '6h', level: 'Medium' },
  { icon: 'fas fa-microphone-alt', color: '#ff9f43', bg: 'rgba(255,159,67,0.12)',
    title: 'Public Speaking & Presentation', desc: 'Overcome fear, structure talks, and deliver confidently in interviews and GDs.', type: 'verbal', duration: '7h', level: 'Easy' },
];

const atsTips = [
  { icon: 'fas fa-check-circle', color: '#00d4aa', text: 'Good keyword density for software roles' },
  { icon: 'fas fa-exclamation-circle', color: '#ff9f43', text: 'Add quantifiable achievements to projects' },
  { icon: 'fas fa-times-circle', color: '#ff6b6b', text: 'Remove tables/columns — not ATS-friendly' },
  { icon: 'fas fa-exclamation-circle', color: '#ff9f43', text: 'Add a LinkedIn/GitHub URL' },
];

// ---- Active Test State ----
let activeTest = null;
let testTimer   = null;
let testSeconds = 0;
let answers     = {};
let currentQ    = 0;
const sampleQuestions = [
  { q: 'What is the time complexity of Binary Search?', opts: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'], correct: 1 },
  { q: 'Which data structure uses LIFO?', opts: ['Queue', 'Stack', 'Array', 'Linked List'], correct: 1 },
  { q: 'If 5x + 3 = 28, find x.', opts: ['4', '5', '6', '3'], correct: 1 },
  { q: 'Which keyword is used to inherit a class in Java?', opts: ['extends', 'implements', 'inherits', 'super'], correct: 0 },
  { q: 'Find the odd one out: Apple, Mango, Potato, Banana', opts: ['Apple', 'Mango', 'Potato', 'Banana'], correct: 2 },
];

// ---- Navigation ----
const pageMeta = {
  dashboard:   { title: 'Dashboard',           sub: 'Welcome back, Bruce! Here\'s your overview.' },
  profile:     { title: 'My Profile',          sub: 'Manage your academic profile and portfolio.' },
  tests:       { title: 'Tests & Quizzes',     sub: 'Take mock tests and track your performance.' },
  assignments: { title: 'Assignments',         sub: 'View and submit your assignments.' },
  results:     { title: 'Reports',             sub: 'CAT marks and End Semester academic reports.' },
  placement:   { title: 'Placement Prep',      sub: 'Prepare for aptitude, coding, and interviews.' },
  resume:      { title: 'Resume Builder',      sub: 'Create an ATS-friendly resume automatically.' },
  drives:      { title: 'Company Drives',      sub: 'Browse and apply to upcoming placement drives.' },
  alumni:      { title: 'Alumni Connect',      sub: 'Discuss with passed-out students and learn from their guidance.' },
  analytics:   { title: 'AI Insights',         sub: 'AI-powered performance analysis and recommendations.' },
  resources:   { title: 'Study Resources',     sub: 'Curated learning materials for placement prep.' },
  settings:    { title: 'Settings',            sub: 'Manage your account and notification preferences.' },
};

function showSection(id, btn) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const sec = document.getElementById('sec-' + id);
  if (sec) sec.classList.add('active');
  if (btn) btn.classList.add('active');
  const meta = pageMeta[id] || { title: id, sub: '' };
  document.getElementById('current-page-title').textContent = meta.title;
  document.getElementById('current-page-sub').textContent   = meta.sub;
}

// ---- Charts ----
let trendChart, radarChart, priChart, topicChart, timeChart, atsGauge;

function initCharts() {
  Chart.defaults.color = '#9d9bc8';
  Chart.defaults.font.family = 'Inter';

  // PRI donut
  priChart = new Chart(document.getElementById('priChart'), {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [72, 28],
        backgroundColor: ['#6c63ff', 'rgba(255,255,255,0.06)'],
        borderWidth: 0,
        hoverOffset: 4
      }]
    },
    options: {
      cutout: '75%',
      plugins: { legend: { display: false }, tooltip: { enabled: false } },
      animation: { animateRotate: true, duration: 1000 }
    }
  });

  // Trend chart
  trendChart = new Chart(document.getElementById('trendChart'), {
    type: 'line',
    data: {
      labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
      datasets: [
        {
          label: 'Aptitude',
          data: [58, 63, 67, 65, 70, 71],
          borderColor: '#6c63ff', tension: 0.4, fill: true,
          backgroundColor: 'rgba(108,99,255,0.08)', borderWidth: 2, pointRadius: 4, pointHoverRadius: 6
        },
        {
          label: 'Coding',
          data: [55, 58, 60, 63, 65, 68],
          borderColor: '#00d4aa', tension: 0.4, fill: true,
          backgroundColor: 'rgba(0,212,170,0.06)', borderWidth: 2, pointRadius: 4, pointHoverRadius: 6
        },
        {
          label: 'Verbal',
          data: [70, 72, 74, 76, 79, 80],
          borderColor: '#ff9f43', tension: 0.4, fill: true,
          backgroundColor: 'rgba(255,159,67,0.06)', borderWidth: 2, pointRadius: 4, pointHoverRadius: 6
        }
      ]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'top', labels: { boxWidth: 12, padding: 16 } } },
      scales: {
        y: { min: 40, max: 100, grid: { color: 'rgba(255,255,255,0.04)' },
             ticks: { callback: v => v + '%' } },
        x: { grid: { display: false } }
      }
    }
  });

  // Radar chart
  radarChart = new Chart(document.getElementById('radarChart'), {
    type: 'radar',
    data: {
      labels: ['Aptitude', 'Coding', 'Verbal', 'Technical', 'GD', 'Resume'],
      datasets: [{
        label: 'Your Score',
        data: [71, 68, 80, 74, 55, 80],
        backgroundColor: 'rgba(108,99,255,0.2)',
        borderColor: '#6c63ff',
        borderWidth: 2,
        pointBackgroundColor: '#6c63ff',
        pointRadius: 4
      }, {
        label: 'Batch Average',
        data: [65, 60, 72, 68, 50, 70],
        backgroundColor: 'rgba(0,212,170,0.1)',
        borderColor: '#00d4aa',
        borderWidth: 2,
        pointBackgroundColor: '#00d4aa',
        pointRadius: 4
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'top', labels: { boxWidth: 12, padding: 16 } } },
      scales: { r: { min: 0, max: 100, grid: { color: 'rgba(255,255,255,0.06)' },
        ticks: { display: false }, pointLabels: { font: { size: 11 } } } }
    }
  });
}

function updateTrend() {
  // Demo: just animate the update
  trendChart.data.datasets.forEach(ds => {
    ds.data = ds.data.map(v => Math.min(100, v + (Math.random() * 4 - 2)));
  });
  trendChart.update();
}

function initAICharts() {
  // topic chart
  topicChart = new Chart(document.getElementById('topicChart'), {
    type: 'bar',
    data: {
      labels: ['Probability', 'DP', 'Number Sys', 'Time&Work', 'Verbal', 'Python', 'OOP', 'Logical'],
      datasets: [{
        label: 'Accuracy %',
        data: [38, 42, 45, 52, 84, 80, 78, 76],
        backgroundColor: [
          'rgba(255,107,107,0.7)', 'rgba(255,107,107,0.7)',
          'rgba(255,159,67,0.7)', 'rgba(255,159,67,0.7)',
          'rgba(0,212,170,0.7)', 'rgba(0,212,170,0.7)',
          'rgba(116,185,255,0.7)', 'rgba(116,185,255,0.7)'
        ],
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        y: { max: 100, grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { callback: v => v + '%' } },
        x: { grid: { display: false }, ticks: { font: { size: 11 } } }
      }
    }
  });

  timeChart = new Chart(document.getElementById('timeChart'), {
    type: 'doughnut',
    data: {
      labels: ['Aptitude', 'Coding', 'Verbal', 'Technical', 'GD Prep'],
      datasets: [{
        data: [30, 35, 15, 12, 8],
        backgroundColor: ['#6c63ff', '#00d4aa', '#ff9f43', '#74b9ff', '#ff6b6b'],
        borderWidth: 0,
        hoverOffset: 6
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'bottom', labels: { boxWidth: 12, padding: 14 } } }
    }
  });
}

function initATSChart() {
  atsGauge = new Chart(document.getElementById('atsGauge'), {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [78, 22],
        backgroundColor: ['#00d4aa', 'rgba(255,255,255,0.06)'],
        borderWidth: 0
      }]
    },
    options: {
      cutout: '75%',
      plugins: { legend: { display: false }, tooltip: { enabled: false } },
      rotation: -90, circumference: 180
    }
  });
}

// ---- Render Functions ----
function renderAcademicOverview() {
  const c = document.getElementById('academic-overview-grid');
  if (!c) return;

  const items = [
    { label: 'CGPA', value: studentData.cgpa.toFixed(1), meta: 'Overall cumulative performance', icon: 'fas fa-star', theme: 'purple' },
    { label: 'PGPA', value: studentData.pgpa.toFixed(1), meta: 'Previous semester GPA', icon: 'fas fa-chart-line', theme: 'green' },
    { label: 'Attendance', value: `${studentData.attendance}%`, meta: 'Current academic attendance', icon: 'fas fa-user-check', theme: 'blue' },
  ];

  c.innerHTML = items.map(item => `
    <div class="academic-metric academic-${item.theme}">
      <div class="academic-metric-icon"><i class="${item.icon}"></i></div>
      <div class="academic-metric-label">${item.label}</div>
      <div class="academic-metric-value">${item.value}</div>
      <div class="academic-metric-meta">${item.meta}</div>
    </div>
  `).join('');
}

function renderUpcomingTasks() {
  const c = document.getElementById('upcoming-tasks-list');
  if (!c) return;
  c.innerHTML = upcomingTasks.map(t => `
    <div class="task-item">
      <div class="task-dot" style="background:${t.color}"></div>
      <div class="task-info">
        <div class="task-name">${t.name}</div>
        <div class="task-meta">${t.type.toUpperCase()}</div>
      </div>
      <div class="task-time">${t.date}</div>
    </div>
  `).join('');
}

function renderAIRecs() {
  const c = document.getElementById('ai-recs-list');
  if (!c) return;
  c.innerHTML = aiRecs.map(r => `
    <div class="ai-rec-item">
      <div class="ai-rec-icon" style="background:${r.bg};color:${r.color}">
        <i class="${r.icon}"></i>
      </div>
      <div class="ai-rec-text">
        <strong>${r.title}</strong>
        ${r.text}
        <span class="ai-rec-action" onclick="showSection('resources', null)">${r.action}</span>
      </div>
    </div>
  `).join('');
}

function renderBadges() {
  const c = document.getElementById('badges-grid');
  if (!c) return;
  c.innerHTML = badgesList.map(b => `
    <div class="badge-item ${b.earned ? 'earned' : 'locked'}">
      <div class="badge-icon">${b.icon}</div>
      <div class="badge-name">${b.name}</div>
      ${b.earned ? '<span class="badge badge-success" style="font-size:0.6rem">Earned</span>' : ''}
    </div>
  `).join('');
}

function renderProfile() {
  const avatar = document.getElementById('profile-avatar-lg');
  if (avatar) avatar.textContent = studentData.initials;

  const name = document.getElementById('profile-name');
  if (name) name.textContent = studentData.name;

  const roll = document.getElementById('profile-roll');
  if (roll) roll.textContent = `Roll: ${studentData.roll}`;

  const details = document.getElementById('profile-details-list');
  if (details) {
    const detailItems = [
      { icon: 'fas fa-university', text: 'B.E. Computer Science Engineering' },
      { icon: 'fas fa-calendar', text: `Batch: ${studentData.batch}` },
      { icon: 'fas fa-star', text: `CGPA: ${studentData.cgpa} / 10` },
      { icon: 'fas fa-chart-line', text: `PGPA: ${studentData.pgpa} / 10` },
      { icon: 'fas fa-user-check', text: `Attendance: ${studentData.attendance}%` },
      { icon: 'fas fa-envelope', text: studentData.email },
      { icon: 'fas fa-phone', text: `Phone: ${studentData.phone}` },
      { icon: 'fas fa-user-tie', text: `Father: ${studentData.fatherName}` },
      { icon: 'fas fa-user', text: `Mother: ${studentData.motherName}` },
      { icon: 'fas fa-phone-volume', text: `Parent Contact: ${studentData.parentPhone}` },
      { icon: 'fas fa-building-columns', text: `Bank: ${studentData.bankName}` },
      { icon: 'fas fa-code-branch', text: `Branch: ${studentData.bankBranch}` },
      { icon: 'fas fa-credit-card', text: `A/C No: ${studentData.bankAccount}` },
      { icon: 'fas fa-receipt', text: `IFSC: ${studentData.ifsc}` },
      { icon: 'fas fa-id-card', text: `Aadhaar: ${studentData.aadhar}` },
      { icon: 'fas fa-fingerprint', text: `ABC ID: ${studentData.abcId}` },
    ];

    details.innerHTML = detailItems.map(item => `
      <div class="profile-detail-item"><i class="${item.icon}"></i><span>${item.text}</span></div>
    `).join('');
  }

  // Skills
  const sc = document.getElementById('skills-tags');
  if (sc) sc.innerHTML = studentData.skills.map((s, i) => `
    <div class="skill-tag" id="skill-${i}">${s}
      <span class="remove-skill" onclick="removeSkill(${i})">✕</span>
    </div>
  `).join('');

  // Semesters
  const sg = document.getElementById('sem-grid');
  if (sg) sg.innerHTML = studentData.semesters.map(s => `
    <div class="sem-item">
      <div class="sem-num">${s.sem}</div>
      <div class="sem-gpa">${s.gpa}</div>
    </div>
  `).join('');

  // Score breakdown
  const sb = document.getElementById('score-breakdown');
  if (sb) {
    const entries = Object.entries(studentData.scores);
    sb.innerHTML = entries.map(([k, v]) => {
      const colorMap = { Aptitude: 'primary', Coding: 'success', Verbal: 'warning', Technical: 'info' };
      return `
        <div class="score-breakdown-item">
          <span class="score-breakdown-label">${k}</span>
          <div class="area-bar">
            <div class="progress-bar-wrap">
              <div class="progress-bar-fill fill-${colorMap[k] || 'primary'}" style="width:${v}%"></div>
            </div>
          </div>
          <span class="score-value">${v}%</span>
        </div>
      `;
    }).join('');
  }
}

function removeSkill(i) {
  studentData.skills.splice(i, 1);
  renderProfile();
  showToast('Skill removed', 'info');
}

function addSkill() {
  const name = prompt('Enter skill name:');
  if (name && name.trim()) {
    studentData.skills.push(name.trim());
    renderProfile();
    showToast(`"${name.trim()}" added to skills!`, 'success');
  }
}

function renderTests() {
  renderTestsFiltered(testsData.filter(t => t.status === 'ongoing'));
}

function filterTests(status, chip) {
  document.querySelectorAll('#test-filter-chips .filter-chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  const filtered = testsData.filter(t => t.status === status);
  renderTestsFiltered(filtered);
}

function renderTestsFiltered(tests) {
  const grid = document.getElementById('tests-grid');
  if (!grid) return;
  const statusColors = { upcoming: 'info', ongoing: 'warning', completed: 'success' };

  grid.innerHTML = tests.map(t => {
    const isCompleted = t.status === 'completed';
    return `
      <div class="test-card cat-${t.category}">
        <div class="test-card-header">
          <div>
            <div class="test-card-title">${t.title}</div>
            <div class="test-card-meta">${t.scheduled || ''}</div>
          </div>
          <span class="badge badge-${statusColors[t.status]}">${t.status}</span>
        </div>
        <div class="test-card-stats">
          <div class="test-stat"><div class="test-stat-val">${t.duration}m</div><div class="test-stat-label">Duration</div></div>
          <div class="test-stat"><div class="test-stat-val">${t.questions}</div><div class="test-stat-label">Questions</div></div>
          <div class="test-stat"><div class="test-stat-val">${t.marks}</div><div class="test-stat-label">Marks</div></div>
        </div>
        ${isCompleted ? `
          <div style="margin:10px 0 14px;">
            <div style="display:flex;justify-content:space-between;font-size:0.78rem;margin-bottom:5px;">
              <span style="color:var(--text-muted)">Score</span>
              <span style="font-weight:700">${t.percent}%</span>
            </div>
            <div class="progress-bar-wrap"><div class="progress-bar-fill fill-success" style="width:${t.percent}%"></div></div>
          </div>
          <button class="btn btn-secondary" style="width:100%;justify-content:center;">
            <i class="fas fa-chart-bar"></i> View Result
          </button>
        ` : `
          <button class="btn btn-primary" style="width:100%;justify-content:center;margin-top:6px;" onclick="startTest(${t.id})">
            <i class="fas fa-play"></i> Start Test
          </button>
        `}
      </div>
    `;
  }).join('');
}

function renderAssignments() {
  const tbody = document.getElementById('assignments-tbody');
  if (!tbody) return;
  const statusColors = { pending: 'warning', submitted: 'info', graded: 'success' };
  tbody.innerHTML = assignments.map(a => `
    <tr>
      <td><strong>${a.name}</strong></td>
      <td style="color:var(--text-secondary)">${a.trainer}</td>
      <td style="color:var(--text-secondary)">${a.deadline}</td>
      <td><span class="badge badge-${statusColors[a.status]}">${a.status}</span></td>
      <td>
        ${a.status === 'pending' ? `<button class="btn btn-primary btn-sm" onclick="submitAssignment('${a.name}')"><i class="fas fa-upload"></i> Submit</button>` : `<button class="btn btn-secondary btn-sm" disabled>Done</button>`}
      </td>
    </tr>
  `).join('');
}

function renderResults() {
  const semesterReport = reportSemesterData[currentReportSemester] || reportSemesterData['1'];

  const catTbody = document.getElementById('cat-marks-tbody');
  if (catTbody) {
    catTbody.innerHTML = semesterReport.cat.map(item => `
      <tr>
        <td><strong>${item.subject}</strong></td>
        <td>${item.cat1} / 100</td>
        <td>${item.cat2} / 100</td>
        <td>${item.cat3} / 100</td>
      </tr>
    `).join('');
  }

  const semTbody = document.getElementById('semester-grades-tbody');
  if (semTbody) {
    semTbody.innerHTML = semesterReport.semester.map(item => `
      <tr>
        <td><strong>${item.subject}</strong></td>
        <td><span class="badge badge-primary">${item.grade}</span></td>
      </tr>
    `).join('');
  }

  const stats = document.getElementById('report-stats');
  if (stats) {
    const allMarks = semesterReport.cat.flatMap(item => [item.cat1, item.cat2, item.cat3]);
    const avg = Math.round(allMarks.reduce((sum, mark) => sum + mark, 0) / allMarks.length);
    const best = Math.max(...allMarks);
    stats.innerHTML = `
      <div class="stat-widget sw-purple"><div class="stat-icon"><i class="fas fa-file-alt"></i></div>
        <div class="stat-widget-info"><div class="stat-widget-label">Semester</div><div class="stat-widget-value">Sem ${currentReportSemester}</div></div></div>
      <div class="stat-widget sw-green"><div class="stat-icon"><i class="fas fa-percent"></i></div>
        <div class="stat-widget-info"><div class="stat-widget-label">Average CAT Mark</div><div class="stat-widget-value">${avg}</div></div></div>
      <div class="stat-widget sw-orange"><div class="stat-icon"><i class="fas fa-trophy"></i></div>
        <div class="stat-widget-info"><div class="stat-widget-label">Best CAT Mark</div><div class="stat-widget-value">${best}</div></div></div>
      <div class="stat-widget sw-blue"><div class="stat-icon"><i class="fas fa-graduation-cap"></i></div>
        <div class="stat-widget-info"><div class="stat-widget-label">Subjects</div><div class="stat-widget-value">${semesterReport.cat.length}</div></div></div>
    `;
  }
}

function changeReportSemester(semester) {
  currentReportSemester = semester;
  renderResults();
}

function showReportTab(tab, btn) {
  document.querySelectorAll('#report-filter-chips .filter-chip').forEach(chip => chip.classList.remove('active'));
  if (btn) btn.classList.add('active');

  document.querySelectorAll('.report-panel').forEach(panel => panel.classList.remove('active'));
  const panel = document.getElementById(`report-${tab}`);
  if (panel) panel.classList.add('active');
}

function renderPlacementPillars() {
  const c = document.getElementById('pri-pillars');
  if (!c) return;
  const pillars = [
    { label: 'Aptitude', score: 71, color: '#6c63ff', weight: '25%' },
    { label: 'Coding', score: 68, color: '#00d4aa', weight: '35%' },
    { label: 'Communication', score: 75, color: '#ff9f43', weight: '20%' },
    { label: 'Technical', score: 74, color: '#74b9ff', weight: '20%' },
  ];
  c.innerHTML = pillars.map(p => `
    <div class="pillar-item">
      <div class="pillar-label">${p.label} (${p.weight})</div>
      <div class="pillar-score" style="color:${p.color}">${p.score}%</div>
      <div class="progress-bar-wrap"><div class="progress-bar-fill" style="width:${p.score}%;background:${p.color}"></div></div>
    </div>
  `).join('');
}

function renderPlacementTopics() {
  const c = document.getElementById('placement-topics');
  if (!c) return;
  c.innerHTML = placementTopics.map(t => `
    <div class="placement-topic-card">
      <div class="ptc-icon" style="background:${t.bg};color:${t.color}"><i class="${t.icon}"></i></div>
      <div class="ptc-title">${t.title}</div>
      <div class="ptc-desc">${t.desc}</div>
      <div class="ptc-progress-label">
        <span style="font-size:0.75rem;color:var(--text-muted)">Progress</span>
        <span style="font-size:0.8rem;font-weight:700;color:${t.color}">${t.progress}%</span>
      </div>
      <div class="progress-bar-wrap"><div class="progress-bar-fill" style="width:${t.progress}%;background:${t.color}"></div></div>
      <button class="btn btn-secondary btn-sm" style="margin-top:14px;width:100%;justify-content:center;" onclick="showSection('resources',null)">
        <i class="fas fa-arrow-right"></i> Study Now
      </button>
    </div>
  `).join('');
}

function generateResume(animate = true) {
  const name  = document.getElementById('res-name')?.value || 'Bruce Wayne';
  const email = document.getElementById('res-email')?.value || 'bruce@college.edu';
  const phone = document.getElementById('res-phone')?.value || '+91 98765 43210';
  const obj   = document.getElementById('res-objective')?.value || '';
  const skills= document.getElementById('res-skills')?.value || '';
  const proj  = document.getElementById('res-projects')?.value || '';

  const preview = document.getElementById('resume-preview');
  if (!preview) return;
  preview.innerHTML = `
    <h1>${name}</h1>
    <div class="res-contact">${email} &nbsp;|&nbsp; ${phone} &nbsp;|&nbsp; github.com/${name.toLowerCase().replace(' ','')}&nbsp;|&nbsp; linkedin.com/in/${name.toLowerCase().replace(' ','')}</div>
    <h2>Objective</h2>
    <p>${obj}</p>
    <h2>Education</h2>
    <p><strong>B.E. Computer Science Engineering</strong> — Your College, Chennai<br/>
    Batch: 2021–2025 &nbsp;|&nbsp; CGPA: 8.4 / 10</p>
    <h2>Technical Skills</h2>
    <p>${skills}</p>
    <h2>Projects</h2>
    <ul>${proj.split('\n').filter(l=>l.trim()).map(l=>`<li>${l.replace(/^\d+\.\s*/,'')}</li>`).join('')}</ul>
    <h2>Certifications</h2>
    <ul>
      <li>Python for Everybody — Coursera (2024)</li>
      <li>AWS Cloud Practitioner Essentials (2023)</li>
    </ul>
    <h2>Achievements</h2>
    <ul>
      <li>College Rank #12 in EduPlus placement readiness</li>
      <li>Participant — Smart India Hackathon 2023</li>
    </ul>
  `;
  if (animate) showToast('Resume generated successfully!', 'success');
}

function printResume() {
  const content = document.getElementById('resume-preview').innerHTML;
  const w = window.open('', '_blank');
  w.document.write(`<html><head><title>Resume - Bruce Wayne</title>
    <style>body{font-family:Georgia,serif;margin:40px;color:#222;font-size:14px;line-height:1.6}
    h1{font-size:26px;margin-bottom:4px}h2{font-size:14px;text-transform:uppercase;letter-spacing:1px;color:#4a4af0;border-bottom:1.5px solid #4a4af0;padding-bottom:3px;margin:16px 0 8px}
    p,li{color:#333}ul{padding-left:20px}.res-contact{font-size:12px;color:#555;margin-bottom:12px}
    @media print{@page{margin:1cm}}</style>
    </head><body>${content}</body></html>`);
  w.document.close();
  w.print();
}

function renderATSTips() {
  const c = document.getElementById('ats-tips');
  if (!c) return;
  c.innerHTML = atsTips.map(t => `
    <div class="ats-tip-item">
      <i class="${t.icon}" style="color:${t.color}"></i>
      <span>${t.text}</span>
    </div>
  `).join('');
}

function renderDrives() {
  const c = document.getElementById('drives-grid');
  if (!c) return;
  c.innerHTML = drives.map((d, i) => `
    <div class="drive-card">
      <div class="drive-header">
        <div>
          <div class="company-name">${d.company}</div>
          <div class="company-role">${d.role}</div>
        </div>
        <div class="company-logo" style="background:${d.color}">${d.icon}</div>
      </div>
      <div class="drive-details">
        <div class="drive-detail"><span class="drive-detail-label">CTC</span><span class="drive-detail-value" style="color:var(--success)">${d.ctc}</span></div>
        <div class="drive-detail"><span class="drive-detail-label">Min. CGPA</span><span class="drive-detail-value">${d.minCgpa}</span></div>
        <div class="drive-detail"><span class="drive-detail-label">Departments</span><span class="drive-detail-value">${d.departments}</span></div>
        <div class="drive-detail"><span class="drive-detail-label">Drive Date</span><span class="drive-detail-value">${d.date}</span></div>
      </div>
      ${d.eligible ? (d.applied
        ? `<button class="btn btn-secondary" style="width:100%;justify-content:center;" disabled><i class="fas fa-check"></i> Applied</button>`
        : `<button class="btn btn-primary" style="width:100%;justify-content:center;" onclick="applyDrive(${i})"><i class="fas fa-paper-plane"></i> Apply Now</button>`)
        : `<button class="btn" style="width:100%;justify-content:center;background:rgba(255,107,107,0.1);color:var(--danger);border:1px solid rgba(255,107,107,0.3);" disabled><i class="fas fa-times"></i> Not Eligible</button>`}
    </div>
  `).join('');
}

function renderAlumniConnect() {
  const mentorGrid = document.getElementById('alumni-mentor-grid');
  if (mentorGrid) {
    mentorGrid.innerHTML = alumniMentors.map(mentor => `
      <div class="alumni-mentor-card">
        <div class="alumni-mentor-top">
          <div class="alumni-mentor-avatar">${mentor.name.split(' ').map(part => part[0]).join('').slice(0,2)}</div>
          <div>
            <div class="alumni-mentor-name">${mentor.name}</div>
            <div class="alumni-mentor-role">${mentor.role} at ${mentor.company}</div>
          </div>
        </div>
        <div class="alumni-mentor-meta">${mentor.batch}</div>
        <div class="alumni-mentor-focus">${mentor.focus}</div>
        <span class="badge badge-primary">${mentor.tag}</span>
      </div>
    `).join('');
  }

  const discussionList = document.getElementById('alumni-discussion-list');
  if (discussionList) {
    discussionList.innerHTML = alumniDiscussions.map(thread => `
      <div class="alumni-thread-card">
        <div class="alumni-thread-head">
          <div>
            <div class="alumni-thread-topic">${thread.topic}</div>
            <div class="alumni-thread-meta">${thread.category} · Asked by ${thread.student} · ${thread.time}</div>
          </div>
          <span class="badge badge-success">${thread.company}</span>
        </div>
        <div class="alumni-reply-box">
          <div class="alumni-reply-author">
            <div class="alumni-reply-avatar">${thread.alumni.split(' ').map(part => part[0]).join('').slice(0,2)}</div>
            <div>
              <div class="alumni-reply-name">${thread.alumni}</div>
              <div class="alumni-reply-role">Alumni Response</div>
            </div>
          </div>
          <div class="alumni-reply-points">
            ${thread.replies.map(reply => `<div class="alumni-reply-point"><i class="fas fa-angle-right"></i><span>${reply}</span></div>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }
}

function postAlumniQuestion() {
  const topic = document.getElementById('alumni-topic')?.value.trim();
  const message = document.getElementById('alumni-message')?.value.trim();
  if (!topic || !message) {
    showToast('Please enter both a topic and your question.', 'info');
    return;
  }

  alumniDiscussions.unshift({
    topic,
    category: 'Student Discussion',
    student: studentData.name,
    alumni: 'Career Mentor Panel',
    company: 'Campus Alumni Network',
    time: 'Just now',
    replies: [
      'Your discussion has been posted successfully.',
      'An alumni mentor will usually respond with preparation advice, resources, and an action plan.'
    ]
  });

  renderAlumniConnect();
  showToast('Your question was posted to Alumni Connect!', 'success');
}

function applyDrive(i) {
  drives[i].applied = true;
  renderDrives();
  showToast(`Applied to ${drives[i].company}! Good luck! 🎉`, 'success');
}

function renderAIInsights() {
  const wa = document.getElementById('weak-areas-list');
  if (wa) wa.innerHTML = weakAreas.map(a => `
    <div class="weak-area-item">
      <div class="area-name">${a.topic}</div>
      <div class="area-bar"><div class="progress-bar-wrap"><div class="progress-bar-fill fill-danger" style="width:${a.score}%"></div></div></div>
      <div class="area-score" style="color:var(--danger);font-weight:700;width:36px;text-align:right">${a.score}%</div>
    </div>
  `).join('');

  const sa = document.getElementById('strong-areas-list');
  if (sa) sa.innerHTML = strongAreas.map(a => `
    <div class="strong-area-item">
      <div class="area-name">${a.topic}</div>
      <div class="area-bar"><div class="progress-bar-wrap"><div class="progress-bar-fill fill-success" style="width:${a.score}%"></div></div></div>
      <div class="area-score" style="color:var(--success);font-weight:700;width:36px;text-align:right">${a.score}%</div>
    </div>
  `).join('');
}

function runAIAnalysis() {
  showToast('AI Analysis running...', 'info');
  setTimeout(() => {
    showToast('Analysis complete! Weak areas updated.', 'success');
    renderAIInsights();
  }, 2000);
}

function renderResources() {
  const c = document.getElementById('resources-grid');
  if (!c) return;
  renderResourcesFiltered(resourcesData);
}

function filterResources(type, chip) {
  document.querySelectorAll('#resource-filter .filter-chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  const filtered = type === 'all' ? resourcesData : resourcesData.filter(r => r.type === type);
  renderResourcesFiltered(filtered);
}

function renderResourcesFiltered(data) {
  const c = document.getElementById('resources-grid');
  if (!c) return;
  const levelColors = { Easy: 'success', Medium: 'warning', Hard: 'danger' };
  c.innerHTML = data.map(r => `
    <div class="resource-card">
      <div class="resource-icon" style="background:${r.bg};color:${r.color}"><i class="${r.icon}"></i></div>
      <div class="resource-title">${r.title}</div>
      <div class="resource-desc">${r.desc}</div>
      <div class="resource-meta">
        <span style="color:var(--text-muted);font-size:0.75rem"><i class="fas fa-clock"></i> ${r.duration}</span>
        <span class="badge badge-${levelColors[r.level]}">${r.level}</span>
      </div>
      <button class="btn btn-secondary btn-sm" style="width:100%;justify-content:center;margin-top:8px;" onclick="showToast('Launching: ${r.title}','info')">
        <i class="fas fa-play"></i> Start Learning
      </button>
    </div>
  `).join('');
}

// ---- Test Module ----
function startTest(id) {
  activeTest = testsData.find(t => t.id === id);
  if (!activeTest) return;
  if (confirm(`Start "${activeTest.title}"? You will have ${activeTest.duration} minutes.`)) {
    // Open dedicated test page
    window.location.href = 'test.html';
  }
}

function renderTestModal() {
  const body = document.getElementById('modal-test-body');
  const q = sampleQuestions[currentQ];
  const m = Math.floor(testSeconds/60).toString().padStart(2,'0');
  const s = (testSeconds%60).toString().padStart(2,'0');

  body.innerHTML = `
    <div class="test-active-header">
      <div>
        <div style="font-size:0.75rem;color:var(--text-muted)">Question ${currentQ+1} of ${sampleQuestions.length}</div>
      </div>
      <div class="test-timer" id="timer-display">${m}:${s}</div>
    </div>
    <div class="question-nav">
      ${sampleQuestions.map((_,i)=>`
        <button class="q-btn ${answers[i]!==undefined?'answered':''} ${i===currentQ?'current':''}" onclick="goToQ(${i})">${i+1}</button>
      `).join('')}
    </div>
    <div class="question-block">
      <div class="question-text">Q${currentQ+1}. ${q.q}</div>
      <div class="options-list">
        ${q.opts.map((opt,i)=>`
          <div class="option-item ${answers[currentQ]===i?'selected':''}" onclick="selectOption(${i})">
            <div class="option-radio"></div>
            <span>${String.fromCharCode(65+i)}. ${opt}</span>
          </div>
        `).join('')}
      </div>
    </div>
    <div style="display:flex;gap:10px;margin-top:16px;">
      ${currentQ>0?`<button class="btn btn-secondary" onclick="prevQ()"><i class="fas fa-arrow-left"></i> Prev</button>`:''}
      ${currentQ<sampleQuestions.length-1
        ?`<button class="btn btn-primary" style="margin-left:auto;" onclick="nextQ()">Next <i class="fas fa-arrow-right"></i></button>`
        :`<button class="btn btn-success" style="margin-left:auto;" onclick="submitTest()"><i class="fas fa-check"></i> Submit Test</button>`}
    </div>
  `;
}

function selectOption(i) {
  answers[currentQ] = i;
  renderTestModal();
}

function goToQ(i)   { currentQ = i; renderTestModal(); }
function nextQ()    { if (currentQ < sampleQuestions.length-1) { currentQ++; renderTestModal(); } }
function prevQ()    { if (currentQ > 0) { currentQ--; renderTestModal(); } }

function submitTest() {
  clearInterval(testTimer);
  const correct = sampleQuestions.filter((q,i) => answers[i] === q.correct).length;
  const pct = Math.round((correct / sampleQuestions.length) * 100);
  document.getElementById('modal-test-body').innerHTML = `
    <div style="text-align:center;padding:20px 0;">
      <div style="font-size:3.5rem;margin-bottom:10px;">${pct>=70?'🎉':'📈'}</div>
      <h3 style="font-size:1.4rem;margin-bottom:8px;">Test Submitted!</h3>
      <p style="color:var(--text-secondary);margin-bottom:20px;">You scored <strong style="color:${pct>=70?'var(--success)':'var(--warning)'}">${correct}/${sampleQuestions.length}</strong> (${pct}%)</p>
      <div class="progress-bar-wrap" style="height:10px;border-radius:5px;margin-bottom:20px;">
        <div class="progress-bar-fill ${pct>=70?'fill-success':'fill-warning'}" style="width:${pct}%"></div>
      </div>
      <button class="btn btn-primary" onclick="closeTestModal()">View Dashboard</button>
    </div>
  `;
  showToast(`Test submitted! Score: ${pct}%`, pct>=70?'success':'info');
}

function closeTestModal(e) {
  if (e && e.target !== document.getElementById('test-modal')) return;
  clearInterval(testTimer);
  document.getElementById('test-modal').style.display = 'none';
}

function viewResult(name) {
  showToast(`Loading details for: ${name}`, 'info');
}

function submitAssignment(name) {
  const a = assignments.find(a => a.name === name);
  if (a) a.status = 'submitted';
  renderAssignments();
  showToast('Assignment submitted successfully!', 'success');
}

// ---- Toast ----
function showToast(msg, type = 'info') {
  const c = document.getElementById('toast-container');
  const icons = { success: 'fa-check-circle', error: 'fa-times-circle', info: 'fa-info-circle' };
  const colors = { success: 'var(--success)', error: 'var(--danger)', info: 'var(--info)' };
  const t = document.createElement('div');
  t.className = `toast toast-${type}`;
  t.innerHTML = `<i class="fas ${icons[type]}" style="color:${colors[type]}"></i> ${msg}`;
  c.appendChild(t);
  setTimeout(() => { t.style.opacity='0'; t.style.transform='translateX(30px)'; t.style.transition='0.3s ease';
    setTimeout(()=>t.remove(), 350); }, 3000);
}

// ---- Logout ----
function logout() {
  if (confirm('Are you sure you want to sign out?')) {
    window.location.href = 'index.html';
  }
}

function toggleEditProfile() {
  showToast('Profile editing coming soon!', 'info');
}

function viewResult(name) {
  showToast(`Loading results for: ${name}`, 'info');
  showSection('results', document.querySelector('[onclick*=results]'));
}

function submitAssignment(name) {
  const a = assignments.find(as => as.name === name);
  if (a) {
    a.status = 'submitted';
    renderAssignments();
    showToast(`Assignment "${name.substring(0,30)}..." submitted!`, 'success');
  }
}

// Mobile sidebar toggle
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  sidebar.classList.toggle('open');
  if (overlay) overlay.classList.toggle('active');
}

// ---- Init ----
window.addEventListener('DOMContentLoaded', () => {
  initCharts();
  renderAcademicOverview();
  renderUpcomingTasks();
  renderAIRecs();
  renderBadges();
  renderProfile();
  renderTests();
  renderAssignments();
  renderResults();
  renderPlacementPillars();
  renderPlacementTopics();
  generateResume(false);
  renderATSTips();
  renderDrives();
  renderAlumniConnect();
  renderAIInsights();
  renderResources();

  // Lazy-init analytics & ATS charts on first view
  let analyticsInited = false;
  let atsInited = false;

  const observer = new MutationObserver(() => {
    if (!analyticsInited && document.getElementById('sec-analytics')?.classList.contains('active')) {
      initAICharts();
      analyticsInited = true;
    }
    if (!atsInited && document.getElementById('sec-resume')?.classList.contains('active')) {
      initATSChart();
      atsInited = true;
    }
  });
  observer.observe(document.body, { attributes: true, subtree: true, attributeFilter: ['class'] });
});
