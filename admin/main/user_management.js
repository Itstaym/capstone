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

function showTime() {
            document.getElementById('currentTime').innerHTML = new Date().toLocaleString();
        }
        showTime();
        setInterval(showTime, 1000);