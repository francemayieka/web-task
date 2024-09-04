import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const hardcodedName = 'user123';
const hardcodedPassword = 'pass123';

app.post('/login', (req, res) => {
  const { name, password } = req.body;

  if (name === hardcodedName && password === hardcodedPassword) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the authentication server!');
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
