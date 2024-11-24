const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());

// Încarcă fișierul JSON cu datele
const data = JSON.parse(fs.readFileSync('./public/data.json', 'utf8'));

// Creează endpoint-ul
app.get('/api/products', (req, res) => {
  res.json(data);
});

// Rulează serverul
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
