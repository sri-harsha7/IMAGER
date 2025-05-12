import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDb from "./config/mongodb.js";

import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";

const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());

app.use(cors());

await connectDb();

app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);

app.get("/", (req, res) => {
  res.send("Api is running fine");
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
