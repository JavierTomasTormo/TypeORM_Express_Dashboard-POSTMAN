import { Router, Request, Response, NextFunction } from "express";
import { UserController } from "./userAdmin.controller";

const router = Router();
const userController = new UserController();

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
    userController.createUser(req, res).catch(next);
});

router.get("/:userId", async (req: Request, res: Response, next: NextFunction) => {
    userController.getUserById(req, res).catch(next);
});

router.delete("/:userId", async (req: Request, res: Response, next: NextFunction) => {
    userController.deleteUser(req, res).catch(next);
});


export default router;
