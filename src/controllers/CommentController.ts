import { Request, Response } from 'express';
import prisma from '../prisma/client';

// Listar todos os comentários de um post
export const getCommentsByPost = async (req: Request, res: Response) => {
  const { postId } = req.params;
  try {
    const comments = await prisma.comment.findMany({
      where: { postId: Number(postId) },
    });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar comentários' });
  }
};

// Criar um novo comentário
export const createComment = async (req: Request, res: Response) => {
  const { postId } = req.params;
  const { userId, content } = req.body;
  try {
    const comment = await prisma.comment.create({
      data: {
        postId: Number(postId),
        userId,
        content,
      },
    });
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar comentário' });
  }
};

// Deletar um comentário
export const deleteComment = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.comment.delete({
      where: { id: Number(id) },
    });
    res.json({ message: 'Comentário deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar comentário' });
  }
};
