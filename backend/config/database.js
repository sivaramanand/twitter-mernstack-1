import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({
    path:"../config/.env"
})
const databaseConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("connected to mongoose");
    })
    .catch((error) => {
      console.log("not connected", error);
    });
};
export default databaseConnection;
