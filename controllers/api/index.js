const router = require("express").Router();
const blogRoutes = require("../api/blogRoutes");
const userRoutes = require("../api/userRoutes");
const commentRoutes = require("../api/commentRoutes");

router.use("/user", userRoutes);
router.use("/blog", blogRoutes);
router.use("/commnet", commentRoutes);

module.exports = router;
