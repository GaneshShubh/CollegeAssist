// Open login modal
function openLoginModal() {
    document.getElementById("loginModal").style.display = "block";
}

// Close modal (if needed)
function closeModal() {
    document.getElementById("loginModal").style.display = "none";
    document.getElementById("authModal").style.display = "none";
}

// Authenticate user (Step 1)
function authenticateUser() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let loginError = document.getElementById("loginError");

    // Dummy credentials (replace with database verification if needed)
    if (username === "admin" && password === "pass123") {
        generateAuthCode();
    } else {
        loginError.textContent = "Invalid username or password!";
    }
}

// Generate authentication code (Step 2)
function generateAuthCode() {
    let authCode = Math.floor(100000 + Math.random() * 900000); // 6-digit code
    localStorage.setItem("authCode", authCode); // Store code temporarily
    document.getElementById("generatedCode").textContent = authCode;

    // Switch to authentication modal
    document.getElementById("loginModal").style.display = "none";
    document.getElementById("authModal").style.display = "block";
}

// Verify authentication code (Step 3)
function verifyCode() {
    let enteredCode = document.getElementById("authCode").value;
    let storedCode = localStorage.getItem("authCode");
    let authError = document.getElementById("authError");

    if (enteredCode === storedCode) {
        alert("Login successful!");
        closeModal();
        localStorage.removeItem("authCode"); // Clear code after use
    } else {
        authError.textContent = "Incorrect authentication code!";
    }
}
