import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/tasks";

dotenv.config();

const PORT = parseInt(process.env.PORT as string) || 8000;
const HOST = process.argv[2] || "0.0.0.0"

const app = express();
app.use(express.json());
app.use(cors());
app.use("/tasks", router);

app.get("/", async (req, res) => {
    res.send({
        message: "Hello World"
    })
})

app.listen(PORT, HOST, () => {
    console.log(`Server started on ${HOST}:${PORT}`)
})