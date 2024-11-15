"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// parses
app.use(express_1.default.json());
const userRouter = express_1.default.Router();
const userCourses = express_1.default.Router();
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", userCourses);
userRouter.post("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "Successfully create user",
        data: user,
    });
});
userCourses.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "Successfully Create Course",
        data: course,
    });
});
const logger = (req, res, next) => {
    console.log(req.url);
    next();
};
app.get("/", logger, (req, res) => {
    res.send("Hello World");
});
app.post("/", (req, res) => {
    console.log(req.body);
    res.json({
        message: "successfully received data",
    });
});
exports.default = app;
