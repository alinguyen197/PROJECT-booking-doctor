import homeRouter from "./homeRouter";
import userRouter from "./userRouter";
let initWebRoutes = (app) => {
  app.use("/", homeRouter);
  app.use("/api/user", userRouter);
};

module.exports = initWebRoutes;
