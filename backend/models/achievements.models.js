import { Schema, model } from "mongoose";

const achievementsSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  dateAwarded: { type: Date, required: true },
});

export const AchievementsModel = model("Achievements", achievementsSchema, "achievements");
