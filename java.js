// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Page elements
    const loginPage = document.getElementById('loginPage');
    const registerPage = document.getElementById('registerPage');
    const dashboardPage = document.getElementById('dashboardPage');

    // Link/Button elements
    const showRegisterLink = document.getElementById('showRegister');
    const showLoginLink = document.getElementById('showLogin');
    const logoutBtn = document.getElementById('logoutBtn');

    // Form elements
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const noteForm = document.getElementById('noteForm');
    const notesList = document.querySelector('.notes-list');

    // --- Page Navigation Logic ---

    // Function to hide all pages
    const hideAllPages = () => {
        loginPage.classList.remove('active');
        registerPage.classList.remove('active');
        dashboardPage.classList.remove('active');
    };

    // Function to show a specific page
    const showPage = (page) => {
        hideAllPages();
        page.classList.add('active');
    };

    // Event listeners for switching between login and register
    showRegisterLink.addEventListener('click', (e) => {
        e.preventDefault();
        showPage(registerPage);
    });

    showLoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        showPage(loginPage);
    });
    
    // Event listener for faking login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // In a real app, you'd send data to a server here
        console.log('Login submitted');
        showPage(dashboardPage);
    });

    // Event listener for faking registration
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // In a real app, you'd send data to a server here
        console.log('Register submitted');
        alert('Registration successful! Please log in.');
        showPage(loginPage); // Go to login after registration
    });

    // Event listener for logout
    logoutBtn.addEventListener('click', () => {
        console.log('Logged out');
        showPage(loginPage);
    });

    // --- Dashboard Functionality (Front-end only) ---
    noteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;

        if (title && description) {
            addNoteToDOM(title, description);
            e.target.reset(); // Clear the form
        }
    });

    function addNoteToDOM(title, description) {
        const noteItem = document.createElement('div');
        noteItem.classList.add('note-item');

        noteItem.innerHTML = `
            <h3></h3>
            <p></p>
            <button class="delete-btn">Delete</button>
        `;
        
        // Use textContent to prevent HTML injection
        noteItem.querySelector('h3').textContent = title;
        noteItem.querySelector('p').textContent = description;

        // Add to the top of the list
        notesList.insertBefore(noteItem, notesList.firstChild);
    }
    
    // Use event delegation for delete buttons
    notesList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        }
    });

    // Initially, show the login page
    showPage(loginPage);
});
