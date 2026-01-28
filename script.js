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
