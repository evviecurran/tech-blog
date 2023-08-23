$(".update-comment-button").click(async function (event) {
    event.preventDefault();
  
   
    const title = $("#blog-title").val();
    const body = $("#blog-body").val();
    const id = $(event.target).data("id");
  
    const res = await fetch(`/api/blog/${id}`, {
      method: "PUT",
      body: JSON.stringify({ body, title }),
      headers: { "Content-Type": "application/json" },
    });
  
  
    if (res.ok) {
      document.location.replace("/");
    }
  });