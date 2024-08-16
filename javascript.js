document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation for example purposes
    if (username === "user" && password === "pass") {
        document.getElementById("loginStatus").textContent = "Login successful!";
        document.getElementById("loginStatus").style.color = "green";
    } else {
        document.getElementById("loginStatus").textContent = "Invalid username or password.";
        document.getElementById("loginStatus").style.color = "red";
    }
});
