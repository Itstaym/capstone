function openTab(evt, tabName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tab-content");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
      }
      tablinks = document.getElementsByClassName("tab-link");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
      }
      document.getElementById(tabName).classList.add("active");
      evt.currentTarget.classList.add("active");
    }

    
    function sendReminder(memberName) {
      alert("Reminder sent to " + memberName + " to return borrowed books.");
    }
    
    if (!sessionStorage.getItem('isLoggedIn')) {
      alert('Nag-logout ka noh? Login ka ulit!');
      window.location.href = '../../main_login/main_login.html'; 
    }
    function logout() {
    sessionStorage.removeItem('isLoggedIn'); 
    window.location.href = '../../main_login/main_login.html'; 
  }
    function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toLocaleString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);