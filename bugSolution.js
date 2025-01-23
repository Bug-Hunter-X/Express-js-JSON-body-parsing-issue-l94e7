const express = require('express');
const app = express();
app.use(express.json()); // This line is crucial for parsing JSON bodies
app.post('/data', (req, res) => {
  console.log(req.body); 
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));