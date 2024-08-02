const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/users');

const app = express();
const port = 3011;
const mongoUrl = 'mongodb://localhost:27017/todoApp';

mongoose.connect(mongoUrl)
    .then(() => console.log("Database is connected"))
    .catch(() => console.log("Database connection error"));

app.use(express.json()); // Fixed here
app.use('/master', userRoute);

app.listen(port, () => console.log(`Server is running on port: ${port}`)); // Fixed here
