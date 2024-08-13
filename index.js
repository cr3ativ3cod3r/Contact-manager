const express = require('express');
//const bodyParser = express.json;
const bodyParser = require('body-parser');
const errorHandler = require('./middlewares/errorHandler');
const authHandler = require('./middlewares/authHandler');
const connectdb = require('./config/dbconfig');
connectdb();
const app = express();
const port = 3000;
const ContactRoutes = require("./routes/ContactRoutes");
const UserRoutes = require("./routes/UserRoutes");



app.use(bodyParser.json());//ALWAYS PUT PARSER BEFORE REGISTERING THE ROUTEHANDLER
app.use("/api/contacts",UserRoutes);
//app.use(authHandler);
app.use("/api/contacts",ContactRoutes);


//app.use(bodyParser());
//app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})