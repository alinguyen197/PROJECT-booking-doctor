import express from "express";
const router = express.Router();

import userController from "../controllers/userController"

// login
router.post("/login", userController.handleLogin);


module.exports = router;
