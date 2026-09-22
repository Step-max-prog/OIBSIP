const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");
const forgotPassword = document.getElementById("forgotPassword");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        message.textContent = "Please fill in all fields.";
        message.style.color = "#a64b4b";
        return;
    }

    if (password.length < 6) {
        message.textContent = "Password must be at least 6 characters.";
        message.style.color = "#a64b4b";
        return;
    }

    message.textContent = "Login successful! Welcome back.";
    message.style.color = "#5c7651";

    loginForm.reset();
});

forgotPassword.addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();

    if (email === "") {
        message.textContent = "Enter your email to reset your password.";
        message.style.color = "#a64b4b";
    } else {
        message.textContent =
            "Password reset instructions would be sent to your email.";
        message.style.color = "#5c7651";
    }
});