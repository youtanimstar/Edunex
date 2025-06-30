// Initialize Express app
const express = require('express');
const app = express();
app.use(express.json());


// Middleware for CORS
const cors = require('cors');
app.use(cors());

// Load environment variables from .env file
const dotenv = require('dotenv');
dotenv.config();

// Import database configuration
const db = require('./config/db');


// Set up the port and backend URL
const PORT = process.env.PORT || 3000;
const BACKEND_URL = process.env.BACKEND_URL || `http://localhost:${PORT}`;

// Import routes
const userRouter = require("./routes/userRoutes");






// Sample route
app.get('/', (req, res) => {
  res.json({ message: 'Hello from the backend Edunex!' });
});

app.use('/api/v1',userRouter);





app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}, Link ${BACKEND_URL}`);
});