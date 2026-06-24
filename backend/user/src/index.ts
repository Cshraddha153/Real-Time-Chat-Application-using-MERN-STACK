import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';

dotenv.config();

await connectDb();

const app = express();

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);   
});