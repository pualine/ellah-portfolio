import { SkillsModel } from "../models/skills.models.js";

// Add Skills
export const addSkills = async (req, res, next) => {
try {
    const skillsResult = await SkillsModel.create({ ...req.body });
    if (!skillsResult) {
      return res.status(404).json("Error creating new skills");
    } else {
      return res.status(201).json("skills created successfully!");
    }
} catch (error) {
  next(error)
}
};

// GET  all skills
export const getAllSkills = async (req, res, next) => {
try {
    const getResults = await SkillsModel.find();
    if (getResults.length === 0) {
      return res.status(404).json("No data found");
    } else {
      return res.status(200).json(getResults);
    }
} catch (error) {
  next(error);
}
};

// UPDATE all skills
export const updateAllSkills = async (req, res, next) => {
try {
    const updateResults = await SkillsModel.updateMany();
    if (!updateResults) {
      return res.status(404).json("No skills found!");
    } else {
      return res.status(200).json("Updated successfully");
    }
} catch (error) {
  next(error);
}
};

// DELETE all skills
export const deleteAllSkills = async (req, res, next) => {
  try {
    const removeResult = await SkillsModel.deleteMany();
    return res.status(200).json(removeResult);
  } catch (error) {
    next(error);
  }
};

// GET one skills by id
export const getOneSkills = async (req, res, next) => {
  try {
    const getOneResult = await SkillsModel.findOne();
    if (!getOneResult) {
      return res
        .status(404)
        .json(`The skills with the given ID:${req.params.id} was not found.`);
    } else {
      res.status(200).json(getOneResult);
    }
  } catch (error) {
    next(error);
  }
};

// UPDATE one blog by id
export const updateOneSkills = async (req, res, next) => {
  try {
    const updateOneResult = await SkillsModel.findByIdAndUpdate({
      _id: req.params.id,
    });
    if (!updateOneResult) {
      return res
        .status(404)
        .json(`The skills with the given ID:${req.params.id} was not found.`);
    } else {
      res.status(200).json("Updated successfully");
    }
  } catch (error) {
    next(error);
  }
};

//  DELETE one skills by id
export const deleteOneSkills = async function (req, res, next) {
 try {
   const removeOnedskills = await SkillsModel.deleteOne()
   if (!removeOnedskills) {
     return res
       .status(404)
       .json(`The skills with the given ID:${req.params.id} was not found.`);
   } else {
     return res.status(200).json("Deleted Successfully!");
   }
 } catch (error) {
   next(error);
 }
};
