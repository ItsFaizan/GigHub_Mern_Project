import express from 'express';
import mongoose from 'mongoose'; 
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js';
import reviewRoute from './routes/reviewRoute.js';
import authRoute from './routes/authRoute.js';
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();

mongoose.set('strictQuery', true);

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log("Connected to mongoDB!");
    } catch (error) {
      console.log(error);
    }
};


app.use(express.json());
app.use(cookieParser());
app.use("/backend/users", userRoute);
app.use("/backend/user_reviews", reviewRoute); 
app.use("/backend/user_auth", authRoute);


app.listen(5000, () => {
    connect();
    console.log('Backend server is running!');
    }   
);

