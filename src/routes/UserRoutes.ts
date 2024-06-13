import { Request, Response, Router } from "express";

import { PrismaClient } from '@prisma/client';
import UserController from "../controllers/UserController";
import { createComment, getCommentsByPost } from '../controllers/UserController';
const prisma = new PrismaClient()

const UserRouter = Router();

//UserRouter.get("/users", UserController.listUsers);

//UserRouter.post('/user', function (req: Request, res: Response){
//    res.send("Requisição POST de usuário");
//});

UserRouter.put('/user', function (req: Request, res: Response){
    res.send("Requisição PUT de usuário");
});

UserRouter.delete('/user', function (req: Request, res: Response){
    res.send("Requisição DELETE de usuário");
});

UserRouter.delete('/user', function (req: Request, res: Response){
    res.send("Requisição DELETE de usuário");
});

UserRouter.post('/user', createComment);
UserRouter.get('/user', getCommentsByPost);


export default UserRouter;