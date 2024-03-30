import { AchievementsModel } from "../models/achievements.models.js";

// Add new  achievements to the database
export const AddAchievements = async (req, res, next) => {
  try {
    const addResults = await AchievementsModel.create(req.body);
    return res.status(201).json("Achievements created successfully!");
  } catch (error) {
    next(error);
  }
};

// Get all   achievements in the database
export const GetAllAchievements = async (req, res, next) => {
  try {
    const findResults = await AchievementsModel.find();
    // If no results found, send a 404 error message
    if (findResults.length === 0) {
      return res.status(404).json("No Achievements Found");
    } else {
      return res.status(200).json(findResults);
    }
  } catch (error) {
    next(error);
  }
};

// Get a single achievements
export const GetOneAchievement = async (req, res, next) => {
  try {
    const findOneResults = await AchievementsModel.findById({
      _id: req.params.id,
    });
    if (findOneResults === null) {
      res
        .status(404)
        .json({
          message: `could not find achievement with ID:${req.params.id}`,
        });
    } else {
      return res.status(200).json(findOneResults);
    }
  } catch (error) {
    next(error);
  }
};

// Delete one  achievements
export const DeleteOneAchievement = async (req, res, next) => {
  try {
    const DeleteOneResults = await AchievementsModel.deleteOne()
    if (!DeleteOneResults) {
      return res
        .status(404)
        .json(
          `The achievement with the given ID:${req.params.id} was not found.`
        );
    } else {
      return res
        .status(200)
        .json(
          `The achievement with the given ID:${req.params.id} was deleted!`
        );
    }
  } catch (error) {
    next(error);
  }
};

// Delete all   achievements in the database
export const DeleteAllAchievement = async (req, res, next) => {
  try {
    const DeleteAllResults = await AchievementsModel.deleteMany();
    return res.status(200).json("All achievements were deleted succefully!");
  } catch (error) {
    next(error);
  }
};

// Update a single achievements
export const UpdateOneAchievements = async (req, res, next) => {
  try {
    const UpdateOneResults = await AchievementsModel.findByIdAndUpdate({
      _id: req.params.id,
    });
    // Check to see if there is an item with that id number exits
    if ( UpdateOneResults == null) {
      return res
        .status(404)
        .json(`No achievement with this ID:${req.params.id} updated!`);
    } else {
      // If it does exist then update it with new data
      return res.status(200).json("achievement has been Updated!");
    }
  } catch (error) {
    next(error);
  }
};

// Update all  achievements in database
export const UpdateAllAchievements = async (req, res, next) => {
  try {
    const updateResults = await AchievementsModel.updateMany();
    return res
      .status(200)
      .json(`achievements were successfully updated.`);
  } catch (error) {
    next(error);
  }
};

// export const UpdateAllAchievements = async (req, res, next) => {
//   try {
//     const UpdateResults = await AchievementsModel.updateMany();
//     return res
//       .status(200)
//       .json(
//         `${UpdateResults.modifiedCount} achievements were successfully updated.`
//       );
//   } catch (error) {
//     next(error);
//   }
// };
