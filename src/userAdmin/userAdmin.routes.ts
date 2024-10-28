import { Router, Request, Response, NextFunction } from "express";
import { UserController } from "./userAdmin.controller";

const router = Router();
const userController = new UserController();

router.post("/userAdmin", async (req: Request, res: Response, next: NextFunction) => {
    userController.createUser(req, res).catch(next);
});

router.get("/userAdmin/:userId", async (req: Request, res: Response, next: NextFunction) => {
    userController.getUserById(req, res).catch(next);
});

router.get("/userAdmin/", async (req: Request, res: Response, next: NextFunction) => {
    userController.getAllUsers(req, res).catch(next);
});

// router.delete("/:userId", async (req: Request, res: Response, next: NextFunction) => {
//     userController.deleteUser(req, res).catch(next);
// });


export default router;
