import express from 'express';
import cors from "cors";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import moviesRoutes from "./routes/movieRoute.js";

dotenv.config();

// express app
const app = express();
const port = process.env.PORT || 8080; 

// connection with client-side
const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));
app.use(express.json());

// MongoDB Connection Using Mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000,
})
.then(() => console.log("✅ MongoDB Connected Successfully!"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));

// Routes
app.use("/api/movies",moviesRoutes);

// Start Server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});