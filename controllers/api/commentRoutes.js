const router = require("express").Router();
const { Blog, User, Comment } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      author_id: req.session.user_id,
      blog_id: req.session.blog_id,
    });
    res.status(200).json(newComment);
  } catch (error){
    res.status(500).json(error);

  
  }
});

module.exports = router; 

