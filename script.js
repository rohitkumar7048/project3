// Function to validate the signup form
function validateForm() {
    // Get form input values
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    // Simple email validation using a regular expression
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Check if all fields are filled
    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        alert("All fields are required!");
        return false;
    }

    // Check if the email is in a valid format
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address!");
        return false;
    }

    // Check if the password and confirm password match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }

    // If all validations pass, the form will submit
    return true;
}

// Attach the validateForm function to the form's submit event
document.getElementById("signup-form").addEventListener("submit", function (event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});