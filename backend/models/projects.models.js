import { Schema, model } from "mongoose";

const projectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

export const ProjectModel = model("Projects", projectSchema, "projects");
