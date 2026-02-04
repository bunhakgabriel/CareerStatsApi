import { Router } from "express";
import jogadorController from "../controladoras/jogadorController.js";

const router = Router();

router.get("/", jogadorController.getJogadores);

export default router;
