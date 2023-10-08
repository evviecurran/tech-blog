const router = require('express').Router();
const { Post, Comment, User } = require('../models');

router.get('/', (req, res) => {
    Post.findAll({
        include: [User],

    })
    .then((dbPostData) => {
        const posts = dbPostData.map((post) => post.get({ plain: true }));

        res.render('all-posts', { posts });
    })
    .catch((err) => {
        res.status(500).json(err);
    });
});

router.get('/post/:id', (req, res) => {
    Post.findByPk(req.params.id, {
        include: [
            User, 
            {
                model: Comment,
                include: [User],
            },
        ],
    })
    .then((dbPostData) => {
        if (dbPostData) {
            const post = dbPostData.get({ plain: true });

            res.render('single-post', { post });

        } else {
            res.status(404).end();
        }
    })
    .catch ((err) => {
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.removeListener('signup');
});

module.exports = router; 



// const sequelize = require('../config/connection');
// const {
//     User,
//     Post,
//     Comment
// } = require('../models');


// router.get('/', (req, res) => {
//     Post.findAll({
//             attributes: [
//                 'id',
//                 'title',
//                 'content',
//                 'created_at'
//             ],
//             include: [{
//                     model: Comment,
//                     attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//                     include: {
//                         model: User,
//                         attributes: ['username']
//                     }
//                 },
//                 {
//                     model: User,
//                     attributes: ['username']
//                 }
//             ]
//         })
//         .then(dbPostData => {
//             const posts = dbPostData.map(post => post.get({
//                 plain: true
//             }));

//             res.render('homepage', {
//                 posts,
//                 loggedIn: req.session.loggedIn
//             });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// router.get('/post/:id', (req, res) => {
//     Post.findOne({
//             where: {
//                 id: req.params.id
//             },
//             attributes: [
//                 'id',
//                 'title',
//                 'content',
//                 'created_at'
//             ],
//             include: [{
//                     model: Comment,
//                     attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//                     include: {
//                         model: User,
//                         attributes: ['username']
//                     }
//                 },
//                 {
//                     model: User,
//                     attributes: ['username']
//                 }
//             ]
//         })
//         .then(dbPostData => {
//             if (!dbPostData) {
//                 res.status(404).json({
//                     message: 'No post found with this id'
//                 });
//                 return;
//             }

//             const post = dbPostData.get({
//                 plain: true
//             });

//             res.render('single-post', {
//                 post,
//                 loggedIn: req.session.loggedIn
//             });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });

// router.get('/login', (req, res) => {
//     if (req.session.loggedIn) {
//         res.redirect('/');
//         return;
//     }

//     res.render('login');
// });

// router.get('/signup', (req, res) => {
//     if (req.session.loggedIn) {
//         res.redirect('/');
//         return;
//     }

//     res.render('signup');
// });


// router.get('*', (req, res) => {
//     res.status(404).send("Can't go there!");
//     // res.redirect('/');
// })


// module.exports = router;