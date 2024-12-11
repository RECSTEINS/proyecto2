require('dotenv').config();
const express = require("express");
const http = require('http'); 
const cors = require('cors');
const path = require('path'); 
const routes = require('./routes/endoints.js');

const app = express();
const httpServer = http.createServer(app);  


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.use('/', routes);


const PORT = process.env.PORT || 3000;


httpServer.listen(PORT, () => {
  console.log("El servidor está en el puerto " + PORT);
});

module.exports = app;