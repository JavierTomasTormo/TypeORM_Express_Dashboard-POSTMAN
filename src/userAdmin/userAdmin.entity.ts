import { Entity, ObjectIdColumn, ObjectId, Column, ManyToMany, JoinTable } from "typeorm";
import { Post } from "../Post/post.entity";


@Entity()
export class User {
    @ObjectIdColumn()
    id: ObjectId;

    @Column()
    name: string;

    @ManyToMany(() => Post, post => post.users)
    @JoinTable()
    posts: Post[];

}