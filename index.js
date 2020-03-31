require('dotenv').config()
const express = require("express");
const bodyParser = require('body-parser');
let map = require("./res/init.json");
const cors = require('cors');
let testAPIRouter = require("./api/test");
let findPointAPIRouter = require("./api/find_point");
let addPolygonAPIRouter = require("./api/add_polygon");
const app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(cors());
exports.map=map;
app.use("/",addPolygonAPIRouter);
app.use("/",findPointAPIRouter);
app.set('port',process.env.PORT );
app.listen(app.get('port'));
