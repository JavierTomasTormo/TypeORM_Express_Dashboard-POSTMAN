import { getRepository } from "typeorm";
import { User } from "./userAdmin.entity";
import { CreateUserDto } from "./dto/createUserAdmin.dto";

export class UserService {
    private userRepository = getRepository(User);

    async createUser(createUserDto: CreateUserDto) {
        const user = this.userRepository.create(createUserDto);
        await this.userRepository.save(user);
        return user;
    }

    async getUserById(userId: string) {
        const user = await this.userRepository.findOne(userId, { relations: ["posts", "comments"] });
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    }

    async deleteUser(userId: string) {
        const user = await this.userRepository.findOne(userId);
        if (!user) {
            throw new Error("User not found");
        }
        await this.userRepository.remove(user);
    }
}