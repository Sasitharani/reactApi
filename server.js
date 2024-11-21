import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

// Use CORS middleware
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Endpoint to handle POST requests
app.post('/api', (req, res) => {
  // Extract value from request body
  const { value } = req.body;
  // Send back a response with "Hi" added to the value
  res.json({ 
    message: `Hi ${value}`,
    message2: `Hi the data was sent from server`
 });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});