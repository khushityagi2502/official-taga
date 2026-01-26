function signup() {
  let user = document.getElementById("suUser").value;
  let pass = document.getElementById("suPass").value;

  if (user === "" || pass === "") {
    document.getElementById("msg").innerText = "Fill all fields!";
    return;
  }

  localStorage.setItem("username", user);
  localStorage.setItem("password", pass);

  document.getElementById("msg").innerText = "Signup successful ✅";
}

function login() {
  let user = document.getElementById("liUser").value;
  let pass = document.getElementById("liPass").value;

  let savedUser = localStorage.getItem("username");
  let savedPass = localStorage.getItem("password");

  if (user === savedUser && pass === savedPass) {
    document.getElementById("msg").innerText = "Login successful 🎉";
  } else {
    document.getElementById("msg").innerText = "Wrong username or password ❌";
  }
}
