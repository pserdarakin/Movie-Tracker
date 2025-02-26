import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const removeAllUserIdIndexes = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000,
        });
        console.log("✅ MongoDB Connected Successfully!");

        const db = mongoose.connection.db;
        const collection = db.collection('movies');

        // Get all indexes
        const indexes = await collection.indexes();
        console.log("Indexes before removal:", indexes);

        // Drop all indexes on user_id
        for (const index of indexes) {
            if (index.key.user_id !== undefined) {
                await collection.dropIndex(index.name);
                console.log(`✅ Index ${index.name} on user_id removed successfully!`);
            }
        }

        const updatedIndexes = await collection.indexes();
        console.log("Indexes after removal:", updatedIndexes);

        mongoose.disconnect();
    } catch (error) {
        console.error("❌ Error removing indexes:", error);
    }
};

removeAllUserIdIndexes();
