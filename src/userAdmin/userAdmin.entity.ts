import { Entity, ObjectIdColumn, ObjectId, Column, ManyToMany } from "typeorm";
import { Post } from "../Post/post.entity";

@Entity()
export class User {
    @ObjectIdColumn()
    id!: ObjectId;

    @Column()
    name!: string;

    @ManyToMany(() => Post, post => post.users)
    posts!: Post[];
}