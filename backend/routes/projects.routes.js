import { Router } from "express";
import {
  AddProject,
  DeleteAllProjects,
  DeleteOneProject,
  GetAllProjects,
  GetOneProject,
  UpdateAllProjects,
  UpdateOneProject,
} from "../controllers/projects.controllers.js";
import multer from "multer";

// create multer uploads middleware
const upload = multer({dest: "uploads"})

// create project router
const router = Router();

// Import controllers

// Define routes
// Add awards
router.post("/", upload.single("image") , AddProject);

// Get all awards
router.get("/", GetAllProjects);
// Get a single award
router.get("/:id", GetOneProject);

// Delete ALL awards
router.delete("/", DeleteAllProjects);

//  Delete a single award
router.delete("/:id", DeleteOneProject);

// update all awards
router.patch("/", UpdateAllProjects);

// Update a single award
router.patch("/:id", UpdateOneProject);

export default router;
// Export router
