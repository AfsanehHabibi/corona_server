let validateGeoJson = require('./../src/validation');
let variable =require('./../index');
var express = require("express");
var router = express.Router();
router.put("/gis/addpolygon",function(req,res){
    if(!req.body || !validateGeoJson(req.body)){
        res.status(400).json({result:"invalid"});
    } else {
        variable.map.features.push(req.body);  
        res.status(200).json(variable.map);
    }
})
module.exports = router;
