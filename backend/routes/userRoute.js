import express from "express";
import {userLoginPage, createUser} from "../controllers/userController/userController.js";
import {} from "../controllers/noteController/noteController.js";
const router = express.Router();

router.get("/", userLoginPage);

// post requests
router.post("/", createUser);

export default router;
