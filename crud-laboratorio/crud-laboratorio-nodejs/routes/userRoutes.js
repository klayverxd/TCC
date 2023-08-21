import express from "express";

import { lerComponentes } from "../controllers/lerComponentes.js";
import { adicionaComponente } from "../controllers/adicionaComponente.js";
import { atualizaComponente } from "../controllers/atualizaComponente.js";
import { deletaComponente } from "../controllers/deletaComponente.js";

const router = express.Router();

router.get("/componentes", lerComponentes);
router.post("/componentes", adicionaComponente);
router.put("/componentes/:id", atualizaComponente);
router.delete("/componentes/:id", deletaComponente);

export default router;
