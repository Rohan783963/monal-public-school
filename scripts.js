// scripts.js

// Function to show a specific section and hide others
function showSection(id) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(id).style.display = 'block';
}

// Optional: Automatically show the 'About Us' section on initial load
window.onload = function() {
    showSection('about');
};
