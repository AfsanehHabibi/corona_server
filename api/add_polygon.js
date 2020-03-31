import {validateGeoJson} from './../src/validation';
let variable =require('./../index');
var express = require("express");
var router = express.Router();
router.put("/gis/addpolygon",function(req,res){
    if(!req.body || !validateGeoJson(req.body)){
        res.status(400).send("bad request");
    } else {
        variable.map.features.push(req.body);  
    }
})
module.exports = router;
