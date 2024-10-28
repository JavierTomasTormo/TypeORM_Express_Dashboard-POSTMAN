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
        const user = await this.userRepository.findOneOrFail({ where: { id: userId as any }, relations: ["posts"] });
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    }

    async getAllUsers() {
        const users = await this.userRepository.find({ relations: ["posts"] });
        if (!users) {
            throw new Error("User not found");
        }
        return users;
    }
    
    // async deleteUser(userId: string) {
    //     const user = await this.userRepository.findOne(userId);
    //     if (!user) {
    //         throw new Error("User not found");
    //     }
    //     await this.userRepository.remove(user);
    // }
}