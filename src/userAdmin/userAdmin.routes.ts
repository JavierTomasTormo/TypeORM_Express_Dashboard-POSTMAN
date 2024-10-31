// src/userAdmin/userAdmin.routes.ts
import { Router } from 'express';
import {createUserAdmin, getAllUserAdmins, getUserAdminById, updateUserAdmin, deleteUserAdmin} from './userAdmin.controller';

const router = Router();

// Ruta para crear un nuevo usuario
router.post('/', createUserAdmin);

// Ruta para obtener todos los usuarios
router.get('/', getAllUserAdmins);

// Ruta para obtener un usuario por ID
router.get('/:id', (req, res, next) => {
    getUserAdminById(req, res).catch(next);
});

// Ruta para actualizar un usuario por ID
router.put('/:id', (req, res, next) => {
    updateUserAdmin(req, res).catch(next);
});

// Ruta para eliminar un usuario por ID
router.delete('/:id', deleteUserAdmin);

export default router;

