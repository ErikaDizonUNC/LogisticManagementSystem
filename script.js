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

        // Get the selected role
        var selectedRole = document.getElementById('roleDropdown').value;

        // Perform basic validation (you should add more thorough validation)
        if (loginIdText.trim() === '' || passwordText.trim() === '') {
            alert('Please enter both username and password.');
            return;
        }

        // Simulate a successful login for demonstration purposes
        alert('Login successful!\nUsername: ' + loginIdText);

        // TODO: Replace the following with actual authentication logic
        // Check if the user has an account (replace this with your actual account validation logic)
        var hasAccount = true; // Replace with your logic to check if the user has an account

        if (hasAccount) {
            // Redirect to the appropriate role page
            redirectToRolePage(selectedRole);
        } else {
            // If no account, prompt the user to register
            alert('You don\'t have an account. Please register before login.');
            // Add code to redirect to the registration page if needed
        }
    });

    function redirectToRolePage(selectedRole) {
        // TODO: Add logic to redirect to the corresponding role page
        // You may use AJAX, fetch, or a simple window.location.href as per your application structure
        switch (selectedRole) {
            case 'W':
                window.location.href = 'warehouse.html'; // Redirect to the Warehouse page
                break;
            case 'M':
                window.location.href = 'main_branch.html'; // Redirect to the Main Branch page
                break;
            case 'B':
                window.location.href = 'branches.html'; // Redirect to the Branches page
                break;
            default:
                // Handle other roles if needed
                break;
        }
    }

    // Handle register button click
    registerButton.addEventListener('click', function () {
        // TODO: Replace the following with actual registration logic
        // Simulate a successful registration for demonstration purposes
        alert('Registration successful!');
        // Redirect to a registration confirmation page or update UI as needed
    });

    // Handle reset password form submission (you might want to replace this with your actual reset password logic)
    var resetPasswordButton = document.getElementById('resetPassword');
    resetPasswordButton.addEventListener('click', function () {
        // TODO: Add your reset password logic here
        alert('Reset Password button clicked');
    });

    // Handle login button click on the reset password page to go back to employee login
    var signInButton2 = document.getElementById('signInButton2');
    signInButton2.addEventListener('click', function () {
        resetPassSection.style.display = 'none';
        loginForm.style.display = 'block';
    });
});
