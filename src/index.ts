import express, { Request, Response } from "express";
import { authenticateDatabase } from "./utilities/database";
import userRoutes from "./routes/userRoutes";

const app = express();
authenticateDatabase();
app.use(express.json());
app.use(userRoutes);


app.get("/", ({ req, res }: { req: Request; res: Response }) => {
  res.status(200).send({
    message: "Hello world",
  });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
