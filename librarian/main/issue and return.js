let approvedRequests = []; // Will store approved requests from database

// Simulate fetching approved requests (replace with actual API call)
function fetchApprovedRequests() {
    // Dummy data - replace with actual API call
    approvedRequests = [
        { id: 1, studentName: 'Juan Dela Cruz', bookTitle: 'Introduction to Programming' },
        { id: 2, studentName: 'Maria Santos', bookTitle: 'Database Management' }
    ];
    populateRequestDropdown();
}

function populateRequestDropdown() {
    const select = document.getElementById('requestSelect');
    select.innerHTML = '<option value="">Select a request...</option>';
    
    approvedRequests.forEach(request => {
        const option = document.createElement('option');
        option.value = request.id;
        option.textContent = `${request.studentName} - ${request.bookTitle}`;
        select.appendChild(option);
    });
}

    function openQrScanner(inputId) {
      currentInputId = inputId;
      document.getElementById("qrScannerModal").style.display = "block";

      const reader = document.getElementById("reader");
      reader.innerHTML = "<div class='scan-message'>Please Scan the Book</div>";

      setTimeout(() => {
        const success = Math.random() > 0.3;
        const isBorrow = inputId === 'issueBookTitle';
        const statusId = isBorrow ? 'scanStatus' : 'returnScanStatus';
        const timestampId = isBorrow ? 'scanTimestamp' : 'returnScanTimestamp';
        const dateTimeId = isBorrow ? 'borrowDateTime' : 'returnDateTime';

        if (success) {
          const sampleBookId = "BOOK-" + Math.floor(Math.random() * 1000);
          document.getElementById(currentInputId).value = sampleBookId;
          
          // Get current date and time
          const now = new Date();
          document.getElementById(dateTimeId).value = now.toISOString();
          
          // Update scan status and timestamp
          document.getElementById(statusId).innerHTML = "Scan Successfully";
          document.getElementById(timestampId).innerHTML = now.toLocaleString();
          
          reader.innerHTML = "<div class='scan-message success'>Scan Successful</div>";
          setTimeout(() => {
            closeQrScanner();
          }, 1500);
        } else {
          reader.innerHTML = "<div class='scan-message error'>Scan Failed. Please try again.</div>";
          
          // Clear scan status and timestamp if failed
          document.getElementById(statusId).innerHTML = "";
          document.getElementById(timestampId).innerHTML = "";
          
          setTimeout(() => {
            reader.innerHTML = "<div class='scan-message'>Please scan the Book</div>";
          }, 3000);
        }
    }, 3000);
  }

    function closeQrScanner() {
      document.getElementById("qrScannerModal").style.display = "none";
      const reader = document.getElementById("reader");
      if (reader) {
        reader.innerHTML = ""; 
      }
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
    setInterval(showTime, 1000);

    // Call this when the page loads
document.addEventListener('DOMContentLoaded', fetchApprovedRequests);