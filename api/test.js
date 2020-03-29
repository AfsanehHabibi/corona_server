let variable =require('./../index');
var express = require("express");
var router = express.Router();
router.get("/",function(req,res){
      console.debug("test api working!");
})
module.exports = router;