const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mainRouter = require('./routes/mainRouter');

app.get("/", mainRouter);

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${3000}`);
});
