$(".signup-button").click(async function (event) {
    event.preventDefault();
  
   
    const name = $("#name-signup").val();
    const email = $("#email-signup").val();
    const password = $("#password-signup").val();
  
   
    if (name && email && password) {
   
      const res = await fetch("/api/user/", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        document.location.replace("/");
      }
    } else alert("Enter a valid field to signup!");
  });