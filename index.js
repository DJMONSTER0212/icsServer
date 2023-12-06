const express = require('express')
var morgan = require('morgan')
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const icsRoutes = require("./routes/icsRoutes");
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.json());


require("dotenv").config();
connectDB()

app.use('/api/ics',icsRoutes)


const server = app.listen(process.env.BASE_URL||5000,console.log("Server Running on localhost:5000"));