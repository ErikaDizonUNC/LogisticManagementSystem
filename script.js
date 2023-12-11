document.addEventListener('DOMContentLoaded', function () {
    // Elements
    var loginForm = document.getElementById('loginForm');
    var resetPassButton = document.getElementById('resetPassButton');
    var resetPassSection = document.getElementById('resetPassSection');
    var loginValidateButton = document.getElementById('loginValidate');
    var registerButton = document.getElementById('registerButton');

    // Show/hide reset password section
    resetPassButton.addEventListener('click', function () {
        loginForm.style.display = 'none';
        resetPassSection.style.display = 'block';
    });

    // Back to login form
    var tryAgainLink = document.querySelector('#tryAgain span');
    tryAgainLink.addEventListener('click', function () {
        loginForm.style.display = 'block';
        resetPassSection.style.display = 'none';
    });

    // Handle login form submission
    loginValidateButton.addEventListener('click', function () {
        // Get values from input fields
        var loginIdText = document.getElementById('loginIdText').value;
        var passwordText = document.getElementById('passwordText').value;

        // Perform basic validation (you should add more thorough validation)
        if (loginIdText.trim() === '' || passwordText.trim() === '') {
            alert('Please enter both username and password.');
            return;
        }

        // Simulate a successful login for demonstration purposes
        alert('Login successful!\nUsername: ' + loginIdText);
        // Redirect to a dashboard or update UI as needed
    });

    // Handle register button click
    registerButton.addEventListener('click', function () {
        // Simulate a successful registration for demonstration purposes
        alert('Registration successful!');
        // Redirect to a registration confirmation page or update UI as needed
    });

    // Handle reset password form submission (you might want to replace this with your actual reset password logic)
    var resetPasswordButton = document.getElementById('resetPassword');
    resetPasswordButton.addEventListener('click', function () {
        // Add your reset password logic here
        alert('Reset Password button clicked');
    });

    // Handle login button click on the reset password page to go back to employee login
    var signInButton2 = document.getElementById('signInButton2');
    signInButton2.addEventListener('click', function () {
        resetPassSection.style.display = 'none';
        loginForm.style.display = 'block';
    });
});
