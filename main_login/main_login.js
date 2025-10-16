function showPassword() {
      let passwordField = document.getElementById('password');
      let eyeIcon = document.querySelector('.password-wrapper i');
      if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
      } else {
        passwordField.type = "password";
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
      }
    }

    function login(event) {
      event.preventDefault();

      const name = document.getElementById('username').value;
      const pw = document.getElementById('password').value;
  
      let role = null;

      if (name === "admin" && pw === "password1") {
        role = 'admin'; 
      }
      else if (name === "librarian" && pw === "password2") {
        role = 'librarian';
      }
      else if (name === "user" && pw === "password3") {
        role = 'user'; 
      }

      switch (role) { 
        case 'admin':
          sessionStorage.setItem('isLoggedIn', 'true');
          window.location.href = "../admin/main/admin_main.html";
          break;
        case 'librarian':
          sessionStorage.setItem('isLoggedIn', 'true');
          window.location.href = "../librarian/main/main.html";
          break;
        case 'user': 
          sessionStorage.setItem('isLoggedIn', 'true');
          window.location.href = "../user/main/user_main.html";
          break;
        default:
          alert("Invalid credentials");
      }
    }