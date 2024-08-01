import homeRouter from "./homeRouter";
import userRouter from "./userRouter";
let initWebRoutes = (app) => {
  app.use("/", homeRouter);
  app.use("/user", userRouter);
};

module.exports = initWebRoutes;
