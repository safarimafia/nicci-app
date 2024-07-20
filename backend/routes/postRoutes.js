const express = require('express');
const router = express.Router();
const { createPost, getPosts, updatePost, deletePost } = require('../controllers/postController');
const auth = require('../middleware/authMiddleware');

router.post('/api/posts', auth, createPost);
router.get('/api/posts', auth, getPosts);
router.put('/api/posts/:postId', auth, updatePost); // Ensure updatePost is defined and exported in postController
router.delete('/api/posts/:postId', auth, deletePost);

module.exports = router;
