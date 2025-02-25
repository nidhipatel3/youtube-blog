const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();
const PORT = 800;

app.set("view engine", "ejs");
app.set("views", path.resolve("views"));

app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));