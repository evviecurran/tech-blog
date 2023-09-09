const router = require("express").Router();
const { Blog } = require("./models/blog.js");

router.delete("/:id", async (req, res) => {
    try {

        let findId = await Blog.findByPk(req.params.id);
        if (!findId) {
            res 
            .status(404)
            .json({message: "No product found with the id sent"});
        }

        let blogs = await Blog.destroy({ where: { id: req.params.id } });

        res.status(200).json(blogs);
    } catch (error) {
        res.status(400).json(error);
    }
});

router.post("/", async (req, res) => {
    try {

        if(!req.body) {
            res.status(404).json({ message: "The json sent is empty"});
            return;
        }
        res.render();
        
        const newBlog = await Blog.create(req.body);
        res.status(200).json(newBlog);
    } catch (error) {
        res.status(400).json(error);
    }

});

module.exports = router;