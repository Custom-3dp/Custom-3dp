// Slider Controls
const slider = document.getElementById("slider");

if (slider) {
    document.querySelector(".arrow.left").addEventListener("click", () => {
        slider.scrollBy({ left: -300, behavior: "smooth" });
    });

    document.querySelector(".arrow.right").addEventListener("click", () => {
        slider.scrollBy({ left: 300, behavior: "smooth" });
    });
}

// Upload
const uploadForm = document.getElementById("uploadForm");
if (uploadForm) {
    uploadForm.addEventListener("submit", function(e) {
        e.preventDefault();
        document.getElementById("uploadMessage").textContent =
            "File uploaded successfully. We'll review and send pricing.";
    });
}

// Register
const registerForm = document.getElementById("registerForm");
if (registerForm) {
    registerForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const user = {
            phone: document.getElementById("phone").value,
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        };

        localStorage.setItem("custom3dpUser", JSON.stringify(user));
        alert("Account created successfully!");
        this.reset();
    });
}

// Login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const storedUser = JSON.parse(localStorage.getItem("custom3dpUser"));
        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;

        if (storedUser &&
            username === storedUser.username &&
            password === storedUser.password) {
            document.getElementById("loginMessage").textContent =
                "Login successful!";
        } else {
            document.getElementById("loginMessage").textContent =
                "Invalid credentials.";
        }
    });
}
