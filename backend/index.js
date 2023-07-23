const express = require ('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
//use express.json() to get data into json format
app.use(express.json());
//port 
const PORT = process.env.PORT || 5009;

//use cors
app.use(cors());


//lets import routes
const TodoItemRoute = require('./routes/todoItems');

//lets connect to monogodb..
mongoose.connect(process.env.DB_CONNECT)
.then(()=> console.log("Database connected"))
.catch(error => console.log(error))


app.use('/',TodoItemRoute);


// add port and connect to server
app.listen(PORT, ()=> console.log("Server connected") );