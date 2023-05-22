require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

// Db Connection
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Db connected successfully');
    } catch (error) {
        console.error(error);
    }
};
connectDb();

// Schema
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

const Post = mongoose.model('Post', postSchema);


app.get('/test', (req,res)=>{
    res.send("POST MERN APP")
})

// Endpoint to generate and save 20 posts
app.post('/post', async (req, res) => {
    try {
        const posts = await generatePosts(20);
        const result = await Post.insertMany(posts);

        if (result instanceof Array && result.length === 0) {
            console.error('Failed to generate and save posts');
            return res.status(500).json({ error: 'Failed to generate and save posts' });
        }

        // Send the posts as a response
        res.json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to generate and save posts' });
    }
});



// Get all posts -> GET Method
app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve posts' });
    }
});


// Generate random posts
async function generatePosts(count) {
    const posts = [];

    for (let i = 1; i <= count; i++) {
        const post = {
            title: generateRandomString(10),
            content: generateRandomString(50)
        };

        posts.push(post);
    }

    return posts;
}

// Generate a random string
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
}

const PORT = 4000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

// Send 20 posts -> POST Method
// app.post('/post', async (req, res) => {
//     try {
//         const posts = await generatePosts(20);
//         await Post.insertMany(posts);

//         // Send the posts as a response
//         res.status(200).json(posts);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Failed to generate and save posts' });
//     }
// });

// Helper function to generate posts
// function generatePosts(count) {
//     const posts = [];

//     for (let i = 1; i <= count; i++) {
//         const post = {
//             id: i,
//             title: `Post ${i}`,
//             content: `This is the content of Post ${i}`
//         };

//         posts.push(post);
//     }

//     return posts;
// }