let variable =require('./../index');
var express = require("express");
var router = express.Router();
router.get("/",function(req,res){
      console.debug("test api working!");
      res.json({ message: 'welcome to corona server' });
})
module.exports = router;