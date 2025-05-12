import express from "express";
import userAuthentication from "../middlewares/userAuthentication.js";

import {
  registerUser,
  loginUser,
  userCredits,
  paymentRazorpay,
} from "../controllers/userController.js";
const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/credits", userAuthentication, userCredits);
userRouter.post("/pay-razorpay", userAuthentication, paymentRazorpay);

export default userRouter;

//localhost:8080/api/user/register
//localhost:8080/api/user/login
