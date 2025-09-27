import mongoose from 'mongoose';

const connectDB = async (mongoUri) => {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    if (process.env.NODE_ENV !== "test") {
      process.exit(1); // only exit in dev/production
  }else {
      throw err; // let Jest handle the error
    }
}};

export default connectDB;
