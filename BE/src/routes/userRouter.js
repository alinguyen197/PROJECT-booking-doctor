import express from "express";
const router = express.Router();

import userController from "../controllers/userController"

// Create


// Read


// Update


// Delete


router.get("/", userController.getUserPage);


module.exports = router;
