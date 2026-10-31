// Strict Authorized Credentials
const AUTHORIZED_CREDENTIALS = {
  email: 'abc@gmail.com',
  password: 'Admin@123'
};

// DOM Elements
const loginCard = document.getElementById('loginCard');
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');
const errorText = document.getElementById('errorText');
const submitBtn = document.getElementById('submitBtn');
const btnText = submitBtn.querySelector('.btn-text');
const btnLoader = submitBtn.querySelector('.btn-loader');
const togglePasswordBtn = document.getElementById('togglePasswordBtn');
const eyeIcon = document.getElementById('eyeIcon');
const eyeOffIcon = document.getElementById('eyeOffIcon');
const toast = document.getElementById('toast');

// Auto-redirect if already authenticated
document.addEventListener('DOMContentLoaded', () => {
  const activeSession = sessionStorage.getItem('currentUser');
  if (activeSession === AUTHORIZED_CREDENTIALS.email) {
    window.location.replace('dashboard.html');
  }
});

// Toggle Password Visibility
togglePasswordBtn.addEventListener('click', () => {
  const isPassword = passwordInput.getAttribute('type') === 'password';
  if (isPassword) {
    passwordInput.setAttribute('type', 'text');
    eyeIcon.style.display = 'none';
    eyeOffIcon.style.display = 'block';
  } else {
    passwordInput.setAttribute('type', 'password');
    eyeIcon.style.display = 'block';
    eyeOffIcon.style.display = 'none';
  }
});

// Clear errors when typing
[emailInput, passwordInput].forEach(input => {
  input.addEventListener('input', () => {
    hideError();
    input.classList.remove('input-error');
  });
});

// Form Submission
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const enteredEmail = emailInput.value.trim();
  const enteredPassword = passwordInput.value;

  if (!enteredEmail || !enteredPassword) {
    displayError('Please enter both email and password.');
    if (!enteredEmail) emailInput.classList.add('input-error');
    if (!enteredPassword) passwordInput.classList.add('input-error');
    triggerShakeAnimation();
    return;
  }

  setLoading(true);

  setTimeout(() => {
    // STRICT CREDENTIAL CHECK:
    // Only abc@gmail.com and Admin@123 are accepted.
    const isEmailValid = enteredEmail.toLowerCase() === AUTHORIZED_CREDENTIALS.email.toLowerCase();
    const isPasswordValid = enteredPassword === AUTHORIZED_CREDENTIALS.password;

    if (isEmailValid && isPasswordValid) {
      hideError();
      sessionStorage.setItem('currentUser', AUTHORIZED_CREDENTIALS.email);
      sessionStorage.setItem('loginTime', new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      
      showToast('Authentication successful! Opening dashboard...', 'success');
      
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 500);
    } else {
      displayError('Invalid email or password. Access denied.');
      emailInput.classList.add('input-error');
      passwordInput.classList.add('input-error');
      triggerShakeAnimation();
      showToast('Access denied: Unauthorized credentials', 'error');
      setLoading(false);
    }
  }, 400);
});

function displayError(message) {
  errorText.textContent = message;
  errorMessage.style.display = 'flex';
}

function hideError() {
  errorMessage.style.display = 'none';
}

function triggerShakeAnimation() {
  loginCard.classList.remove('shake');
  void loginCard.offsetWidth;
  loginCard.classList.add('shake');
}

function setLoading(isLoading) {
  if (isLoading) {
    submitBtn.disabled = true;
    btnText.style.display = 'none';
    btnLoader.style.display = 'inline-block';
  } else {
    submitBtn.disabled = false;
    btnText.style.display = 'inline-block';
    btnLoader.style.display = 'none';
  }
}

function showToast(message, type = 'success') {
  toast.textContent = message;
  toast.className = `toast show ${type === 'success' ? 'toast-success' : 'toast-error'}`;

  setTimeout(() => {
    toast.className = 'toast';
  }, 3200);
}

