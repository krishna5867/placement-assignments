require('dotenv').config();
const express = require('express');
const cookieParser = require("cookie-parser");
const cors = require("cors");
const userRouter = require('./routes/userRouter')
const connectDb = require('./db/database')

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

connectDb();

app.use("/", userRouter)

module.exports = app;


