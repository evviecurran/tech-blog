$(".login-button").click(async function (event) {
    event.preventDefault();
  
   
    const email = $("#email-form").val();
    const password = $("#psswd-field").val();
  
   
    const res = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
  
    if (res.ok) {
      document.location.replace("/");
    }
  });