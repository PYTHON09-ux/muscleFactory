import { Router } from "express";
import { errorHandler } from "../controllers/error.controller.js";

const router = Router();

router.route('/usererror').get(errorHandler);

export default router;
