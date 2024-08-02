import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/auth/google', (req, res) => {
  const { name, email, photo } = req.body;

  // Here, you can perform actions such as saving the user to the database
  console.log('User Info:', { name, email, photo });

  // Simulating database save with a delay
  setTimeout(() => {
    res.status(200).json({ message: 'User authenticated successfully' });
  }, 1000);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
