
import express from "express";
import { userLogin } from "../controllers/userController.js";
import { userAuth } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/test2", (req, res) => {
  res.send("Helo from Route");
});


router.post("/login", userLogin);

export default router;
