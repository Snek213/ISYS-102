document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById("userInput");
    const emailInput = document.getElementById("emailInput");
    const passInput = document.getElementById("passInput");
    const confirmInput = document.getElementById("confirmInput");
    const registerBtn = document.getElementById("btn");
    const closeError = document.getElementById("closeError");
  
    const errorBox = document.getElementById("errorBox");
    const errorList = document.getElementById("errorList");
  
   
    emailInput.addEventListener("input", () => {
      const msg = document.getElementById("emailMsg");
      const email = emailInput.value.trim();
      if (email === "") {
        msg.textContent = "";
      } else if (!email.includes("@") || !email.includes(".")) {
        msg.textContent = "Invalid email format";
        msg.className = "invalid";
      } else {
        msg.textContent = "✓";
        msg.className = "valid";
      }
    });
  
    
  
    closeError.addEventListener("click", () => {
      errorBox.style.display = "none";
    });
  
    registerBtn.addEventListener("click", (event) => {
      event.preventDefault();
      regVal();
    });
  
    function regVal() {
      const user = userInput.value.trim();
      const email = emailInput.value.trim();
      const pass = passInput.value;
      const confirm = confirmInput.value;
  
      const errors = [];
  
      if (user === "") errors.push("Username is required.");
      if (email === "" || !email.includes("@") || !email.includes(".")) errors.push("Invalid email address.");
      if (pass.length < 6) errors.push("Password must be at least 6 characters long.");
      if (pass !== confirm) errors.push("Passwords do not match.");
  
      if (errors.length > 0) {
        errorList.innerHTML = "";
        errors.forEach(e => {
          const li = document.createElement("li");
          li.textContent = e;
          errorList.appendChild(li);
        });
        errorBox.style.display = "block";
      } else {
        errorBox.style.display = "none";
        window.location.href = "submitted.html";
      }
    }
  });
  