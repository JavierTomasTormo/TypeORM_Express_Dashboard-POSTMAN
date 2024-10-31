// src/Post/Post.entity.ts
import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity()
export class Post {
    @ObjectIdColumn()
    id!: ObjectId;

    @Column()
    title!: string;

    @Column()
    content!: string;
}//@entity
