import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import {getConfig} from "./config";
import routes from './routes'

const app = express();
const router = express.Router();

const API_PORT = process.env.API_PORT || 3001;

mongoose.connect(getConfig('dbUri'));
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



app.use('/api',routes);


app.listen(API_PORT, () => console.log(`Navi listens on ${API_PORT}`));