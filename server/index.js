const express = require('express');

const app = express();
const port = 4000;

app.get('/', (req, res) => res.send("hiya"));

app.listen(port, console.log(`Server started on port $(port)`));
