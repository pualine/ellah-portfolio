import { ProjectModel } from "../models/projects.models.js";

// Add new project to the database
export const AddProject = async (req, res, next) => {
  console.log(file);
  try {
    const addResults = await ProjectModel.create({
      ...req.body,
      image: req.file.filename,
    });
    return res.status(201).json("Project created successfully!");
  } catch (error) {
    next(error);
  }
};

// Get all  awards in the database
export const GetAllProjects = async (req, res, next) => {
  try {
    const findResults = await ProjectModel.find();
    // If no results found, send a 404 error message
    if (findResults.length === 0) {
      return res.status(404).json("No data Found");
    } else {
      return res.status(200).json(findResults);
    }
  } catch (error) {
    next(error);
  }
};

// Get a single award
export const GetOneProject = async (req, res, next) => {
  try {
    const findOneResults = await ProjectModel.findById({ _id: req.params.id });
    if (findOneResults === null) {
      res
        .status(404)
        .json({ message: `could not find project with ID:${req.params.id}` });
    } else {
      return res.status(200).json(findOneResults);
    }
  } catch (error) {
    next(error);
  }
};

// Delete one awards
export const DeleteOneProject = async (req, res, next) => {
  try {
    const DeleteOneResults = await ProjectModel.deleteOne();
    if (!DeleteOneResults) {
      return res
        .status(404)
        .json(`The project with the given ID:${req.params.id} was not found.`);
    } else {
      return res
        .status(200)
        .json(`The project with the given ID:${req.params.id} was deleted!`);
    }
  } catch (error) {
    next(error);
  }
};

// Delete all  awards in the database
export const DeleteAllProjects = async (req, res, next) => {
  try {
    const DeleteAllResults = await ProjectModel.deleteMany();
    return res.status(200).json("All projects were deleted succefully!");
  } catch (error) {
    next(error);
  }
};

// Update a single award
export const UpdateOneProject = async (req, res, next) => {
  try {
    const UpdateOneResults = await ProjectModel.findByIdAndUpdate({
      _id: req.params.id,
    });
    // Check to see if there is an item with that id number exits
    if (!UpdateOneResults) {
      return res
        .status(404)
        .json(`No project with this ID:${req.params.id} updated!`);
    } else {
      // If it does exist then update it with new data
      return res.status(200).json(UpdateOneResults);
    }
  } catch (error) {
    next(error);
  }
};

// Update all awards in database
export const UpdateAllProjects = async (req, res, next) => {
  try {
    const UpdateResults = await ProjectModel.updateMany();
    //  check if  any items were updated
    if (!UpdateResults.modifiedCount) {
      return res.status(204).json("No projects were updated");
    } else {
      return res
        .status(200)
        .json(
          `${UpdateResults.modifiedCount} projects were successfully updated.`
        );
    }
  } catch (error) {
    next(error);
  }
};
