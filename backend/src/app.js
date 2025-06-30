import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';


// Importing necessary modules and configuring environment variables    
const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN || '*',
    credentials: true
}));

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ limit: '50mb', extended: true })); 
app.use(express.static('public'));
app.use(cookieParser());

// import all routes here 





//declare routes here 



export {app};
// This is the main application file for the backend.
// It sets up the Express application and configures middleware for parsing JSON and URL-encoded data