const express= require('express');
const dotenv= require('dotenv');
const bodyParser= require('body-parser');
const ejs= require('ejs');
const connectDB= require('./config/db');
const User = require('./auth/User');

dotenv.config({path: './config/config.env'});

const app = express();
connectDB();


app.use(express.static(__dirname + '/views'));
app.engine('html', require('ejs').renderFile);
app.set("view engine", "html"); 
app.set("views", __dirname + "/views"); 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var urlencodedParser=bodyParser.urlencoded({extended:false});

app.use('/',require('./routes/index'));

app.listen(3000,()=>{
    console.log("Server is started");
});


