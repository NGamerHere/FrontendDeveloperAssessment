import mongoose from 'mongoose';

export default async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI ?? 'mongodb://localhost:27017' , {
            dbName: "companies_db",
        });
        console.log("✅ MongoDB connected");
    } catch (error) {
        console.error("❌ MongoDB Error:", error.message);
        process.exit(1);
    }
};