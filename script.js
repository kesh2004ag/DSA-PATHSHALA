// Select the Info button and the dropdown menu
const infoButton = document.querySelector('.info-btn');
const dropdownMenu = document.querySelector('.dropdown');

// Toggle the dropdown menu on click
infoButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    dropdownMenu.classList.toggle('visible'); // Toggle visibility
});