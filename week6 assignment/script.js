document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const submissionMessage = document.getElementById('submissionMessage');

    // Function to display an error message
    function showError(element, message) {
        element.textContent = message;
    }

    // Function to clear an error message
    function clearError(element) {
        element.textContent = '';
    }

    // Event listener for input validation on blur (when the user leaves the field)
    nameInput.addEventListener('blur', function() {
        if (nameInput.value.trim() === '') {
            showError(nameError, 'Name is required.');
        } else {
            clearError(nameError);
        }
    });

    emailInput.addEventListener('blur', function() {
        if (emailInput.value.trim() === '') {
            showError(emailError, 'Email is required.');
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailError, 'Invalid email format.');
        } else {
            clearError(emailError);
        }
    });

    messageInput.addEventListener('blur', function() {
        if (messageInput.value.trim() === '') {
            showError(messageError, 'Message is required.');
        } else {
            clearError(messageError);
        }
    });

    // Function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Event listener for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        let isValid = true;

        // Perform final validation on submit
        if (nameInput.value.trim() === '') {
            showError(nameError, 'Name is required.');
            isValid = false;
        }
        if (emailInput.value.trim() === '') {
            showError(emailError, 'Email is required.');
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailError, 'Invalid email format.');
            isValid = false;
        }
        if (messageInput.value.trim() === '') {
            showError(messageError, 'Message is required.');
            isValid = false;
        }

        if (isValid) {
            // Simulate form submission (in a real scenario, you'd send data to a server)
            console.log('Form submitted!');
            console.log('Name:', nameInput.value);
            console.log('Email:', emailInput.value);
            console.log('Message:', messageInput.value);

            // Display a success message
            submissionMessage.textContent = 'Thank you for your message!';
            submissionMessage.className = 'message success';

            // Optionally, clear the form
            form.reset();
            setTimeout(() => {
                submissionMessage.classList.add('hidden');
            }, 3000); // Hide the message after 3 seconds
        } else {
            // Optionally, provide a general error message if any field is invalid
            // alert('Please correct the errors in the form.');
        }
    });

    // Interactive Element: Change button text on hover
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.addEventListener('mouseover', function() {
        submitButton.textContent = 'Sending...';
    });

    submitButton.addEventListener('mouseout', function() {
        submitButton.textContent = 'Submit';
    });
});