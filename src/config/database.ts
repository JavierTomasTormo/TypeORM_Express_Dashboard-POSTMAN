// src/config/database.ts
import 'reflect-metadata';
import { DataSource } from 'typeorm';
// import dotenv from "dotenv";

// dotenv.config();

export const AppDataSource = new DataSource({
    type: 'mongodb',
    url: 'mongodb://localhost:27017/usersTypeORM',
    useNewUrlParser: true,
    useUnifiedTopology: true,
    entities: [
        __dirname + '/../Post/Post.entity{.ts,.js}',
        __dirname + '/../userAdmin/userAdmin.entity{.ts,.js}'
    ],
    synchronize: true, // solo para desarrollo, no usar en producción
});//AppDataSource

export const connectDatabase = async () => {
    try {
        await AppDataSource.initialize();
        console.log('Database connected');
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
};//connectDatabase
