import { Router } from 'express';
import { createComment, getCommentsByPost, deleteComment } from '../controllers/CommentController';

const router = Router();

router.get('/posts/:postId/comments', getCommentsByPost);

router.post('/posts/:postId/comments', createComment);

router.delete('/comments/:id', deleteComment);

export default router;
