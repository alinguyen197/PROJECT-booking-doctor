import express from "express";
const router = express.Router();

import userController from "../controllers/userController"

// login
router.post("/login", userController.handleLogin);

// user
router.get("/get-all-users", userController.getAllUsers);


module.exports = router;
