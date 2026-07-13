const express = require('express');
const path = require('path');
const app = express();
const PORT = 80;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + /public_html/, 'index.html'));
});

app.use('/images', express.static(path.join(__dirname ,'/public_html/', 'what-is-the-time/', 'images')));
app.get('/what-is-the-time', (req, res) => {
  res.sendFile(path.join(__dirname , '/public_html', '/what-is-the-time/', 'index.html'));
  
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});