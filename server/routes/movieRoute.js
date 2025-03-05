import express from "express";
import {
    getAllUserProfiles,
    getUserProfileById,
    getUserWatchedList,
    deleteUserProfile,
    createUserProfile,
    addMovieToUserWatchedList,
    deleteMovieFromUserWatchedList
} from "../controller/movieController.js";

const router = express.Router();

router.get('/', getAllUserProfiles);
router.get('/:id', getUserProfileById);
router.get('/:id/watched', getUserWatchedList)
router.delete("/:id", deleteUserProfile);
router.post('/', createUserProfile);
router.post('/:id/watched', addMovieToUserWatchedList);
router.delete('/:id/watched', deleteMovieFromUserWatchedList);

export default router;