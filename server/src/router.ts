import express from "express";
import atmosphereActions from "./modules/atmosphereActions";
import budgetActions from "./modules/budgetActions";
import destinationActions from "./modules/destinationActions";
import enumActions from "./modules/enumActions";
import typeActions from "./modules/typeActions";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

router.get("/api/types", typeActions.browse);
router.get("/api/atmosphere", atmosphereActions.browse);
router.get("/api/budget", budgetActions.browse);

router.get("/api/enums/:field", enumActions.browse);

router.post("/api/destinations/search", destinationActions.search);
router.get("/api/destinations/:id", destinationActions.read);

/* ************************************************************************* */

export default router;
