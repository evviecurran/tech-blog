$(".logout-button").click(async function (event) {
    event.preventDefault();
  

    const res = await fetch("/api/user/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
  
 
    if (res.ok) {
      document.location.replace("/");
    }
  });