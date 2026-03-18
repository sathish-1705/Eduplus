// EduPlus — Login Page JavaScript

// Particle effect
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.style.cssText = `
      position: absolute;
      width: ${Math.random() * 3 + 1}px;
      height: ${Math.random() * 3 + 1}px;
      background: rgba(108,99,255,${Math.random() * 0.4 + 0.1});
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: floatOrb ${Math.random() * 8 + 6}s ease-in-out infinite alternate;
      animation-delay: ${Math.random() * 4}s;
    `;
    container.appendChild(p);
  }
}
createParticles();

// Role selection
let selectedRole = 'student';
function selectRole(role, btn) {
  selectedRole = role;
  document.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// Password toggle
function togglePassword() {
  const input = document.getElementById('password');
  const icon  = document.getElementById('pwd-icon');
  if (input.type === 'password') {
    input.type = 'text';
    icon.classList.replace('fa-eye', 'fa-eye-slash');
  } else {
    input.type = 'password';
    icon.classList.replace('fa-eye-slash', 'fa-eye');
  }
}

// Quick demo login
function quickLogin(role) {
  const emails = { student: 'student@college.edu', admin: 'admin@eduplus.com' };
  document.getElementById('email').value = emails[role] || emails.student;
  document.getElementById('password').value = 'demo1234';
  // Activate correct role button
  const btn = document.querySelector(`[data-role="${role}"]`);
  if (btn) selectRole(role, btn);
  setTimeout(() => handleLogin({ preventDefault: () => {} }), 300);
}

// Login handler
function handleLogin(e) {
  e.preventDefault();
  const btn = document.getElementById('login-btn');
  btn.classList.add('loading');
  btn.disabled = true;

  setTimeout(() => {
    btn.classList.remove('loading');
    btn.disabled = false;
    // Route based on selected role
    if (selectedRole === 'admin') {
      window.location.href = 'admin.html';
    } else {
      window.location.href = 'student.html';
    }
  }, 1200);
}
