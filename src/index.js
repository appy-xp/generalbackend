// require("dotenv").config({path:'./env'});
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    // app.on("error", (error) => {
    //   console.log("App on error: ", error);
    //   throw error;
    // });
    app.listen(process.env.PORT, () => {
      console.log(`app listening on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongodb correction failed !!!", err);
  });
/*
(async () => {
  try {
    mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`);
  } catch (err) {
    console.error("ERROR: ", err);
    throw err;
  }
})();
*/
