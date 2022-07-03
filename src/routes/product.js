import {Router}  from "express";
import {creat, list, get, remove, update} from "../controlles/product";
import {checkAuth} from "../middleware/checkAuth";

const router = Router();

router.post("/product", checkAuth, creat);
router.get("/products", checkAuth, list);
router.get("/product/:id", checkAuth, get);
router.delete("/product/:id", checkAuth, remove);
router.put("/product/:id", checkAuth, update);

export default router;