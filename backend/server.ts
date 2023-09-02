import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;
app.use(cors());
const users = [
  { name: "ko aung", email: "koaung@web.de", age: 25 },
  { name: "ko thu", email: "kothu@web.de", age: 22 },
  { name: "ko kyaw", email: "kokyaw@web.de", age: 20 },
];

app.get("/appData", (req, res) => {
  res.send(users);
});

app.listen(PORT, () => console.log("serveris running at port", PORT));
