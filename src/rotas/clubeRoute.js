import { Router } from "express";
import clubeController from "../controladoras/ClubeController.js";

const router = Router();

router.get("/", clubeController.getClubes);
router.post("/postClube", clubeController.postClube);

export default router;
