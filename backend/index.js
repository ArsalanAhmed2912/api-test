const express = require('express');
const cors = require('cors'); // Import cors

const app = express();
const PORT = 5000;

app.use(cors()); // Use cors middleware

app.get('/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
