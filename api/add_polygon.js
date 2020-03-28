let variable =require('./../index');
var express = require("express");
var router = express.Router();
router.put("/gis/addpolygon",function(req,res){
    res.status(200).send("recieved");
})
module.exports = router;