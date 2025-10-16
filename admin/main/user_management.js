function editUser(button, userType) {
    const row = button.closest('tr');
    const id = row.cells[0].textContent;
    const name = row.cells[1].textContent;
    
    // Add your edit logic here
    console.log(`Editing ${userType} with ID: ${id}, Name: ${name}`);
}

function deleteUser(button, userType) {
    const row = button.closest('tr');
    const id = row.cells[0].textContent;
    const name = row.cells[1].textContent;
    
    if (confirm(`Are you sure you want to delete ${userType}: ${name}?`)) {
        row.remove();
        // Add your delete logic here
        console.log(`Deleted ${userType} with ID: ${id}`);
    }
}

// Search functionality
document.getElementById('searchUsers').addEventListener('input', function(e) {
    const searchText = e.target.value.toLowerCase();
    const tables = ['studentsTable', 'teachersTable'];
    
    tables.forEach(tableId => {
        const rows = document.querySelectorAll(`#${tableId} tbody tr`);
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(searchText) ? '' : 'none';
        });
    });
});

// Modal
const modal = document.getElementById("editModal");
const span = document.getElementsByClassName("close")[0];
const editForm = document.getElementById("editUser");

function editUser(button, userType) {
    const row = button.closest('tr');
    const fullName = row.cells[0].textContent;
    const email = row.cells[1].textContent;

    document.getElementById('editFullName').value = fullName;
    document.getElementById('editEmail').value = email;

    editForm.dataset.editingRow = row.rowIndex;
    editForm.dataset.userType = userType;

    modal.style.display = "block";
}

// close modal
function closeModal() {
    modal.style.display = "none";
}

closeBtn.onlick = closeModal;
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}

document.querySelector('.btn-save').onclick = function() {
    let fullName = document.getElementById('editFullName').value;
    let email = document.getElementById('editEmail').value;

    if(email.endsWith('@paterostechnologicalcollege.edu.ph')) {
        alert("Email must be a valid PTC email address.");
        return;
    }


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