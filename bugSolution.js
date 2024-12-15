const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' })); // Increased limit
app.post('/data', (req, res) => {
  const data = req.body;
  if (!data) {
    return res.status(400).send({ error: 'Invalid JSON payload' });
  }
  // Assuming data processing here...
  res.send('Data received');
}).catch(err => {
  console.error('Error processing request:', err);
  res.status(500).send({ error: 'Internal Server Error' });
});
app.listen(3000, () => console.log('Server listening on port 3000'));