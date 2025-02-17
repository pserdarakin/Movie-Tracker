import express, { json } from 'express';
import cors from "cors";
import dotenv from 'dotenv';
import {MongoClient} from "mongodb";

dotenv.config(); 

const app = express();
const port = 8080;
const corsOptions = {
  origin: ["http://localhost:5173"],
};

async function main() {

  const Db = process.env.MONGO_URI;
  const client = new MongoClient(Db);

  try {
    await client.connect()
    const collections = await client.db("MyMovieApp").collections()
    collections.forEach((collection) => console.log(collection.s.namespace.collection))
  } catch(e) {
    console.error(e)
  } finally {
    await client.close();
  }
}

app.use(cors(corsOptions));

// Routes
app.get('/', (req, res) => {
    res.json({movies: ["Batman", "Godfather", "Matrix"]});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
  main();
});