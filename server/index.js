import express from 'express';
import cors from "cors";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Movie from "./models/movieModel.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;  // Use default if env variable is missing

const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));
app.use(express.json());

// ✅ MongoDB Connection Using Mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // Increases timeout in case of delays
})
.then(() => console.log("✅ MongoDB Connected Successfully!"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));

// ✅ Routes
app.get('/', (req, res) => {
  res.json({movies: ["Batman", "Godfather", "Matrix"]});
});

app.post('/', async (req, res) => {
  const {user_id, user_name, user_password, watched_list, wanted_list} = req.body;

  try {
    const movie = await Movie.create({user_id, user_name, user_password, watched_list, wanted_list});
    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
});

// ✅ Start Server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});