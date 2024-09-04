import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Hardcoded credentials
const hardcodedName = 'user123';
const hardcodedPassword = 'password123';

// Login route
app.post('/login', (req, res) => {
  const { name, password } = req.body;

  if (name === hardcodedName && password === hardcodedPassword) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// Root route to handle the default path
app.get('/', (req, res) => {
  res.send('Welcome to the authentication server!');
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
