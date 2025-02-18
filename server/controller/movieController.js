import { 
    getAllProfilesService,
    getProfileByIdService,
    deleteProfileService,
    createProfileService,
    addMovieToWatchedService
} from "../services/movieService.js";

export const getAllMovies = async (req, res) => {
    try {
        const profiles = await getAllProfilesService();
        res.status(200).json(profiles);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

export const getMovieById = async (req, res) => {
    const {user_id} = req.params;
    try {
        const foundProfile = await getProfileByIdService(user_id);

        if (!foundProfile) {
            return res.status(404).json({ error: "User not found"});
        }
        res.status(200).json(foundProfile);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

export const deleteMovie = async (req, res) => {
    const {user_id} = req.params;
    try {
        const result = await deleteProfileService(user_id);
        if (!result) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "User profile deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const createMovieProfile = async (req, res) => {
    const {user_id, user_name, user_password, watched_list, wanted_list} = req.body;
    try {
        const newUserProfile = await createProfileService(user_name, user_password, watched_list, wanted_list);
        res.status(200).json(profile);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

export const addMovieToWatchedList = async (req, res) => {
    const {user_id} = req.params;
    const {tmdb_id, title, genre, year, poster, reviews} = req.body;
    try {
        const updatedProfile = await addMovieToWatchedService(user_id, { tmdb_id, title, genre, year, poster, reviews });
        if (updatedProfile) {
            res.status(200).json(updatedProfile);
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};