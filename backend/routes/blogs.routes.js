import { Router } from "express";
import {
  addBlog,
  deleteAllBlogs,
  deleteOneBlog,
  getAllBlogs,
  getOneBlog,
  updateAllBlogs,
  updateOneBlog,
} from "../controllers/blogs.controllers.js";
import multer from "multer";

// create multer upload  middleware
const upload = multer({ dest: "uploads/" });

// create blog router
const router = Router();

// Define routes

// POST route to add a new blog with image upload
router.post("/", upload.single("image"), addBlog);

// GET route to get all blogs
router.get("/", getAllBlogs);

// PATCH route to update all blogs (if needed)
router.patch("/", updateAllBlogs);

// DELETE route to delete all blogs (if needed)
router.delete("/", deleteAllBlogs);

// GET route to get a single blog by ID
router.get("/:id", getOneBlog);

// DELETE route to delete a single blog by ID
router.delete("/:id", deleteOneBlog);

// PATCH route to update a single blog by ID
router.patch("/:id", updateOneBlog);

export default router;
