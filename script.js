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
// Time-based greeting
function showGreeting() {
    const greeting = document.getElementById("greeting");
    const now = new Date();
    const hour = now.getHours();

    if(hour >= 5 && hour < 12){
        greeting.textContent = "Good Morning! ☀️";
    } else if(hour >= 12 && hour < 17){
        greeting.textContent = "Good Afternoon! 🌤️";
    } else if(hour >= 17 && hour < 21){
        greeting.textContent = "Good Evening! 🌇";
    } else {
        greeting.textContent = "Good Night! 🌙";
    }
}

// Mood selector
const moodSelector = document.getElementById("mood");

moodSelector.addEventListener("change", function() {
    const mood = this.value;
    if(mood === "happy"){
        document.body.style.backgroundColor = "#fffb8f";
        document.body.style.color = "#333";
    } else if(mood === "sad"){
        document.body.style.backgroundColor = "#a0c4ff";
        document.body.style.color = "#fff";
    } else if(mood === "angry"){
        document.body.style.backgroundColor = "#ff6b6b";
        document.body.style.color = "#fff";
    } else if(mood === "relaxed"){
        document.body.style.backgroundColor = "#caffbf";
        document.body.style.color = "#333";
    } else {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
    }
});

// Run greeting on page load
showGreeting();
