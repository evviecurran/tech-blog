$(".login-button").click(async function (event) {
  event.preventDefault();

  // grabs the email and password
  const email = $("#email-form").val();
  const password = $("#psswd-field").val();

  // make api call to login with given information
  const res = await fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    document.location.replace("/");
  }
});