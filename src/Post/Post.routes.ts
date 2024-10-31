// src/Post/Post.routes.ts
import { Router } from 'express';
import { createPost, getAllPosts, getPostById, updatePost, deletePost } from './Post.controller';

const router = Router();

router.post('/', createPost);
router.get('/', getAllPosts);
router.get('/:postId', getPostById);
router.put('/:postId', updatePost);
router.delete('/:postId', deletePost);

export default router;

