import express, { NextFunction, Request, Response } from "express";
const app = express();

// parses
app.use(express.json());

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

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url);
  next();
};

app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello World");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "successfully received data",
  });
});

export default app;
