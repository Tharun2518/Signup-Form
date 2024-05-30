document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.getElementById('openModalBtn');
    const modal = document.getElementById('signupModal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const form = document.getElementById('signupForm');
    const firstNameInput = document.getElementById('fname');
    const firstNameError = document.getElementById('fnameError');
    const counterSpan = document.getElementById('counter');
    let counter = 0;

    // Open the modal
    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Close the modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside of the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Validate the first name input
    firstNameInput.addEventListener('input', () => {
        if (firstNameInput.value.length !== 5) {
            firstNameError.style.display = 'block';
        } else {
            firstNameError.style.display = 'none';
        }
    });

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the form from submitting traditionally

        // Validate the form
        if (firstNameInput.value.length !== 5) {
            firstNameError.style.display = 'block';
            return;
        }

        firstNameError.style.display = 'none';

        // Collect form data
        const formData = new FormData(form);
        const formValues = {};
        formData.forEach((value, key) => {
            formValues[key] = value;
        });

        // Print form data to console
        console.log(formValues);

        // Update counter
        counter++;
        counterSpan.textContent = counter;

        // Optionally, you can also alert the user that the form data has been logged
        alert('Form data has been logged to the console');

        // Close the modal after form submission
        modal.style.display = 'none';
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const toggleThemeBtn = document.getElementById('toggleThemeBtn');
    const body = document.body;

    // Function to toggle theme
    function toggleTheme() {
        // Toggle class on body to switch between light and dark themes
        body.classList.toggle('dark-theme');
    }

    // Event listener for theme toggle button
    toggleThemeBtn.addEventListener('click', toggleTheme);
});
