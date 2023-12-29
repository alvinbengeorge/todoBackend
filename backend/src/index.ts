import express from "express";

const PORT = parseInt(process.env.PORT as string) || 8000;
const HOST = process.argv[2] || "0.0.0.0"

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
    res.send({
        message: "Hello World"
    })
})

app.listen(PORT, HOST, () => {
    console.log(`Server started on ${HOST}:${PORT}`)
})
