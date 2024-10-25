import { Entity, ObjectIdColumn, ObjectId, Column, ManyToMany } from "typeorm";
import { User } from "../userAdmin/userAdmin.entity";

@Entity()
export class Post {
    @ObjectIdColumn()
    id: ObjectId;

    @Column()
    title: string;

    @Column()
    content: string;

    @ManyToMany(() => User, user => user.posts)
    users: User[];


}
