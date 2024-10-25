import { getRepository } from "typeorm";
import { Post } from "./post.entity";
import { CreatePostDto } from "./dto/createPost.dto";

export class PostService {
    private postRepository = getRepository(Post);

    async createPost(createPostDto: CreatePostDto) {
        const post = this.postRepository.create(createPostDto);
        await this.postRepository.save(post);
        return post;
    }

    async getPostById(postId: string) {
        const post = await this.postRepository.findOne(postId, { relations: ["users", "comments"] });
        if (!post) {
            throw new Error("Post not found");
        }
        return post;
    }

    async deletePost(postId: string) {
        const post = await this.postRepository.findOne(postId);
        if (!post) {
            throw new Error("Post not found");
        }
        await this.postRepository.remove(post);
    }
}
