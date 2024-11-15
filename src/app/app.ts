import express, { NextFunction, Request, Response } from "express";
const app = express();

// parsers
app.use(express.json());

// logger
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url);
  next();
};

const userRouter = express.Router();
const userCourses = express.Router();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", userCourses);

userRouter.post("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);

  res.json({
    success: true,
    message: "Successfully create user",
    data: user,
  });
});

userCourses.post("/create-course", (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);

  res.json({
    success: true,
    message: "Successfully Create Course",
    data: course,
  });
});

app.get(
  "/",
  logger,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.send("something");
    } catch (error) {
      next(error);
      // res.status(400).json({
      //   success: false,
      //   message: "failed to get data",
      // });
    }
  }
);

app.post("/", logger, (req: Request, res: Response) => {
  res.json({
    message: "successfully received data",
  });
});

app.all("*", (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: "Route is not found",
  });
});
// global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

export default app;
