// Upload Handling
document.getElementById("uploadForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const file = document.getElementById("fileInput").files[0];
    const message = document.getElementById("uploadMessage");

    if (file) {
        message.textContent = "File uploaded successfully! We will review it and send a quote.";
    } else {
        message.textContent = "Please select a valid 3D file.";
    }
});

// Register User (Stored in localStorage for demo)
document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const phone = document.getElementById("phone").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = {
        phone: phone,
        username: username,
        password: password
    };

    localStorage.setItem("custom3dpUser", JSON.stringify(user));

    alert("Account created successfully!");
    this.reset();
});

// Login
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;
    const storedUser = JSON.parse(localStorage.getItem("custom3dpUser"));
    const message = document.getElementById("loginMessage");

    if (storedUser &&
        loginUsername === storedUser.username &&
        loginPassword === storedUser.password) {
        message.textContent = "Login successful!";
    } else {
        message.textContent = "Invalid username or password.";
    }
});
