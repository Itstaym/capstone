// Display current time in footer
        function showTime() {
            document.getElementById('currentTime').innerHTML = new Date().toLocaleString();
        }
        showTime();
        setInterval(showTime, 1000);

        if (!sessionStorage.getItem('isLoggedIn')) {
            alert('Nag-logout ka noh? Login ka ulit!');
            window.location.href = '../../main_login/main_login.html'; 
            }
        function logout() {
            sessionStorage.removeItem('isLoggedIn'); 
            window.location.href = '../../main_login/main_login.html'; 
            }