import express from "express";
import homeController from "../controllers/homeController"
const router = express.Router();

let initWebRoutes = (app) => {

    router.get("/", homeController.getHomePage);

    router.get("/x", (req, res) => {
        res.send("Hello World!123")
    })

    return app.use("/", router)
};

module.exports = initWebRoutes;
