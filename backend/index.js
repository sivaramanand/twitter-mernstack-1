import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
dotenv.config({
  path: ".env",
});
databaseConnection();
const app = express();

//middlewares
app.use(
  express.urlencoded({
    extends: true,
  })
);
app.use(express.json());
app.use(cookieParser);

app.use("api/v1/user", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
