import { Schema, model } from "mongoose";

const blogSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  dateCreated: { type: Date, required: true, default: Date.now() },
  image: { type: String, required: true }, // Adjusted field name to 'image'
});

export const BlogModel = model("Blog", blogSchema, "blogs");
