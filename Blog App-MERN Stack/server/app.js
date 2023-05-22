require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`Db connected successfully`);
    } catch (error) {
        console.error(error);
    }
};
connectDb();

// Blog Model
const BlogSchema = new mongoose.Schema({
    file: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Blog = mongoose.model('Blog', BlogSchema);

// Tesst -> GET Method
app.get('/', async (req, res) => {
    try {
        res.send("Welcome to Blog Post");
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Failed to retrieve test blog"
        });
    }
});
// Create Blog Post -> POST Method
app.post('/createBlogPost', async (req, res) => {
    try {
        const { file, title, description } = req.body;
        const blog = await Blog.findOne({ title });
        if (blog) {
            throw new Error("Blog already exists in database");
        } else {
            const newBlog = await Blog.create({ file, title, description });
            res.status(201).json({
                success: true,
                message: "New Blog Created",
                blog: newBlog
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Failed to create Blog"
        });
    }
});

// Get All Blog Posts -> GET Method
app.get('/getBlogPost', async (req, res) => {
    try {
        const Blogs = await Blog.find({});
        res.status(200).json({
            success: true,
            message: "Blogs found in database",
            Blogs
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Failed to retrieve Blogs"
        });
    }
});

// Get Single Blog Post -> GET Method
app.get('/getBlog/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findById(id);
        if (!blog) {
            throw new Error("Blog not found in database");
        }
        res.status(200).json({
            success: true,
            message: "Blog found in database",
            blog
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Failed to retrieve Blog"
        });
    }
});

// Edit Single Blog Post -> PUT Method
app.put('/editBlog/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { file, title, description } = req.body;
        const updatedBlog = await Blog.findByIdAndUpdate(id, { file, title, description }, { new: true });
        if (!updatedBlog) {
            throw new Error("Blog not found in database");
        }
        res.status(200).json({
            success: true,
            message: "Blog edited successfully",
            Blog: updatedBlog
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Failed to edit Blog"
        });
    }
});

// Delete Single Blog Post -> DELETE Method
app.delete('/deleteBlog/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBlog = await Blog.findByIdAndDelete(id);
        if (!deletedBlog) {
            throw new Error("Blog not found in database");
        }
        res.status(200).json({
            success: true,
            message: "Blog deleted successfully",
            Blog: deletedBlog
        });
    }catch{
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Failed to delete Blog"
        });
    }
});

const PORT = 4000;

app.listen(PORT, () => console.log(`Port is running at ${PORT}`));




