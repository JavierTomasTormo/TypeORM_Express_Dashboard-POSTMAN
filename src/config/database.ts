import { createConnection } from "typeorm";
import { User } from "../userAdmin/userAdmin.entity"; 
import { Post } from "../Post/post.entity";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    await createConnection({
        type: "mongodb",
        url: process.env.DATABASE_URL,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        entities: [
            User,
            Post 
        ],
        synchronize: true,
        logging: false
    });
};
// export const connectDB = async () => {
//     await createConnection({
//         type: process.env.DB_TYPE as any,
//         url: process.env.DATABASE_URL,
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         entities: [
//             User,
//             Post 
//         ],
//         synchronize: true,
//         logging: false
//     });};
// import { createConnection, getConnectionOptions } from "typeorm";

// export const connectDB = async () => {
//     const connectionOptions = await getConnectionOptions();
//     const connection = await createConnection(connectionOptions);
//     return connection;
// };
