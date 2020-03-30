let variable =require('./../index');
var express = require("express");
var router = express.Router();
let booleanPointInPolygon = require('@turf/boolean-point-in-polygon');
var inside = require('point-in-polygon')
router.get("/gis/testpoint",function(req,res){
      let lat=req.query.lat;
      let long=req.query.long;
      console.debug([long,lat]);
      [(variable.map.features)].forEach(element => {
            //let result= turf([long,lat],element);
            //booleanPointInPolygon([lat,long], element);
            //console.debug(turf([lat,long], element));
            console.debug(inside([long,lat],element))
      });
      res.json({massage:"see"})
})
module.exports = router;