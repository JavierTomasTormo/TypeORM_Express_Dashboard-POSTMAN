// src/userAdmin/userAdmin.entity.ts
import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity('userAdmin')
export class UserAdmin {
    @ObjectIdColumn()
    id!: ObjectId;

    @Column()
    username!: string;

    @Column()
    password!: string;
}//@entity
