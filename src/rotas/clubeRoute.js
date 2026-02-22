import { Router } from "express";
import clubeController from "../controladoras/ClubeController.js";

const router = Router();

router.get("/", clubeController.getClubes);

export default router;
