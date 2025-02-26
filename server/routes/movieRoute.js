import express from "express";
import {
    getAllMovies,
    getMovieById,
    deleteMovie,
    createMovieProfile,
    addMovieToWatchedList
} from "../controller/movieController.js";

const router = express.Router();

router.get('/', getAllMovies);
router.get('/:user_id', getMovieById);
router.delete("/:user_id", deleteMovie);
router.post('/', createMovieProfile);
router.post('/:user_id/watched', addMovieToWatchedList);

export default router;