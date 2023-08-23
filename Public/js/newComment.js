$(".new-comment-button").click(async function (event) {
    event.preventDefault();
  
   
    const body = $("#new-blog-form").val();
   
    const login = await fetch("/api/user/logincheck", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
  

    if (!login) {
      document.location.replace("/login");
    }
  

    if (newBlog && login) {
      
      const res = await fetch("/api/comments/", {
        method: "POST",
        body: JSON.stringify({ body }),
        headers: { "Content-Type": "application/json" },
      });
     
      if (res.ok) {
        document.location.reload();
      }
    } else {
      alert("Cannot post empty comment.");
    }
  });