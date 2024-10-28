import { Request, Response } from "express";
import { UserService } from "./userAdmin.service";
import { CreateUserDto } from "./dto/createUserAdmin.dto";
import { validate } from "class-validator";

export class UserController {
    private userService = new UserService();

    async createUser(req: Request, res: Response) {
        const createUserDto = new CreateUserDto();
        Object.assign(createUserDto, req.body);

        const errors = await validate(createUserDto);
        if (errors.length > 0) {
            return res.status(400).json(errors);
        }

        try {
            const user = await this.userService.createUser(createUserDto);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ message: error });
        }
    }

    async getUserById(req: Request, res: Response) {
        const { userId } = req.params;
        try {
            const user = await this.userService.getUserById(userId);
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json({ message: error });
        }
    }

    async getAllUsers(req: Request, res: Response) {
            try {
                const users = await this.userService.getAllUsers();
                res.status(200).json(users);
            } catch (error) {
                res.status(400).json({ message: error });
            }
        }
    

    // async deleteUser(req: Request, res: Response) {
    //     const { userId } = req.params;
    //     try {
    //         await this.userService.deleteUser(userId);
    //         res.status(204).send();
    //     } catch (error) {
    //         res.status(400).json({ message: error });
    //     }
    // }
}
