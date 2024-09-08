const express = require('express');
const path = require('path');
const app = express();

// Serve static files (CSS, JS, images, etc.) from the 'public' directory
app.use(express.static(path.join(__dirname, '/public/js')));
app.use(express.static(path.join(__dirname, '/public/css')));
app.use(express.static(path.join(__dirname, '/public/assets')));
app.use(express.static(path.join(__dirname, '/public/assets')));
console.log(path.join(__dirname, '/public/assets'))

// Route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', '/index.html'));
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});