import { Router } from "express";
import {
  addExperience,
  deleteAllExperience,
  deleteOneExperience,
  getAllExperience,
  getOneExperience,
  updateAllExperience,
  updateOneExperience,
} from "../controllers/experience.controllers.js";

// initialize router
const router = Router();

// Define routes

router.post("/", addExperience);

// Get all blog
router.get("/", getAllExperience);

// update all blog
router.patch("/", updateAllExperience);

// Delete all blogs
router.delete("/", deleteAllExperience);

// Get a single blog
router.get("/:id", getOneExperience);

// delete one blog
router.delete("/:id", deleteOneExperience);
// update one blog
router.patch("/:id", updateOneExperience);

export default router;
