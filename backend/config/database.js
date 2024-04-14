import mongoose from "mongoose";
import dotnev from "dotnev";

dotnev.config({
    path:"../config/.env"
})
const databaseConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("connected to mongoose");
    })
    .catch((error) => {
      console.log(error);
    });
};
