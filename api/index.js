import dotenv from "dotenv";
dotenv.config();
import express from "express";

import appRoute from "./routes/appRoute.js";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use("/api", appRoute);

app.listen(PORT, () => {
  console.log(`Server running and listening to port ${PORT}`);
});
