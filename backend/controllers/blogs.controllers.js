import { BlogModel } from "../models/blogs.models.js";

// POST blog
export const addBlog = async (req, res, next) => {
  try {
    // Ensure an image file is provided
    if (!req.file) {
      return res.status(400).json({ message: "No image file provided" });
    }

    const { title, content } = req.body;

    // Assuming req.file.filename contains the name of the uploaded image file
    const blogResult = await BlogModel.create({
      title,
      content,
      image: req.file.filename,
    });
    return res
      .status(201)
      .json({ message: "Blog was created successfully", data: blogResult });
  } catch (error) {
    next(error);
  }
};

// GET all blogs
export const getAllBlogs = async (req, res, next) => {
  try {
    const getResults = await BlogModel.find();
    if (getResults.length === 0) {
      return res.status(404).json({ message: "No blogs found" });
    } else {
      return res.status(200).json({ data: getResults });
    }
  } catch (error) {
    next(error);
  }
};

// GET one blog by id
export const getOneBlog = async (req, res, next) => {
  try {
    const getOneResult = await BlogModel.findById(req.params.id);
    if (!getOneResult) {
      return res
        .status(404)
        .json({
          message: `No blog with the given ID:${req.params.id} was found`,
        });
    } else {
      return res.status(200).json({ data: getOneResult });
    }
  } catch (error) {
    next(error);
  }
};

// UPDATE all blogs
export const updateAllBlogs = async (req, res, next) => {
  try {
    // Update logic here (if needed)
    // For demonstration purposes, let's assume we're updating all blogs with some data
    const updateResults = await BlogModel.updateMany(
      {},
      { title: "Updated Title", content: "Updated Content" }
    );
    return res
      .status(200)
      .json({ message: "All blogs updated successfully", data: updateResults });
  } catch (error) {
    next(error);
  }
};

// DELETE all blogs
export const deleteAllBlogs = async (req, res, next) => {
  try {
    // Delete logic here (if needed)
    const removeResult = await BlogModel.deleteMany();
    return res.status(200).json({ message: "All blogs deleted successfully" });
  } catch (error) {
    next(error);
  }
};

// UPDATE one blog by id
export const updateOneBlog = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const updateOneResult = await BlogModel.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!updateOneResult) {
      return res
        .status(404)
        .json({ message: `No blog with this ID:${req.params.id} exists` });
    } else {
      return res
        .status(200)
        .json({ message: "Blog updated successfully", data: updateOneResult });
    }
  } catch (error) {
    next(error);
  }
};

// DELETE one blog by id
export const deleteOneBlog = async (req, res, next) => {
  try {
    const removeOneBlog = await BlogModel.deleteOne();
    if (!removeOneBlog) {
      return res
        .status(404)
        .json({
          message: `No blog with the given ID:${req.params.id} was found`,
        });
    } else {
      return res.status(200).json({ message: "Blog deleted successfully" });
    }
  } catch (error) {
    next(error);
  }
};
