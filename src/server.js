// Install the necessary packages: npm install express cors node-fetch
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join('src','..', 'public')));
app.use(cors());

app.get('/fetchWebsite', async (req, res) => {
  const url = req.query.url;

  try {
    const response = await fetch(url);
    const content = await response.text();
    res.send(content);
  } catch (error) {
    console.error('Error fetching website:', error);
    res.status(500).send('Error fetching website.');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});