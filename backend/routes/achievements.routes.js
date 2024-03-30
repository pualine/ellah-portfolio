import { Router } from "express";
import { AddAchievements, DeleteAllAchievement, DeleteOneAchievement, GetAllAchievements, GetOneAchievement, UpdateAllAchievements, UpdateOneAchievements } from "../controllers/achievements.controllers.js";

// Initialize router
const router = Router();

// Import controllers

// Define routes
// Add awards
router.post("/", AddAchievements);
// Get all awards
router.get("/", GetAllAchievements);
// Get a single award
router.get("/:id", GetOneAchievement);

// Delete ALL awards
router.delete("/", DeleteAllAchievement);

//  Delete a single award
router.delete("/:id", DeleteOneAchievement);
// update all awards
router.patch("/", UpdateAllAchievements);

// Update a single award
router.patch("/:id", UpdateOneAchievements);

export default router;
// Export router
