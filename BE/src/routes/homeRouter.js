import express from "express";
const router = express.Router();

import homeController from "../controllers/homeController";

// Create
router.get("/crud", homeController.getCRUD);
router.post("/post-crud", homeController.postCRUD);

// Read
router.get("/get-crud", homeController.displayCRUD);

// Update
router.get("/edit-crud", homeController.editCRUD);
router.post("/put-crud", homeController.putCRUD);

// Delete
router.get("/delete-crud", homeController.deleteCRUD);
router.get("/", homeController.getHomePage);

module.exports = router;
