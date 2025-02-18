import express from "express";
import Movie from "../models/movieModel.js";
import bodyParser from "body-parser";

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

// All Users
router.get('/', async (req, res) => {
    try {
        const profiles = await Movie.find();
        res.status(200).json(profiles);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
  });

// Spesific User with its id
router.get('/:user_id', async (req, res) => {
    try {
        const {user_id} = req.params;
        const foundProfile = await Movie.findOne({user_id: user_id});
        
        if (!foundProfile) {
            return res.status(404).json({ error: "User not found"});
        }
        res.status(200).json(foundProfile);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.delete("/:user_id", async (req, res) => {
    try {
        const {user_id} = req.params;
        const foundProfile = await Movie.findOneAndDelete({user_id});

        if (!foundProfile) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "User profile deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

// New User with a Movie
router.post('/', async (req, res) => {
    const {user_id, user_name, user_password, watched_list, wanted_list} = req.body;
    
    try {
        const latestUserId = await Movie.find().sort({user_id: -1}).limit(1);
        const newUserId = latestUserId.length > 0 ? latestUserId[0].user_id + 1: 1;
        const profile = await Movie.create({user_id: newUserId, user_name, user_password, watched_list, wanted_list});
        res.status(200).json(profile);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

// Adding new movie into watched list with existing profile
router.post('/:user_id', async (req, res) => {
    const {user_id} = req.params;
    const {tmdb_id, title, genre, year, poster, reviews} = req.body;
    
    try {
        // need to access inside of database inside of spesific user_id inside of watched list user has
        const userProfile = await Movie.findOne({user_id: user_id});

        if (!userProfile){
            res.status(404).json({ error: "User not found"});
        }    
        // required of to post new movie => {tmdb_id, title, genre, year, poster, reviews}
        userProfile.watched_list.push({
            tmdb_id, 
            title, 
            genre, 
            year, 
            poster, 
            reviews
        
        });
        const updatedProfile = await userProfile.save();
        res.status(200).json(updatedProfile);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default router;