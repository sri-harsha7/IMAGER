import express from "express";
import userAuthentication from "../middlewares/userAuthentication.js";

import { generateImage } from "../controllers/imageController.js";
const imageRouter = express.Router();

imageRouter.post("/generate-image", userAuthentication, generateImage);

export default imageRouter;

//localhost:8080/api/image/generate-image
