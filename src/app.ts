// src/app.ts
import express from 'express';
import { connectDatabase } from './config/database';
import postRoutes from './Post/Post.routes';
import userAdminRoutes from './userAdmin/userAdmin.routes';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/posts', postRoutes);
app.use('/users', userAdminRoutes);

connectDatabase().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

