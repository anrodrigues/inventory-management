import { Router } from "express";
import { createPoduct, getProducts } from "../controllers/productController";

const router = Router();

router.get("/", getProducts);
router.post("/", createPoduct);

export default router;
