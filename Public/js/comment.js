const commentFormHandler = async function(event) {
  event.preventDefault();

  const postId = document.querySelector('input[name="post-id"]').value;
  const body = document.querySelector('textarea[name="comment-body"]').value;

  if (body) {
    await fetch('/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        postId,
        body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    document.location.reload();
  }
};

document
  .querySelector('#new-comment-form')
  .addEventListener('submit', commentFormHandler);

// $(".new-comment-button").click(async function (event) {
//     event.preventDefault();
  
   
//     const body = $("#new-blog-form").val();
   
//     const login = await fetch("/api/user/logincheck", {
//       method: "GET",
//       headers: { "Content-Type": "application/json" },
//     });
  

//     if (!login) {
//       document.location.replace("/login");
//     }
  

//     if (newBlog && login) {
      
//       const res = await fetch("/api/comments/", {
//         method: "POST",
//         body: JSON.stringify({ body }),
//         headers: { "Content-Type": "application/json" },
//       });
     
//       if (res.ok) {
//         document.location.reload();
//       }
//     } else {
//       alert("Cannot post empty comment.");
//     }
//   });