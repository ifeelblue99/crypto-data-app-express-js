const express = require('express');
const app = express();
require("dotenv").config()

const port = process.env.PORT || 8080

app.use(express.json({limit:"1mb"}))
app.use("/", require("./routes/routes"))

app.listen(port, () => console.log('listening at 3000'));
app.use(express.static('public'));