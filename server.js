const express = require('express');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 3000;

// Importing files
const connectDB = require('./config/db')
const simpleRouter = require('./routes/simple');
const { errorHandler } = require('./middleware/errormiddleware');

// Connect to MongoDB
connectDB();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/api/simple', simpleRouter); // use localhost:5000/api/simple to access backend services

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Example app is listening on port ${PORT}`);
})