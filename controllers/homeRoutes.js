const router = require('express').Router();
const { Blog, User, Comments } = require("../models");
// Import the custom middleware
const withAuth = require("../utils/auth");

// GET all blogs for homepage
router.get("/", async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: Comments
    });
// does it need to be capitol B for blogs
    const Blogs = blogData.map((blog) =>
      blog.get({ plain: true })
    );

    res.render('homepage', {
      Blogs,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one blog
// Use the custom middleware before allowing the user to access the blog
router.get("/blog/:id", withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [Comments],
    });

    const blog = blogData.get({ plain: true });
    res.render("blog", {
      ...blogData, 
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// // GET one painting
// // Use the custom middleware before allowing the user to access the painting
// router.get('/painting/:id', withAuth, async (req, res) => {
//   try {
//     const dbPaintingData = await Painting.findByPk(req.params.id);

//     const painting = dbPaintingData.get({ plain: true });

//     res.render('painting', { painting, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;