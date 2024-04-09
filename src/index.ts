import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

const Port = 8001;
server.listen(Port, ()=> {
    console.log(`Server running on http://localhost:${Port}`)
});

const Mongo_URL = 'mongodb+srv://sample:root@blogapplication.onrgssl.mongodb.net/?retryWrites=true&w=majority&appName=BlogApplication'

mongoose.Promise= Promise;
mongoose.connect(Mongo_URL);
mongoose.connection.on('error', (error: Error)=> console.log(error));