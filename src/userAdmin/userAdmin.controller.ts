// src/userAdmin/userAdmin.controller.ts
import { Request, Response } from 'express';
import { UserAdminService } from './userAdmin.service';

const userAdminService = new UserAdminService();

    // Crear un nuevo usuario
    export const createUserAdmin = async (req: Request, res: Response) => {
        try {
            const newUser = await userAdminService.createUser(req.body);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ message: 'Error al crear el usuario', error });
        }
    };

    // Obtener todos los usuarios
    export const getAllUserAdmins = async (req: Request, res: Response) => {
        try {
            const users = await userAdminService.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener los usuarios', error });
        }
    };

    // Obtener un usuario por ID
    export const getUserAdminById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const user = await userAdminService.getUserById(id);
            if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            res.json(user);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener el usuario', error });
        }
    };

    // Actualizar un usuario por ID
    export const updateUserAdmin = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const updatedUser = await userAdminService.updateUser(id, req.body);
            if (!updatedUser) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            res.json(updatedUser);
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar el usuario', error });
        }
    };

    // Eliminar un usuario por ID
    export const deleteUserAdmin = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            await userAdminService.deleteUser(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar el usuario', error });
        }
    };

