import express from "express";
import {
    getAllUserProfiles,
    getUserProfileById,
    deleteUserProfile,
    createUserProfile,
    addMovieToUserWatchedList
} from "../controller/movieController.js";

const router = express.Router();

router.get('/', getAllUserProfiles);
router.get('/:id', getUserProfileById);
router.delete("/:id", deleteUserProfile);
router.post('/', createUserProfile);
router.post('/:id/watched', addMovieToUserWatchedList);

export default router;