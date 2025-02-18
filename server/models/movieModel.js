import mongoose from "mongoose";

const Schema = mongoose.Schema

const movieSchema = new Schema({
    "user_id": {
        type: Number,
        required: true
    },
    "user_name": {
        type: String,
        required: true
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
            "title": {
                type: String,
                required: true
            },
            "genre": {
                type: String,
                required: true
            },
            "year": {
                type: Number,
                required: true
            },
            "poster": {
                type: String,
                required: true
            },
            "reviews": [
                {
                    review_id: {
                        type: Number,
                        required: false
                    },
                    user_id: {
                        type: Number,
                        required: false
                    },
                    review: {
                        type: String,
                        required: false
                    },
                    rating: {
                        type: Number,
                        required: false,
                        min: 0,
                        max: 10
                    }   
                }
            ]
        }
    ],
    "wanted_list": [
        {
            "tmdb_id": {
                type: Number,
                required: true
            },
            "title": {
                type: String,
                required: true
            },
            "genre": {
                type: String,
                required: true
            },
            "year": {
                type: Number,
                required: true
            },
            "poster": {
                type: String,
                required: true
            }
        }
    ]
}, { timestamps: true });

export default mongoose.model("Movie", movieSchema);