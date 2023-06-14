import express, { application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectToMongo from "./db.js";

import taskRoutes from "./routes/task.js"
dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/",(req,res)=>{
  res.send("App Is Running")
})

// ROUTES
app.use("/tasks",taskRoutes)

const PORT = process.env.PORT || 9000;
connectToMongo()
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
