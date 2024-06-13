import { Request, Response } from "express";

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class UserController {
    constructor() {}

        async listUsers(req: Request, res: Response){
            const users = await prisma.user.findMany();
            res.json({
                users,
            });
        }
    }

    export const createComment = async (req: Request, res: Response) => {
        const { content, postId, authorId } = req.body;
        
        try {
          const comment = await prisma.comment.create({
            data: {
              content,
              post: { connect: { id: postId } },
              author: { connect: { id: authorId } }
            }
          });
          res.status(201).json(comment);
        } catch (error) {
          res.status(400).json({ error: 'Could not create comment' });
        }
      };
      
      export const getCommentsByPost = async (req: Request, res: Response) => {
        const { postId } = req.params;
      
        try {
          const comments = await prisma.comment.findMany({
            where: { postId: parseInt(postId) },
            include: { author: true }
          });
          res.status(200).json(comments);
        } catch (error) {
          res.status(400).json({ error: 'Could not fetch comments' });
        }
      };
      
export default new UserController();