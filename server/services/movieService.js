import Movie from "../models/movieModel.js";

export const getAllProfilesService = async () => {
    try {
        return await Movie.find();
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getProfileByIdService = async () => {
    try {
        return await Movie.findOne({ user_id });
    } catch (error) {
        throw new Error(error.message);
    }
}

export const deleteProfileService = async () => {
    try {
        const foundProfile = await Movie.findOneAndDelete({ user_id });
        return foundProfile ? true : false;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const createProfileService = async (user_name, user_password, watched_list, wanted_list) => {
    try {
        const latestUserId = await Movie.find().sort({user_id: -1}).limit(1);
        const newUserId = latestUserId.length > 0 ? latestUserId[0].user_id + 1: 1;
        return await Movie.create({
            user_id: newUserId, 
            user_name, 
            user_password, 
            watched_list, 
            wanted_list
        });
    } catch (error) {
        throw new Error(error.message);
    }
};

export const addMovieToWatchedService = async (user_id, movieData) => {
    try {
        const userProfile = await Movie.findOne({user_id: user_id});
        if (!userProfile) {
            return null;
        }
        userProfile.watched_list.push(movieData);
        return await userProfile.save();
    } catch (error) {
        throw new Error(error.message);
    }
};