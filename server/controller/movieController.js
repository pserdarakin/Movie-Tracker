import Movie from "../models/movieModel.js";

export const getAllUserProfiles = async (req, res) => {
    try {
        const profiles = await Movie.find();
        res.status(200).json(profiles);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getUserProfileById = async (req, res) => {
    const { id } = req.params;
    try {
        const foundProfile = await Movie.findById(id);
        if (!foundProfile) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json(foundProfile);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getUserWatchedList = async (req, res) => {
    const { id } = req.params;
    try {
        const foundProfile = await Movie.findById(id);
        if (!foundProfile){
            return res.status(404).json({ error: "User not found" });
        }
        const watchedList = foundProfile.watched_list;
        res.status(200).json(watchedList);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteUserProfile = async (req, res) => {
    const { id } = req.params;
    try {
        const foundProfile = await Movie.findByIdAndDelete(id);
        if (!foundProfile) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "User profile deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const createUserProfile = async (req, res) => {
    const { user_name, user_password, watched_list } = req.body;
    try {
        const newUserProfile = await Movie.create({
            user_name,
            user_password,
            watched_list
        });
        res.status(201).json(newUserProfile);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const addMovieToUserWatchedList = async (req, res) => {
    const { id } = req.params;
    const { tmdb_id, reviews } = req.body;
    try {
        const userProfile = await Movie.findById(id);
        if (!userProfile) {
            return res.status(404).json({ error: "User not found" });
        }
        userProfile.watched_list.push({ tmdb_id, reviews });
        const updatedProfile = await userProfile.save();
        res.status(200).json(updatedProfile);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteMovieFromUserWatchedList = async (req, res) => {
    const { id } = req.params;
    const { tmdb_id } = req.body;

    try {
        const userProfile = await Movie.findById(id);
        if (!userProfile) {
            return res.status(404).json({ error: "User not found" });
        } else {
            const updatedList = userProfile.watched_list.filter(movie => movie.tmdb_id !== tmdb_id);
            if (updatedList.length === userProfile.watched_list.length) {
                return res.status(404).json({ error: "Movie not found in watched list" });
            }
            userProfile.watched_list = updatedList;
            await userProfile.save();

            res.status(200).json({ message: "Movie deleted successfully" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};