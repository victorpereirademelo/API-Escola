import express from "express";

import TokenController from "../controllers/TokenController";

const router = express.Router();

router.post('/', TokenController.create);

export default router;