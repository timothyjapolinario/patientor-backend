import express from "express";
import diagnoseRoute from "./routes/diagnoses";
import mongoose from "mongoose";
import patientRoute from "./routes/patient";
const app = express();
app.use(express.json());
import cors from "cors";

const PORT = 3001;

const url =
  "mongodb+srv://mrfapoh:qwerty12@fullstack.g694ygb.mongodb.net/?retryWrites=true&w=majority";
mongoose.set("strictQuery", false);
mongoose.connect(url);

app.use(cors());
app.use("/api/diagnose", diagnoseRoute);
app.use("/api/patients", patientRoute);
app.get("/api/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
