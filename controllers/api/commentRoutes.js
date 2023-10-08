
const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');
// double check the utils connection ^

router.post('/', withAuth, (req, res) => {
    Comment.create({ ...req.body, userId: req.session.userId }) 
    .then(newComment => {
        res.json(newComment);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

moule.exports = router


// const router = require("express").Router();



// const {
//     User, 
//     Post, 
//     Comment
// } = require('../../models');
// const withAuth = require('../../utils/auth');

// router.get("/", (req, res) => {
//     Comment.findAll()
//     .then((dbCommentData) => res.json(dbCommentData))
//     .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//     });
//     });


// router.post("/", withAuth, (req, res) => {
//     if (req.session) {
//         Comment.create({
//             comment_text: req.body.comment_text,
//             post_id: req.body.post_id,
//             user_id: req.session.user_id
//         })
//         .then(dbCommentData => res.json(dbCommentData))
//         .catch(err => {
//             console.log(err);
//             res.status(400).json(err);

//         });
//     }
// });

// module.exports = router;
//         const newComment = await Comment.create({
//             ...req.body,
//             author_id: req.session.user_id,
//             blog_id: req.session.blog_id,
//         });
//         res.status(200).json(newComment);
//     } catch (error) {
//         res.status(500).json(error);
//     }
    
// });

// module.exports = router;