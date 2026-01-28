function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let msg = document.getElementById("msg");

  if (user === "" || pass === "") {
    msg.innerText = "❌ Please fill all fields";
    return;
  }

  if (pass.length < 6) {
    msg.innerText = "❌ Password must be 6 characters";
    return;
  }

  msg.style.color = "green";
  msg.innerText = "✅ Login Successful!";
}
function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let msg = document.getElementById("msg");

  if (user === "" || pass === "") {
    msg.style.color = "red";
    msg.innerText = "❌ Please fill all fields";
    return;
  }

  if (pass.length < 6) {
    msg.style.color = "red";
    msg.innerText = "❌ Password must be at least 6 characters";
    return;
  }

  // Save data in localStorage
  localStorage.setItem("username", user);
  localStorage.setItem("password", pass);

  msg.style.color = "green";
  msg.innerText = "✅ Login successful! Redirecting...";

  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 1000);
}
