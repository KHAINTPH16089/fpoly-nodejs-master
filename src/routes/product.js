import {Router}  from "express";
import {creat, list, get, remove, update} from "../controlles/product.js";
import {checkAuth} from "../middleware/checkAuth.js";

const router = Router();

router.post("/product", checkAuth, creat);
router.get("/products", checkAuth, list);
router.get("/product/:id", checkAuth, get);
router.delete("/product/:id", checkAuth, remove);
router.put("/product/:id", checkAuth, update);

// module.exports = {product: router}
export default router;