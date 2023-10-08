const router = require("express").Router();
const { Post, Comment, User } = require("../../models/");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, (req, res) => {
    const body = req.body;
    console.log(req.session.userId);
    Post.create({ ...body, userId: req.session.userId })
      .then(newPost => {
        res.json(newPost);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  
  router.put("/:id", withAuth, (req, res) => {
    console.log(req.body, req.params.id)
    Post.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(affectedRows => {
        if (affectedRows > 0) {
          res.status(200).end();
        } else {
          res.status(404).end();
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  
  router.delete("/:id", withAuth, (req, res) => {
    console.log(req.body, req.params.id)
    Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(affectedRows => {
        if (affectedRows > 0) {
          res.status(200).end();
        } else {
          res.status(404).end();
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  
  module.exports = router;

// const {
//     User, 
//     Post, 
//     Comment 
// } = require('../../models');
// const  withAuth = require('../../utils/auth');

// router.get("/", (req, res) => {
//     Post.findAll({
//             attributes: ["id", "content", "title", "created_at"],
//             order: [
//                 ["created_at", "DESC"]
//             ],
//             include: [{
//                     model: User,
//                     attributes: ["username"],
//                 },
//                 {
//                     model: Comment,
//                     attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
//                     include: {
//                         model: User,
//                         attributes: ["username"],
//                     },
//                 },
//             ],
//         })
//         .then((dbPostData) => res.json(dbPostData))
//         .catch((err) => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// // specific user 
// router.get('/:id', (req, res) => {
//     Post.findOne({
//             where: {
//                 id: req.params.id,
//             },
//             attributes: ['id', 'title', 'content', 'created_at'],
//             include: [{
//                     model: User,
//                     attributes: ["username"],
        
//                 },
//                 {
//                     model: Comment,
//                     attributes: ['id', 'comment_text', 'created_at'],
//                     include: {
//                         model: User,
//                         attributes: ['username']
//                     },
//                 },
//             ],
//         })

//         .then(dbPostData => {
//             if (!dbPostData) {
//                 res.status(404).json({
//                     message: 'No post found with this id'
//                 });
//                 return;
//             }
//             res.json(dbPostData);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// router.post("/", withAuth, (req, res) => {
//     console.log("creating");
//     Post.create({
//         title: req.body.title,
//         content: req.body.post_content,
//         user_id: req.session.user_id
//     })
//     .then((dbPostData) => res.json(dbPostData))
//     .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// router.put("/:id", withAuth, (req, res) => {
//     Post.update ({
//         title: req.body.title, 
//         content: req.body.post_content,
//     }, {
//         where: {
//             id: req.params.id,
//         },
//     })
//     .then((dbPostData) => {
//         if (!dbPostData) {
//             res.status(404).json({
//                 message: "no post with this id"
//             });
// return;
//         }
//         res.json(dbPostData);

//     })
//     .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

// // post deleted 
// router.delete("/:id", withAuth, (req, res) => {
//     Post.destroy({
//             where: {
//                 id: req.params.id,
//             },
//         })
//         .then((dbPostData) => {
//             if (!dbPostData) {
//                 res.status(404).json({
//                     message: "No post found with this id"
//                 });
//                 return;
//             }
//             res.json(dbPostData);
//         })
//         .catch((err) => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });


// module.exports = router;


// // const Blog  = require("../../models/blog");

// // router.delete("/:id", async (req, res) => {
// //     try {

// //         let findId = await Blog.findByPk(req.params.id);
// //         if (!findId) {
// //             res 
// //             .status(404)
// //             .json({message: "No product found with the id sent"});
// //         }

// //         let blogs = await Blog.destroy({ where: { id: req.params.id } });

// //         res.status(200).json(blogs);
// //     } catch (error) {
// //         res.status(400).json(error);
// //     }
// // });

// // router.post("/", async (req, res) => {
// //     try {

// //         if(!req.body) {
// //             res.status(404).json({ message: "The json sent is empty"});
// //             return;
// //         }
// //         res.render();
        
// //         const newBlog = await Blog.create(req.body);
// //         res.status(200).json(newBlog);
// //     } catch (error) {
// //         res.status(400).json(error);
// //     }

// // });

// // module.exports = router;