function login() {
  const email = document.querySelector("input[type='text']").value;
  const password = document.querySelector("input[type='password']").value;

  if (email === "admin" && password === "admin") {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials");
  }
}

async function loadDashboard() {
  const res = await fetch("http://localhost:5000/api/dashboard");
  const data = await res.json();

  document.getElementById("total").innerText = data.total;
  document.getElementById("low").innerText = data.low;
}
