$(".delete-blog-button").click(async function (event) {
    event.preventDefault();
    const res = await fetch (`/api.blog/${$(e.target).data("id")}`,{
        method: "DELETE",
        headers: {"Content-type": "application/json"},

    });

    if (res.ok) {
        document.location.reload();
    }
});