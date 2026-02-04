import express from "express";
import jogadorRouter from "./src/rotas/jogadorRoute.js";

const app = express();
app.use(express.json());

app.use("/jogadores", jogadorRouter);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
