require('dotenv').config()
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
let testAPIRouter = require("./api/test");
const app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(cors());
let map;
//
///infrormation load
// $.getJSON("./res/init.json", function(data){
//     map=data;
// }
// );
//
app.use("/",testAPIRouter);
//
app.set('port',process.env.PORT );
app.listen(app.get('port'));
