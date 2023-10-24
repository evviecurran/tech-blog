$(".delete-comment-button").click(async function (event) {
    event.preventDefault();
    const res = await fetch(`/api/comments/${$(e.target).data("id")}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  
    // Page reloads if the comment has been deleted successfully
    if (res.ok) {
      document.location.reload();
    }
  });