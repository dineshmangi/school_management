import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes/route.js'; // Ensure the file has a .js extension

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Use MONGO_URI from .env
const mongoURI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Example route
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// Use the routes from route.js
app.use('/api', routes); // Prefix all routes with /api

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});