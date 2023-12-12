function showSignup() {
    document.querySelector('.login-form').style.transform = 'translateX(-100%)';
    document.querySelector('.signup-form').style.transform = 'translateX(0)';
  }

  function showLogin() {
    document.querySelector('.login-form').style.transform = 'translateX(0)';
    document.querySelector('.signup-form').style.transform = 'translateX(100%)';
  }