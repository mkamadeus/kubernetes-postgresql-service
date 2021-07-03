import { Service } from "typedi";
import { Post, PostCreateInput, PostUpdateInput } from "~/models/post";
import prisma from "~/prisma";

@Service()
export default class PostService {
  public getAllPosts(): Promise<Post[]> {
    const posts = prisma.post.findMany();
    return posts;
  }

  public getPostById(id: number): Promise<Post | null> {
    const post = prisma.post.findFirst({ where: { id } });
    return post;
  }

  public createPost(data: PostCreateInput): Promise<Post> {
    const post = prisma.post.create({ data });
    return post;
  }

  public updatePost(id: number, data: PostUpdateInput): Promise<Post> {
    const post = prisma.post.update({ where: { id }, data });
    return post;
  }

  public deletePost(id: number): Promise<Post> {
    const post = prisma.post.delete({ where: { id } });
    return post;
  }
}
