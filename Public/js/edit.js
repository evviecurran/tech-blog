const { Json } = require("sequelize/types/utils");

const editFormHandler = async function(event) {
  event.preventDefault();

  const titleEl = document.getElementById('post-title');
  const bodyEl = document.getElementById('post-body');
  const postId = document.getElementById('post-id')

  fetch("/api/post/" + postId.value, {
    method: "put",
    body: JSON.stringify({
      title: titleEl.value,
      body: bodyEl.value
    }),
    headers: { "Content-Type": "application.json"}
  })
  .then(function() {
    document.location.replace("/dashboard");

  })
  .catch(err => console.log(err))
}
document.querySelector("#edit-post-form").addEventListener("submit", editFormHandler);


// $(".update-comment-button").click(async function (event) {
//     event.preventDefault();
  
   
//     const title = $("#blog-title").val();
//     const body = $("#blog-body").val();
//     const id = $(event.target).data("id");
  
//     const res = await fetch(`/api/blog/${id}`, {
//       method: "PUT",
//       body: JSON.stringify({ body, title }),
//       headers: { "Content-Type": "application/json" },
//     });
  
  
//     if (res.ok) {
//       document.location.replace("/");
//     }
//   });