
                // login form submission handler

document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();
  

  let usernameInput = document.getElementById("username").value;
let passwordInput = document.getElementById("password").value;

if (usernameInput === "admin" && passwordInput === "admin123") {
   window.location.href = "index.html";
   
} else {
   document.getElementById("error").innerText = "Invalid username or password.";
}
});

                  // main page logic start

                  












