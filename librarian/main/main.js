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

document.addEventListener("DOMContentLoaded", function () {
  // Example: Handle Accept/Decline actions
  document.getElementById('requestNotifications').addEventListener('click', function(e) {
    if (e.target.classList.contains('accept-btn') || e.target.classList.contains('decline-btn')) {
      const li = e.target.closest('li');
      const note = li.querySelector('.note-input').value;
      const action = e.target.classList.contains('accept-btn') ? 'accepted' : 'declined';
      li.innerHTML = `<span style="color:${action==='accepted'?'#4CAF50':'#e74c3c'};">
        <i class="fas fa-${action==='accepted'?'check':'times'}-circle"></i> Request ${action}.
        ${note ? '<br><b>Note:</b> ' + note : ''}
      </span>`;
    }
  });
});

showTime();
setInterval(function () {
	showTime();
}, 1000);