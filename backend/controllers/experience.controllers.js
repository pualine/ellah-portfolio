import { ExperienceModel } from "../models/experience.models.js";

// POST experience
export const addExperience = async (req, res, next) => {
  try {
    const experienceResult = await ExperienceModel.create({ ...req.body });
    return res.status(201).json("Experience created successfully!");
  } catch (error) {
    next(error);
  }
};

// GET all experiences
export const getAllExperience = async (req, res, next) => {
  try {
    const getResults = await ExperienceModel.find();
    if (getResults.length === 0) {
      return res.status(404).json("No data found");
    } else {
      return res.status(200).json(getResults);
    }
  } catch (error) {
    next(error);
  }
};

// UPDATE all experiences
export const updateAllExperience = async (req, res, next) => {
  try {
    const updateResults = await ExperienceModel.updateMany();
    if (!updateResults) {
      return res.status(404).json("No experience found!");
    } else {
      return res.status(200).json(updateResults);
    }
  } catch (error) {
    next(error);
  }
};

// DELETE all experiences
export const deleteAllExperience = async (req, res, next) => {
  try {
    const removeResult = await ExperienceModel.deleteMany();
    return res.status(200).json("Deleted successfully!");
  } catch (error) {
    next(error);
  }
};

// GET one experience by id
export const getOneExperience = async (req, res, next) => {
  try {
    const getOneResult = await ExperienceModel.findById({ _id: req.params.id });
    if (!getOneResult) {
      return res
        .status(404)
        .json(`Experience with the given ID:${req.params.id} was not found.`);
    } else {
      return res.status(200).json(getOneResult);
    }
  } catch (error) {
    next(error);
  }
};

// UPDATE one experience by id
export const updateOneExperience = async (req, res, next) => {
  try {
    const updateOneResult = await ExperienceModel.deleteOne()
    if (!updateOneResult) {
      return res
        .status(404)
        .json(`Experience with the given ID:${req.params.id} was not found.`);
    } else {
      return res.status(200).json("Updated successfully");
    }
  } catch (error) {
    next(error);
  }
};

// DELETE one experience by id
export const deleteOneExperience = async function (req, res, next) {
  try {
    const removeOneExperience = await ExperienceModel.findByIdAndDelete({
      _id: req.params.id,
    });
    if (!removeOneExperience) {
      return res
        .status(404)
        .json(`Experience with the given ID:${req.params.id} was not found.`);
    } else {
      return res.status(200).json("Deleted Successfully!");
    }
  } catch (error) {
    next(error);
  }
};
