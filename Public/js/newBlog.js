$(".new-blog-button").click(async function (event) {
    event.preventDefault();
  
    const body = $("#new-blog-form").val();
    const title = $("#new-blog-title").val();
  
    
    if (body && title) {
     
      const res = await fetch("/api/blog/", {
        method: "POST",
        body: JSON.stringify({ body, title }),
        headers: { "Content-Type": "application/json" },
      });
     
      if (res.ok) {
        document.location.reaplace("/");
      }
    } else {
      alert("Blog body or title cannot be empty.");
    }
  });