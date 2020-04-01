let variable =require('./../index');
var express = require("express");
var router = express.Router();
var inside = require('point-in-polygon')
router.get("/gis/testpoint",function(req,res){
      if(!req.query.lat || !req.query.long){
            res.status(400).json({result:"invalid"});
      }else{
      let lat=req.query.lat;
      let long=req.query.long;
      let point=[parseFloat(long),parseFloat(lat)];
      let result=[];
      (variable.map.features).forEach(element => {
            if(inside(point,element.geometry.coordinates[0]))
                  result.push(element.properties.name);
      });
      res.status(200).json({"polygons":result});
}
})
module.exports = router;