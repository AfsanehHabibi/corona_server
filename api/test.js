let variable =require('./../index');
var express = require("express");
var router = express.Router();
router.get("/",function(req,res){
      Console.log("test api working!");
})
module.exports = router;