require('dotenv').config()
const express = require("express");
const winston = require("winston");
const bodyParser = require('body-parser');
const fs= require('fs');
const path=require('path');
let map = require("./res/init.json");
let morgan = require('morgan');
const cors = require('cors');
let testAPIRouter = require("./api/test");
let findPointAPIRouter = require("./api/find_point");
let addPolygonAPIRouter = require("./api/add_polygon");
let notFoundAPIRouter = require("./api/not_found");
const app = express();
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(cors());
let requestLogStream = fs.createWriteStream(path.join(__dirname, 'log/requests.log'), { flags: 'a' });
const logger = winston.createLogger({
    transports: [
      new winston.transports.File({ filename: path.join(__dirname, 'log/server.log') })
    ]
  });
app.use(morgan('common', { stream: requestLogStream }));
app.use("/",addPolygonAPIRouter);
app.use("/",findPointAPIRouter);
app.use(notFoundAPIRouter);
app.set('port',process.env.PORT );
app.listen(app.get('port'));
logger.log({
    level:'info',
    message:'app listening in port '+app.get('port')
});
exports.map=map;
exports.logger=logger;
