import express from "express";
import Movie from "../models/movieModel.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.json({mssg: "GET all movies"});
  });
  
router.get('/:id', (req, res) => {
    res.json({mssg: "GET all movies"});
});
  
router.post('/', async (req, res) => {
    const {user_id, user_name, user_password, watched_list, wanted_list} = req.body;

    try {
        const movie = await Movie.create({user_id, user_name, user_password, watched_list, wanted_list});
        res.status(200).json(movie);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});


export default router;