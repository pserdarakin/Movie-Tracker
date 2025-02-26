import mongoose from "mongoose";

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    "user_name": {
        type: String,
        required: true,
        unique: true // Ensure user_name is unique
    },
    "user_password": {
        type: String,
        required: true
    },
    "watched_list": [
        {
            "tmdb_id": {
                type: Number,
                required: true
            },
            "reviews": [
                {
                    review_id: {
                        type: Number,
                    },
                    review: {
                        type: String,
                    },
                    rating: {
                        type: Number,
                        min: 0,
                        max: 10
                    }   
                }
            ]
        }
    ],
}, { timestamps: true });

export default mongoose.model("Movie", movieSchema);