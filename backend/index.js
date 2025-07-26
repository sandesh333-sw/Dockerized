// index.js

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB connection string
const mongoURI = 'mongodb://127.0.0.1:27017/mydatabase';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Connected to MongoDB');
})
.catch((err) => {
  console.error('❌ Error connecting to MongoDB:', err);
});

// Example route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server on port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
