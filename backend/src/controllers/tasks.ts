import prisma from "../utilities/database";
import { Request, Response } from "express";

async function getTasks(req: Request, res: Response) {
    const tasks = await prisma.task.findMany();
    console.table(tasks)
    res.send(tasks);
}

async function createTask(req: Request, res: Response) {
    const task = await prisma.task.create({
        data: req.body
    });
    res.send(task);
}

async function updateTask(req: Request, res: Response) {
    const { id } = req.params;
    const task = await prisma.task.update({
        where: {
            id: parseInt(id)
        },
        data: req.body
    });
    res.send(task);
}

async function deleteTask(req: Request, res: Response) {
    const { id } = req.params;
    const task = await prisma.task.delete({
        where: {
            id: parseInt(id)
        }
    });
    res.send(task);
}

export {
    getTasks,
    createTask,
    updateTask,
    deleteTask
}