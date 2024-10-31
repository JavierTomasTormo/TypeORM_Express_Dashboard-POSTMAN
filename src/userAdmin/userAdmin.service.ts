// src/userAdmin/userAdmin.service.ts
import { AppDataSource } from '../config/database';
import { UserAdmin } from './userAdmin.entity';
import { ObjectId } from 'mongodb';


export class UserAdminService {
    private userRepository = AppDataSource.getRepository(UserAdmin);

    async createUser(userData: Partial<UserAdmin>): Promise<UserAdmin> {
        const user = this.userRepository.create(userData);
        return await this.userRepository.save(user);
    }//createUser

    async getAllUsers(): Promise<UserAdmin[]> {
        return await this.userRepository.find();
    }//getAllUsers

    async getUserById(id: string): Promise<UserAdmin | null> {
        return await this.userRepository.findOneBy({ id: new ObjectId(id) });
    }//getUserById

    async updateUser(id: string, userData: Partial<UserAdmin>): Promise<UserAdmin | null> {
        await this.userRepository.update(id, userData);
        return this.getUserById(id);
    }//updateUser

    async deleteUser(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }//deleteUser
}//class

