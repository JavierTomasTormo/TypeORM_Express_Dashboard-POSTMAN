import { Request, Response } from "express";
import { PostService } from "./Post.service";
import { CreatePostDto } from "./dto/createPost.dto";
import { validate } from "class-validator";

export class PostController {
    private postService = new PostService();

    async createPost(req: Request, res: Response) {
        const createPostDto = new CreatePostDto();
        Object.assign(createPostDto, req.body);

        const errors = await validate(createPostDto);
        if (errors.length > 0) {
            return res.status(400).json(errors);
        }

        try {
            const post = await this.postService.createPost(createPostDto);
            res.status(201).json(post);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getPostById(req: Request, res: Response) {
        const { postId } = req.params;
        try {
            const post = await this.postService.getPostById(postId);
            res.status(200).json(post);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deletePost(req: Request, res: Response) {
        const { postId } = req.params;
        try {
            await this.postService.deletePost(postId);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}