// Create a simple Express server
const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Chat app listening at http://localhost:${port}`);
});
