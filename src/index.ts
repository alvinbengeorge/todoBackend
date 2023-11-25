import express, {Request, Response} from "express";

const app = express();
app.use(express.json())

app.get("/", ({req, res}: {req: Request, res: Response}) => {
    res.status(200).send({
        "message": "Hello world"
    });
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
})