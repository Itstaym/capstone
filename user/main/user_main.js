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

    function searchBooks() {
      const input = document.getElementById("searchInput").value.toLowerCase();
      const table = document.getElementById("booksTable");
      const rows = table.getElementsByTagName("tr");

      for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        let match = false;

        for (let j = 0; j < cells.length; j++) {
          if (cells[j]) {
            const cellText = cells[j].textContent || cells[j].innerText;
            if (cellText.toLowerCase().indexOf(input) > -1) {
              match = true;
              break;
            }
          }
        }

        rows[i].style.display = match ? "" : "none";
      }
    }

    // Replace the existing DOMContentLoaded event listener with this:
    document.addEventListener('DOMContentLoaded', function () {
      const rows = document.querySelectorAll('#booksTable tbody tr');

      rows.forEach(row => {
        const statusCell = row.querySelector('td:nth-child(5)');
        const buttonCell = row.querySelector('td:last-child');
        const bookTitle = row.querySelector('td:first-child').textContent;

        if (statusCell.textContent.trim().toLowerCase() === 'not available') {
          // Replace button with unavailable button
          buttonCell.innerHTML = '<button class="borrow-btn unavailable" disabled>Not Available</button>';
        } else {
          // Add click event for available books
          const borrowButton = buttonCell.querySelector('.borrow-btn');
          borrowButton.addEventListener('click', function () {
            const confirmed = confirm(`Are you sure you want to borrow "${bookTitle}"?`);

            if (confirmed) {
              this.textContent = 'Pending';
              this.disabled = true;
              this.style.backgroundColor = '#888';

              statusCell.textContent = 'Pending';
              statusCell.style.color = '#FFA500';

              addNotification(bookTitle);

              alert(`Request to borrow "${bookTitle}" has been submitted. Please wait for approval.`);
            }
          });
        }
      });
    });

    function updateBookStatus(bookId, status) {
      const row = document.querySelector(`tr[data-book-id="${bookId}"]`);
      if (row) {
        const statusCell = row.querySelector('td:nth-child(5)');
        const borrowButton = row.querySelector('.borrow-btn');

        // Update status
        statusCell.textContent = status;
        statusCell.style.color = status === 'Available' ? '#000' : '#FFA500';

        // Update button
        if (status === 'Available') {
          borrowButton.textContent = 'Borrow';
          borrowButton.disabled = false;
          borrowButton.style.backgroundColor = '#4CAF50';
          borrowButton.classList.remove('unavailable');
        }
      }
    }

    // Example usage:
    // updateBookStatus('book1', 'Available'); // Call this when a book is returned