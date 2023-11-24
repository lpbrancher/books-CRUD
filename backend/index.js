import express from "express";
import { PORT, DB_URL } from "./config.js";
import mongoose from 'mongoose';
// import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js'
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors())
// app.use(cors({
//     origin: 'localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type']
// }))
app.get('/', (request, response)=>{
    console.log(request)
    return response.status(234).send('/ route working')
});
app.use('/books', booksRoute)

mongoose
    .connect(DB_URL)
    .then(()=>{
        console.log('connected to database')
        app.listen(PORT, ()=>{
            console.log(`App is listening to port ${PORT}.`)
        })
    })
    .catch((error)=>{
        console.log(error)
    })