import express from "express";

import FotoController from "../controllers/FotoController";
import loginRequired from "../middlewares/loginRequired";

const router = express.Router();

router.post('/', loginRequired, FotoController.store);

export default router;