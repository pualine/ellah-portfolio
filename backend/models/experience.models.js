import { Schema, model } from "mongoose";

const experienceSchema = new Schema({
  jobTitle: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, default: "" },
  startDate: { type: Date, require: true },
  endDate: { type: Date }, // if still working here then it is null
  description: { type: String, required: true },
});

export const ExperienceModel = model(
  "Experience",
  experienceSchema,
  "experience"
);
