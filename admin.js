/* =============================================
   EduPlus — Admin Dashboard JavaScript
   ============================================= */

// ---- Navigation ----
const pageMeta = {
  dashboard:     { title: 'Admin Dashboard',     sub: 'College overview — March 2026' },
  students:      { title: 'All Students',        sub: 'View and manage student profiles.' },
  bulk:          { title: 'Bulk Import',         sub: 'Import students via CSV or Excel.' },
  tests:         { title: 'Test Management',     sub: 'Create, schedule, and manage tests.' },
  assignments:   { title: 'Assignments',         sub: 'Create and track student assignments.' },
  drives:        { title: 'Placement Drives',    sub: 'Manage company visits and placement drives.' },
  feedback:      { title: 'Interview Feedback',  sub: 'Record and view mock interview evaluations.' },
  analytics:     { title: 'Analytics',           sub: 'College-wide performance insights.' },
  reports:       { title: 'Reports',             sub: 'Generate and export accreditation reports.' },
  announcements: { title: 'Announcements',       sub: 'Broadcast messages to students and staff.' },
  settings:      { title: 'System Settings',     sub: 'Configure college and platform settings.' },
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

  // Lazy init analytics charts
  if (id === 'analytics' && !analyticsInited) {
    initAnalyticsCharts();
    analyticsInited = true;
  }
}

// ---- Sample Data ----
const studentsData = [
  { name: 'Arun Prakash',      roll: '21CSE042', dept: 'CSE',  batch: 2025, section: 'A', cgpa: 8.4, pri: 72, placed: false, email: 'arun.prakash@college.edu',      phone: '+91 98765 41042', parent: 'R. Prabhakaran', city: 'Coimbatore' },
  { name: 'Divya Lakshmi',     roll: '21CSE017', dept: 'CSE',  batch: 2025, section: 'A', cgpa: 9.1, pri: 88, placed: true,  email: 'divya.lakshmi@college.edu',     phone: '+91 98765 41017', parent: 'S. Lakshmanan', city: 'Madurai' },
  { name: 'Karthikeyan M',     roll: '21IT033',  dept: 'IT',   batch: 2025, section: 'B', cgpa: 7.8, pri: 65, placed: false, email: 'karthikeyan.m@college.edu',     phone: '+91 98765 41033', parent: 'M. Murugan', city: 'Salem' },
  { name: 'Priyadharshini R',  roll: '21ECE028', dept: 'ECE',  batch: 2025, section: 'A', cgpa: 7.5, pri: 60, placed: false, email: 'priyadharshini.r@college.edu',  phone: '+91 98765 41028', parent: 'R. Ramasamy', city: 'Tiruchirappalli' },
  { name: 'Hariharan S',       roll: '21CSE009', dept: 'CSE',  batch: 2025, section: 'A', cgpa: 8.9, pri: 84, placed: true,  email: 'hariharan.s@college.edu',       phone: '+91 98765 41009', parent: 'S. Subramanian', city: 'Chennai' },
  { name: 'Sneha Niveditha',   roll: '21IT011',  dept: 'IT',   batch: 2025, section: 'B', cgpa: 8.2, pri: 76, placed: true,  email: 'sneha.niveditha@college.edu',   phone: '+91 98765 41011', parent: 'V. Natarajan', city: 'Erode' },
  { name: 'Vigneshwaran T',    roll: '21EEE040', dept: 'EEE',  batch: 2025, section: 'C', cgpa: 6.8, pri: 45, placed: false, email: 'vigneshwaran.t@college.edu',    phone: '+91 98765 41040', parent: 'T. Thangaraj', city: 'Thanjavur' },
  { name: 'Ananthalakshmi K',  roll: '21CSE055', dept: 'CSE',  batch: 2025, section: 'A', cgpa: 9.3, pri: 91, placed: true,  email: 'ananthalakshmi.k@college.edu',  phone: '+91 98765 41055', parent: 'K. Krishnamurthy', city: 'Tirunelveli' },
  { name: 'Muthukumaravel P',  roll: '21MECH060',dept: 'MECH', batch: 2025, section: 'B', cgpa: 7.1, pri: 52, placed: false, email: 'muthukumaravel.p@college.edu',  phone: '+91 98765 41060', parent: 'P. Palanisamy', city: 'Namakkal' },
  { name: 'Shalini Priyanka',  roll: '21IT028',  dept: 'IT',   batch: 2025, section: 'B', cgpa: 8.6, pri: 79, placed: true,  email: 'shalini.priyanka@college.edu',  phone: '+91 98765 41028', parent: 'A. Arumugam', city: 'Karur' },
];

const adminTests = [
  { name: 'Aptitude Speed Test Series 8',    cat: 'aptitude',  qs: 30, dur: 30, scheduled: 'Mar 17, 3:00 PM', status: 'upcoming' },
  { name: 'DSA Intermediate',               cat: 'coding',    qs: 15, dur: 60, scheduled: 'Mar 18, 9:00 AM', status: 'upcoming' },
  { name: 'Verbal Ability – Q3',            cat: 'verbal',    qs: 25, dur: 25, scheduled: 'Mar 20, 2:00 PM', status: 'upcoming' },
  { name: 'Core Java Technical Test',       cat: 'technical', qs: 40, dur: 45, scheduled: 'Mar 11, 10:00 AM', status: 'completed' },
  { name: 'Quantitative Aptitude Q2',       cat: 'aptitude',  qs: 30, dur: 30, scheduled: 'Mar 7, 2:00 PM',  status: 'completed' },
];

const adminAssignments = [
  { name: 'Linked List Problems (20 Qs)', trainer: 'Mr. Rajan Kumar', deadline: 'Mar 17', submitted: 38, total: 52, status: 'active' },
  { name: 'Resume Draft Submission',      trainer: 'Ms. Priya Nair',  deadline: 'Mar 22', submitted: 20, total: 52, status: 'active' },
  { name: 'Aptitude Worksheet – S6',      trainer: 'Mr. Karthik V.', deadline: 'Mar 12', submitted: 50, total: 52, status: 'closed' },
  { name: 'GD Practice Report',           trainer: 'Ms. Priya Nair',  deadline: 'Mar 8',  submitted: 52, total: 52, status: 'graded' },
];

const driveData = [
  { company: 'TCS',       role: 'System Engineer',  ctc: '3.6 LPA', minCgpa: 6.0, date: 'Mar 25', applied: 142, status: 'upcoming' },
  { company: 'Infosys',   role: 'Systems Engineer', ctc: '4.65 LPA',minCgpa: 6.5, date: 'Apr 2',  applied: 98,  status: 'upcoming' },
  { company: 'Wipro',     role: 'Proj. Engineer',   ctc: '3.5 LPA', minCgpa: 6.0, date: 'Apr 8',  applied: 110, status: 'upcoming' },
  { company: 'Zoho',      role: 'Software Dev',     ctc: '7.0 LPA', minCgpa: 8.0, date: 'Apr 15', applied: 44,  status: 'upcoming' },
  { company: 'Accenture', role: 'ASE',              ctc: '4.5 LPA', minCgpa: 6.0, date: 'Mar 1',  applied: 200, status: 'completed' },
  { company: 'CTS',       role: 'Prog. Analyst',    ctc: '4.0 LPA', minCgpa: 6.0, date: 'Feb 15', applied: 180, status: 'completed' },
];

const feedbackData = [
  { student: 'Divya Lakshmi',  interviewer: 'Mr. Rajan', comm: 9, tech: 8, apt: 7,
    strengths: 'Excellent communication. Clear thought process.', improve: 'Work on edge cases in coding.' },
  { student: 'Hariharan S',   interviewer: 'Ms. Priya',  comm: 7, tech: 9, apt: 8,
    strengths: 'Strong DSA skills. Good at problem solving.', improve: 'Improve HR answer structuring.' },
  { student: 'Arun Prakash',  interviewer: 'Mr. Rajan', comm: 8, tech: 7, apt: 8,
    strengths: 'Good aptitude score. Confident presentation.', improve: 'Practice DP and graph problems.' },
];

const questionBank = [
  { text: 'What is the time complexity of Binary Search?', cat: 'aptitude', difficulty: 'easy',
    opts: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'], correct: 'B', topic: 'Algorithm Analysis' },
  { text: 'Which data structure uses LIFO?', cat: 'coding', difficulty: 'easy',
    opts: ['Queue', 'Stack', 'Array', 'Linked List'], correct: 'B', topic: 'Data Structures' },
  { text: 'Find the next number: 2, 6, 12, 20, ?', cat: 'aptitude', difficulty: 'medium',
    opts: ['28', '30', '32', '36'], correct: 'B', topic: 'Number Series' },
  { text: 'Which sorting algorithm has the best average case?', cat: 'coding', difficulty: 'medium',
    opts: ['Bubble Sort', 'Quick Sort', 'Insertion Sort', 'Selection Sort'], correct: 'B', topic: 'Sorting' },
];

let announcements = [
  { title: 'TCS Drive Registration Open!', msg: 'All eligible students must register by March 20, 2026 via the portal.', target: 'All Students', priority: 'Urgent', time: '2h ago', color: 'var(--danger)', icon: 'fas fa-building' },
  { title: 'Mock Aptitude Test – March 17', msg: 'A mock aptitude test is scheduled for March 17 at 3:00 PM in Lab 2.', target: 'CSE Batch 2025', priority: 'Important', time: '1 day ago', color: 'var(--warning)', icon: 'fas fa-clipboard-list' },
  { title: 'Resume Submission Deadline', msg: 'Final year students must submit polished resumes by March 22, 5:00 PM.', target: 'Final Year', priority: 'Normal', time: '2 days ago', color: 'var(--info)', icon: 'fas fa-file-alt' },
];

const atRisk = [
  { name: 'Vigneshwaran T',   dept: 'EEE',  score: '45 PRI', reason: 'Low aptitude (32%)' },
  { name: 'Muthukumaravel P', dept: 'MECH', score: '52 PRI', reason: 'No test taken this month' },
  { name: 'Priyadharshini R', dept: 'ECE',  score: '60 PRI', reason: 'Failed last 2 tests' },
];

// ---- Render Students ----
function renderStudents(data) {
  const tbody = document.getElementById('students-tbody');
  if (!tbody) return;
  tbody.innerHTML = data.map(s => {
    const priColor = s.pri >= 75 ? 'var(--success)' : s.pri >= 60 ? 'var(--warning)' : 'var(--danger)';
    return `
    <tr>
      <td><div class="student-name-cell">
        <div class="student-row-avatar">${s.name.split(' ').map(n=>n[0]).join('').slice(0,2)}</div>
        <div>
          <strong>${s.name}</strong>
          <div style="font-size:0.76rem;color:var(--text-secondary);margin-top:2px;">${s.email}</div>
          <div style="font-size:0.74rem;color:var(--text-muted);margin-top:2px;">Parent: ${s.parent}</div>
        </div>
      </div></td>
      <td style="color:var(--text-secondary)">${s.roll}</td>
      <td><span class="badge badge-info">${s.dept}</span></td>
      <td style="color:var(--text-muted)">${s.batch} · ${s.section}</td>
      <td>
        <div style="font-size:0.78rem;color:var(--text-primary);font-weight:600;">${s.phone}</div>
        <div style="font-size:0.74rem;color:var(--text-muted);margin-top:2px;">${s.city}</div>
      </td>
      <td><strong>${s.cgpa}</strong></td>
      <td><strong style="color:${priColor}">${s.pri}</strong></td>
      <td><span class="badge ${s.placed?'badge-success':'badge-warning'}">${s.placed?'Placed':'Active'}</span></td>
      <td><div class="action-cell">
        <button class="action-icon-btn" title="View Profile" onclick="viewStudentProfile('${s.roll}')"><i class="fas fa-eye"></i></button>
        <button class="action-icon-btn" title="Edit" onclick="showToast('Edit mode: ${s.name}','info')"><i class="fas fa-pen"></i></button>
        <button class="action-icon-btn danger" title="Remove" onclick="removeStudent('${s.name}')"><i class="fas fa-trash"></i></button>
      </div></td>
    </tr>
  `}).join('');
  const label = document.getElementById('student-count-label');
  if (label) label.textContent = `Showing ${data.length} of 487 students`;
}

function searchStudents(q) {
  const filtered = studentsData.filter(s =>
    s.name.toLowerCase().includes(q.toLowerCase()) ||
    s.roll.toLowerCase().includes(q.toLowerCase())
  );
  renderStudents(filtered);
}

function filterStudents() {
  const dept  = document.getElementById('dept-filter')?.value;
  const batch = document.getElementById('batch-filter')?.value;
  let filtered = studentsData;
  if (dept) filtered = filtered.filter(s => s.dept === dept);
  if (batch) filtered = filtered.filter(s => s.batch === parseInt(batch));
  renderStudents(filtered);
}

function removeStudent(name) {
  if (confirm(`Remove ${name} from the system?`)) {
    showToast(`${name} has been removed.`, 'success');
  }
}

function viewStudentProfile(roll) {
  const student = studentsData.find(s => s.roll === roll);
  if (!student) return;
  openModal(`${student.name} Profile`, `
    <div class="form-row">
      <div class="form-group"><label>Roll Number</label><input type="text" value="${student.roll}" readonly></div>
      <div class="form-group"><label>Department</label><input type="text" value="${student.dept}" readonly></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label>Batch</label><input type="text" value="${student.batch}" readonly></div>
      <div class="form-group"><label>Section</label><input type="text" value="${student.section}" readonly></div>
    </div>
    <div class="form-group"><label>Email</label><input type="text" value="${student.email}" readonly></div>
    <div class="form-group"><label>Phone Number</label><input type="text" value="${student.phone}" readonly></div>
    <div class="form-group"><label>Parent / Guardian</label><input type="text" value="${student.parent}" readonly></div>
    <div class="form-group"><label>Native Place</label><input type="text" value="${student.city}" readonly></div>
    <div class="form-row">
      <div class="form-group"><label>CGPA</label><input type="text" value="${student.cgpa}" readonly></div>
      <div class="form-group"><label>PRI Score</label><input type="text" value="${student.pri}" readonly></div>
    </div>
    <div class="form-group"><label>Placement Status</label><input type="text" value="${student.placed ? 'Placed' : 'Active'}" readonly></div>
    <button class="btn btn-primary" style="width:100%;justify-content:center;" onclick="closeModal()">
      <i class="fas fa-check"></i> Close
    </button>
  `);
}

function exportStudents() {
  showToast('Student data exported to Excel!', 'success');
}

function openAddStudent() {
  openModal('Add Student', `
    <div class="form-group"><label>Full Name</label><input type="text" placeholder="Student full name"/></div>
    <div class="form-row">
      <div class="form-group"><label>Roll Number</label><input type="text" placeholder="21CSE001"/></div>
      <div class="form-group"><label>Email</label><input type="email" placeholder="student@college.edu"/></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label>Department</label>
        <select><option>CSE</option><option>IT</option><option>ECE</option><option>EEE</option><option>MECH</option></select></div>
      <div class="form-group"><label>Batch Year</label><input type="number" value="2025"/></div>
    </div>
    <div class="form-group"><label>CGPA</label><input type="number" step="0.1" max="10" placeholder="8.4"/></div>
    <button class="btn btn-primary" style="width:100%;justify-content:center;" onclick="closeModal();showToast('Student added successfully!','success')">
      <i class="fas fa-user-plus"></i> Add Student
    </button>
  `);
}

// ---- Tests ----
function renderAdminTests() {
  const tbody = document.getElementById('admin-tests-tbody');
  if (!tbody) return;
  const statusColors = { upcoming: 'info', completed: 'success' };
  tbody.innerHTML = adminTests.map(t => `
    <tr>
      <td><strong>${t.name}</strong></td>
      <td><span class="badge badge-primary">${t.cat}</span></td>
      <td>${t.qs} Qs</td>
      <td>${t.dur} min</td>
      <td style="color:var(--text-muted)">${t.scheduled}</td>
      <td><span class="badge badge-${statusColors[t.status]}">${t.status}</span></td>
      <td><div class="action-cell">
        <button class="action-icon-btn" onclick="showToast('Editing test','info')"><i class="fas fa-pen"></i></button>
        <button class="action-icon-btn" onclick="showToast('Results loaded','info')"><i class="fas fa-chart-bar"></i></button>
        <button class="action-icon-btn danger" onclick="showToast('Test deleted','success')"><i class="fas fa-trash"></i></button>
      </div></td>
    </tr>
  `).join('');
}

function openCreateTest() {
  openModal('Create New Test', `
    <div class="form-group"><label>Test Title</label><input type="text" placeholder="e.g. Aptitude Mock Test Series 9"/></div>
    <div class="form-row">
      <div class="form-group"><label>Category</label>
        <select><option>aptitude</option><option>coding</option><option>verbal</option><option>technical</option></select></div>
      <div class="form-group"><label>Duration (minutes)</label><input type="number" value="30"/></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label>Total Questions</label><input type="number" value="30"/></div>
      <div class="form-group"><label>Total Marks</label><input type="number" value="60"/></div>
    </div>
    <div class="form-group"><label>Schedule Date & Time</label><input type="datetime-local"/></div>
    <div class="form-group"><label>Target Batch</label>
      <select><option>All Batches</option><option>CSE 2025</option><option>IT 2025</option><option>All Final Year</option></select></div>
    <button class="btn btn-primary" style="width:100%;justify-content:center;" onclick="closeModal();showToast('Test created and scheduled!','success')">
      <i class="fas fa-save"></i> Create Test
    </button>
  `);
}

// ---- Question Bank ----
function renderQuestionBank(data) {
  const c = document.getElementById('question-bank-list');
  if (!c) return;
  c.innerHTML = data.map((q, i) => {
    const diffColors = { easy: 'success', medium: 'warning', hard: 'danger' };
    return `
    <div class="question-item">
      <div class="question-header">
        <div class="question-text-preview">Q${i+1}. ${q.text}</div>
        <div style="display:flex;gap:6px;margin-left:10px;">
          <span class="badge badge-${diffColors[q.difficulty]}">${q.difficulty}</span>
          <span class="badge badge-primary">${q.topic}</span>
        </div>
      </div>
      <div class="question-options">
        ${q.opts.map((o, j) => `
          <div class="q-option ${q.correct === String.fromCharCode(65+j) ? 'correct' : ''}">
            ${String.fromCharCode(65+j)}. ${o} ${q.correct === String.fromCharCode(65+j) ? '✓' : ''}
          </div>
        `).join('')}
      </div>
    </div>
  `}).join('');
}

function filterQB() { renderQuestionBank(questionBank); }

function openAddQuestion() {
  openModal('Add Question', `
    <div class="form-group"><label>Question Text</label>
      <textarea rows="3" placeholder="Enter your question here..."></textarea></div>
    <div class="form-row">
      <div class="form-group"><label>Category</label>
        <select><option>aptitude</option><option>coding</option><option>verbal</option><option>technical</option></select></div>
      <div class="form-group"><label>Difficulty</label>
        <select><option>easy</option><option>medium</option><option>hard</option></select></div>
    </div>
    <div class="form-group"><label>Topic Tag</label><input type="text" placeholder="e.g. Probability"/></div>
    <div class="form-group"><label>Option A</label><input type="text" placeholder="Option A"/></div>
    <div class="form-group"><label>Option B</label><input type="text" placeholder="Option B"/></div>
    <div class="form-group"><label>Option C</label><input type="text" placeholder="Option C"/></div>
    <div class="form-group"><label>Option D</label><input type="text" placeholder="Option D"/></div>
    <div class="form-group"><label>Correct Answer</label>
      <select><option>A</option><option>B</option><option>C</option><option>D</option></select></div>
    <button class="btn btn-primary" style="width:100%;justify-content:center;" onclick="closeModal();showToast('Question added to bank!','success')">
      <i class="fas fa-save"></i> Add Question
    </button>
  `);
}

// ---- Assignments ----
function renderAdminAssignments() {
  const tbody = document.getElementById('admin-assign-tbody');
  if (!tbody) return;
  const statusColors = { active: 'warning', closed: 'info', graded: 'success' };
  tbody.innerHTML = adminAssignments.map(a => `
    <tr>
      <td><strong>${a.name}</strong></td>
      <td style="color:var(--text-secondary)">${a.trainer}</td>
      <td style="color:var(--text-muted)">${a.deadline}</td>
      <td><strong>${a.submitted}/${a.total}</strong>
        <div class="progress-bar-wrap" style="margin-top:4px;"><div class="progress-bar-fill fill-primary" style="width:${Math.round(a.submitted/a.total*100)}%"></div></div>
      </td>
      <td><span class="badge badge-${statusColors[a.status]}">${a.status}</span></td>
      <td><div class="action-cell">
        <button class="action-icon-btn" onclick="showToast('Viewing submissions','info')"><i class="fas fa-eye"></i></button>
        <button class="action-icon-btn" onclick="showToast('Editing assignment','info')"><i class="fas fa-pen"></i></button>
      </div></td>
    </tr>
  `).join('');
}

function openCreateAssignment() {
  openModal('Create Assignment', `
    <div class="form-group"><label>Assignment Title</label><input type="text" placeholder="e.g. Binary Tree Problems"/></div>
    <div class="form-group"><label>Description</label><textarea rows="3" placeholder="Describe the assignment..."></textarea></div>
    <div class="form-row">
      <div class="form-group"><label>Deadline</label><input type="date"/></div>
      <div class="form-group"><label>Target Batch</label>
        <select><option>All Students</option><option>CSE 2025</option><option>All Final Year</option></select></div>
    </div>
    <div class="form-group"><label>Attachment (PDF)</label><input type="file" accept=".pdf"/></div>
    <button class="btn btn-primary" style="width:100%;justify-content:center;" onclick="closeModal();showToast('Assignment created!','success')">
      <i class="fas fa-save"></i> Create Assignment
    </button>
  `);
}

// ---- Drives ----
function renderDrives() {
  const tbody = document.getElementById('admin-drives-tbody');
  if (!tbody) return;
  const statusColors = { upcoming: 'info', completed: 'success' };
  tbody.innerHTML = driveData.map(d => `
    <tr>
      <td><strong>${d.company}</strong></td>
      <td>${d.role}</td>
      <td style="color:var(--success);font-weight:600">${d.ctc}</td>
      <td>${d.minCgpa}</td>
      <td style="color:var(--text-muted)">${d.date}</td>
      <td><strong>${d.applied}</strong></td>
      <td><span class="badge badge-${statusColors[d.status]}">${d.status}</span></td>
      <td><div class="action-cell">
        <button class="action-icon-btn" onclick="showToast('Viewing applications for ${d.company}','info')"><i class="fas fa-users"></i></button>
        <button class="action-icon-btn" onclick="showToast('Editing ${d.company} drive','info')"><i class="fas fa-pen"></i></button>
        <button class="action-icon-btn danger" onclick="showToast('Drive removed','success')"><i class="fas fa-trash"></i></button>
      </div></td>
    </tr>
  `).join('');
}

function openAddDrive() {
  openModal('Add Placement Drive', `
    <div class="form-group"><label>Company Name</label><input type="text" placeholder="e.g. TCS"/></div>
    <div class="form-group"><label>Role Offered</label><input type="text" placeholder="e.g. System Engineer"/></div>
    <div class="form-row">
      <div class="form-group"><label>CTC (LPA)</label><input type="number" step="0.1" placeholder="3.6"/></div>
      <div class="form-group"><label>Min. CGPA</label><input type="number" step="0.5" max="10" placeholder="6.0"/></div>
    </div>
    <div class="form-group"><label>Drive Date</label><input type="date"/></div>
    <div class="form-group"><label>Eligible Departments</label>
      <select multiple style="height:90px;"><option>CSE</option><option>IT</option><option>ECE</option><option>EEE</option><option>MECH</option></select></div>
    <button class="btn btn-primary" style="width:100%;justify-content:center;margin-top:10px;" onclick="closeModal();showToast('Placement drive added!','success')">
      <i class="fas fa-save"></i> Add Drive
    </button>
  `);
}

// ---- Feedback ----
function renderFeedback() {
  const c = document.getElementById('feedback-list');
  if (!c) return;
  c.innerHTML = feedbackData.map(f => `
    <div class="feedback-item">
      <div class="feedback-header">
        <div>
          <div class="feedback-student">${f.student}</div>
          <div style="font-size:0.75rem;color:var(--text-muted)">Interviewed by: ${f.interviewer}</div>
        </div>
        <div class="feedback-scores">
          <div class="fb-score"><div class="fb-score-val">${f.comm}</div><div class="fb-score-label">Comm</div></div>
          <div class="fb-score"><div class="fb-score-val">${f.tech}</div><div class="fb-score-label">Tech</div></div>
          <div class="fb-score"><div class="fb-score-val">${f.apt}</div><div class="fb-score-label">Apt</div></div>
        </div>
      </div>
      <div style="font-size:0.8rem;color:var(--success);margin-bottom:4px;"><i class="fas fa-thumbs-up"></i> <strong>Strengths:</strong> ${f.strengths}</div>
      <div class="feedback-comment"><i class="fas fa-arrow-up"></i> Improve: ${f.improve}</div>
    </div>
  `).join('');
}

function openAddFeedback() {
  openModal('Add Interview Feedback', `
    <div class="form-group"><label>Student</label><input type="text" placeholder="Student name or roll number"/></div>
    <div class="form-row">
      <div class="form-group"><label>Communication Score (1-10)</label><input type="number" min="1" max="10" value="7"/></div>
      <div class="form-group"><label>Technical Score (1-10)</label><input type="number" min="1" max="10" value="7"/></div>
    </div>
    <div class="form-group"><label>Aptitude Score (1-10)</label><input type="number" min="1" max="10" value="7"/></div>
    <div class="form-group"><label>Strengths</label><textarea rows="2" placeholder="List student strengths..."></textarea></div>
    <div class="form-group"><label>Areas to Improve</label><textarea rows="2" placeholder="Suggest improvements..."></textarea></div>
    <button class="btn btn-primary" style="width:100%;justify-content:center;" onclick="closeModal();showToast('Feedback recorded!','success')">
      <i class="fas fa-save"></i> Save Feedback
    </button>
  `);
}

// ---- Announcements ----
function renderAnnouncements() {
  renderAnnouncementsPreview();
  const c = document.getElementById('announcements-list');
  if (!c) return;
  const priorityColors = { Urgent: 'danger', Important: 'warning', Normal: 'info' };
  c.innerHTML = announcements.map(a => `
    <div class="announcement-item">
      <div class="ann-icon" style="background:rgba(108,99,255,0.12);color:${a.color}"><i class="${a.icon}"></i></div>
      <div>
        <div class="ann-title">${a.title}</div>
        <div class="ann-content">${a.msg.substring(0,80)}...</div>
        <div class="ann-time">${a.target} · ${a.time} · <span class="badge badge-${priorityColors[a.priority]}" style="font-size:0.6rem">${a.priority}</span></div>
      </div>
    </div>
  `).join('');
  const countEl = document.getElementById('ann-count');
  if (countEl) countEl.textContent = announcements.length;
}

function renderAnnouncementsPreview() {
  const c = document.getElementById('announcements-preview');
  if (!c) return;
  const priorityColors = { Urgent: 'danger', Important: 'warning', Normal: 'info' };
  c.innerHTML = announcements.slice(0,3).map(a => `
    <div class="announcement-item">
      <div class="ann-icon" style="background:rgba(108,99,255,0.12);color:${a.color}"><i class="${a.icon}"></i></div>
      <div>
        <div class="ann-title">${a.title}</div>
        <div class="ann-content">${a.msg.substring(0,80)}...</div>
        <div class="ann-time">${a.target} · ${a.time} · <span class="badge badge-${priorityColors[a.priority]}" style="font-size:0.6rem">${a.priority}</span></div>
      </div>
    </div>
  `).join('');
}

function postAnnouncement() {
  const title    = document.getElementById('ann-title')?.value;
  const msg      = document.getElementById('ann-msg')?.value;
  const target   = document.getElementById('ann-target')?.value;
  const priority = document.getElementById('ann-priority')?.value;
  if (!title || !msg) { showToast('Please fill in title and message.', 'error'); return; }
  announcements.unshift({
    title, msg, target, priority, time: 'Just now',
    color: 'var(--primary-light)', icon: 'fas fa-bell'
  });
  renderAnnouncements();
  document.getElementById('ann-title').value = '';
  document.getElementById('ann-msg').value   = '';
  showToast(`Announcement sent to: ${target}!`, 'success');
}

// ---- At-Risk Students ----
function renderAtRisk() {
  const c = document.getElementById('at-risk-list');
  if (!c) return;
  c.innerHTML = atRisk.map(s => `
    <div class="risk-item">
      <div class="student-row-avatar" style="width:36px;height:36px;border-radius:50%;">
        ${s.name.split(' ').map(n=>n[0]).join('')}
      </div>
      <div class="risk-info">
        <div class="risk-name">${s.name} <span style="color:var(--text-muted);font-weight:400">(${s.dept})</span></div>
        <div class="risk-score">${s.reason}</div>
      </div>
      <span class="badge badge-danger">${s.score}</span>
      <span class="risk-action" onclick="showToast('Scheduling intervention for ${s.name}','info')">Intervene →</span>
    </div>
  `).join('');
}

// ---- Podium ----
function renderPodium() {
  const topStudents = [...studentsData].sort((a,b) => b.pri - a.pri).slice(0,3);
  const c = document.getElementById('podium');
  if (!c) return;
  const colors = ['#f9ca24','#b2bec3','#e17055'];
  const positions = [1, 0, 2]; // 2nd, 1st, 3rd visual order
  const reordered = [topStudents[1], topStudents[0], topStudents[2]];
  c.innerHTML = reordered.map((s, visIdx) => `
    <div class="podium-item">
      <div class="podium-avatar" style="background:linear-gradient(135deg,var(--primary),var(--secondary))">
        ${s.name.split(' ').map(n=>n[0]).join('').slice(0,2)}
      </div>
      <div class="podium-name">${s.name.split(' ')[0]}</div>
      <div class="podium-score">${s.pri} PRI</div>
      <div class="podium-stand ${visIdx===1?'gold':visIdx===0?'silver':'bronze'}">
        ${visIdx===1?'🥇':visIdx===0?'🥈':'🥉'}
      </div>
    </div>
  `).join('');
}

// ---- Bulk Import Drop Zone ----
function handleDrop(e) {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  if (file) handleFileUpload({ files: [file] });
}

function handleFileUpload(input) {
  const file = input.files[0];
  if (!file) return;
  const r = document.getElementById('upload-result');
  r.innerHTML = `<div style="display:flex;align-items:center;gap:8px;color:var(--text-muted);font-size:0.85rem;margin-bottom:10px;"><div style="width:18px;height:18px;border:2px solid var(--primary);border-top-color:transparent;border-radius:50%;animation:spin 0.7s linear infinite"></div> Processing ${file.name}...</div>`;
  setTimeout(() => {
    r.innerHTML = `
      <div style="background:rgba(0,212,170,0.1);border:1px solid rgba(0,212,170,0.3);border-radius:10px;padding:16px;">
        <div style="font-weight:700;color:var(--success);margin-bottom:8px;"><i class="fas fa-check-circle"></i> Import Successful!</div>
        <div style="font-size:0.82rem;color:var(--text-secondary);">✓ 48 students imported<br/>✓ 0 duplicates skipped<br/>✓ Welcome emails queued</div>
      </div>`;
    showToast('48 students imported successfully!', 'success');
  }, 1800);
}

// ---- Admin Analytics Charts ----
let analyticsInited = false;

function initDashboardCharts() {
  Chart.defaults.color = '#9d9bc8';
  Chart.defaults.font.family = 'Inter';

  // Batch Trend
  new Chart(document.getElementById('batchTrendChart'), {
    type: 'line',
    data: {
      labels: ['Oct','Nov','Dec','Jan','Feb','Mar'],
      datasets: [
        { label: 'Aptitude', data: [62,65,67,66,69,67], borderColor:'#6c63ff', tension:0.4, borderWidth:2, fill:false, pointRadius:4 },
        { label: 'Coding',   data: [58,59,61,63,64,62], borderColor:'#00d4aa', tension:0.4, borderWidth:2, fill:false, pointRadius:4 },
        { label: 'Verbal',   data: [70,71,73,74,75,74], borderColor:'#ff9f43', tension:0.4, borderWidth:2, fill:false, pointRadius:4 },
      ]
    },
    options: {
      responsive: true,
      plugins: { legend: { position:'top', labels: { boxWidth:12, padding:12 } } },
      scales: {
        y: { min:40, max:100, grid: { color:'rgba(255,255,255,0.04)' }, ticks: { callback: v=>v+'%' } },
        x: { grid: { display:false } }
      }
    }
  });

  // Dept Placement
  new Chart(document.getElementById('deptChart'), {
    type: 'bar',
    data: {
      labels: ['CSE','IT','ECE','EEE','MECH'],
      datasets: [{
        label: 'Placement %',
        data: [92, 88, 78, 65, 70],
        backgroundColor: ['#6c63ff','#00d4aa','#ff9f43','#74b9ff','#ff6b6b'],
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display:false } },
      scales: {
        y: { max:100, ticks: { callback: v=>v+'%' }, grid: { color:'rgba(255,255,255,0.04)' } },
        x: { grid: { display:false } }
      }
    }
  });
}

function initAnalyticsCharts() {
  // Score Distribution
  new Chart(document.getElementById('distChart'), {
    type: 'bar',
    data: {
      labels: ['0-40%','41-55%','56-70%','71-85%','86-100%'],
      datasets: [{
        label: 'Students',
        data: [18, 54, 142, 188, 85],
        backgroundColor: ['#ff6b6b','#ff9f43','#74b9ff','#6c63ff','#00d4aa'],
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display:false } },
      scales: {
        y: { grid: { color:'rgba(255,255,255,0.04)' } },
        x: { grid: { display:false } }
      }
    }
  });

  // Category Comparison
  new Chart(document.getElementById('catCompChart'), {
    type: 'radar',
    data: {
      labels: ['Aptitude','Coding','Verbal','Technical','GD','Resume'],
      datasets: [{
        label: 'Batch Avg',
        data: [67, 62, 74, 68, 50, 72],
        backgroundColor: 'rgba(108,99,255,0.15)',
        borderColor: '#6c63ff',
        borderWidth: 2,
        pointBackgroundColor: '#6c63ff',
        pointRadius: 4
      }, {
        label: 'Industry Standard',
        data: [75, 70, 78, 75, 65, 80],
        backgroundColor: 'rgba(0,212,170,0.1)',
        borderColor: '#00d4aa',
        borderWidth: 2,
        pointBackgroundColor: '#00d4aa',
        pointRadius: 4
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { position:'top', labels: { boxWidth:12, padding:12 } } },
      scales: { r: { min:0, max:100, grid: { color:'rgba(255,255,255,0.06)' },
        ticks: { display:false }, pointLabels: { font: { size:11 } } } }
    }
  });

  // Drive Applications
  new Chart(document.getElementById('driveAppChart'), {
    type: 'doughnut',
    data: {
      labels: ['TCS (142)','Infosys (98)','Wipro (110)','Zoho (44)','Others (93)'],
      datasets: [{
        data: [142, 98, 110, 44, 93],
        backgroundColor: ['#6c63ff','#00d4aa','#ff9f43','#ff6b6b','#74b9ff'],
        borderWidth: 0,
        hoverOffset: 6
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { position:'bottom', labels: { boxWidth:12, padding:12 } } }
    }
  });

  // Activity
  new Chart(document.getElementById('activityChart'), {
    type: 'bar',
    data: {
      labels: ['Oct','Nov','Dec','Jan','Feb','Mar'],
      datasets: [{
        label: 'Tests Conducted',
        data: [18, 22, 15, 26, 30, 31],
        backgroundColor: 'rgba(108,99,255,0.6)',
        borderRadius: 6
      }, {
        label: 'Students Active',
        data: [310, 340, 280, 390, 440, 460],
        backgroundColor: 'rgba(0,212,170,0.4)',
        borderRadius: 6,
        yAxisID: 'y2'
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { position:'top', labels: { boxWidth:12, padding:12 } } },
      scales: {
        y:  { position:'left', grid: { color:'rgba(255,255,255,0.04)' } },
        y2: { position:'right', display:false }
      }
    }
  });
}

// ---- Modal ----
function openModal(title, bodyHTML) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').innerHTML    = bodyHTML;
  document.getElementById('generic-modal').style.display = 'flex';
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('generic-modal')) return;
  document.getElementById('generic-modal').style.display = 'none';
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
  setTimeout(() => {
    t.style.opacity = '0'; t.style.transform = 'translateX(30px)'; t.style.transition = '0.3s ease';
    setTimeout(() => t.remove(), 350);
  }, 3000);
}

function logout() {
  if (confirm('Sign out of Admin panel?')) window.location.href = 'index.html';
}

function toggleSidebar() {
  const sidebar  = document.getElementById('sidebar');
  const overlay  = document.getElementById('sidebar-overlay');
  sidebar.classList.toggle('open');
  if (overlay) overlay.classList.toggle('active');
}

// ---- Drop Zone Style ----
const dropZoneStyle = `
.drop-zone {
  border: 2px dashed var(--border);
  border-radius: var(--radius-md);
  padding: 40px 20px;
  text-align: center;
  transition: var(--transition);
  cursor: pointer;
  color: var(--text-secondary);
}
.drop-zone:hover { border-color: var(--primary); background: rgba(108,99,255,0.04); }
`;
const styleEl = document.createElement('style');
styleEl.textContent = dropZoneStyle;
document.head.appendChild(styleEl);

// ---- Init ----
window.addEventListener('DOMContentLoaded', () => {
  renderStudents(studentsData);
  renderAdminTests();
  renderAdminAssignments();
  renderDrives();
  renderFeedback();
  renderAnnouncements();
  renderAtRisk();
  renderPodium();
  initDashboardCharts();
});
