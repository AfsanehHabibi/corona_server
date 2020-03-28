let variable =require('./../index');
var express = require("express");
var router = express.Router();
router.get("/gis/testpoint",function(req,res){
      res.status(200).send(variable.blogs);
})
module.exports = router;