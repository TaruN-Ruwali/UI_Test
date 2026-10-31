document.addEventListener('DOMContentLoaded', () => {
  const userEmailDisplay = document.getElementById('userEmailDisplay');
  const loginTimeDisplay = document.getElementById('loginTimeDisplay');
  const logoutBtn = document.getElementById('logoutBtn');

  // Load session information
  const user = sessionStorage.getItem('currentUser') || 'abc@gmail.com';
  const loginTime = sessionStorage.getItem('loginTime') || new Date().toLocaleTimeString();

  if (userEmailDisplay) {
    userEmailDisplay.textContent = user;
  }
  if (loginTimeDisplay) {
    loginTimeDisplay.textContent = loginTime;
  }

  // Handle Logout
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem('currentUser');
      sessionStorage.removeItem('loginTime');
      window.location.replace('home.html');
    });
  }
});

