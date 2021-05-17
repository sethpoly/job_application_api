// app.js

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const app = express();

// Used for postman testing
// const routes = require('./routes/api/books');
// app.use('/api/books', routes);

// Routes
const books = require('./routes/api/books');

// Connect to database
connectDB();

// Cors
app.use(cors({ origin: true, credentials: true}));

// Init Middleware
app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send('Hello world!'));

// Use routes
app.use('/api/books', books);

const port = process.env.PORT ||  8082;

app.listen(port, () => console.log('Server running on port ' + port))