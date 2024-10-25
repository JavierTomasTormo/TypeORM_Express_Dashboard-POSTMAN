import { Router, Request, Response, NextFunction } from "express";
import { PostController } from "./Post.controller";

const router = Router();
const postController = new PostController();

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
    postController.createPost(req, res).catch(next);
});

router.get("/:postId", async (req: Request, res: Response, next: NextFunction) => {
    postController.getPostById(req, res).catch(next);
});

router.delete("/:postId", async (req: Request, res: Response, next: NextFunction) => {
    postController.deletePost(req, res).catch(next);
});

export default router;