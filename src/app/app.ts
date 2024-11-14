import express, { Request, Response } from "express";
const app = express();
const port = 3000;

// parses
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World.");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "successfully received data",
  });
});

export default app;
