function createUser(event) {
            event.preventDefault();
            // Collect form data
            const username = document.getElementById('username').value.trim();
            const fullname = document.getElementById('fullname').value.trim();
            const email = document.getElementById('email').value.trim();
            const role = document.getElementById('role').value;
            const password = document.getElementById('password').value;

            // Here you would send the data to your backend/server for actual account creation
            // For demo, just show a message
            document.getElementById('userCreateMsg').innerHTML =
                `<span style="color:green;"><i class="fas fa-check-circle"></i> User account for <b>${fullname}</b> created successfully!</span>`;

            document.getElementById('createUserForm').reset();
            return false;
        }

        function logout() {
            sessionStorage.removeItem('isLoggedIn');
            window.location.href = '../../main_login/main_login.html';
        }

        function showTime() {
            document.getElementById('currentTime').innerHTML = new Date().toLocaleString();
        }
        showTime();
        setInterval(showTime, 1000);