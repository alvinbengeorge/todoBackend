import database from "../utilities/database";
import { Request, Response } from "express";
import { comparePassword, hashPassword } from "../utilities/security";

export const userCreation = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
        const user = await database.models.User.create({
            username,
            password: await hashPassword(password)
        });
        res.status(200).json({
            status: true,
            message: "User created successfully",
        })
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    try {
        const user = await database.models.User.findOne({
            where: {
                username,
                password
            }
        });
        if (user) {
            res.status(200).json({
                status: true,
                message: "User logged in successfully",
            })
        } else {
            res.status(401).json({
                status: false,
                message: "Invalid credentials",
            })
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}