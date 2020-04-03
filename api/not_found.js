var express = require("express");
var router = express.Router();
router.use(function(req,res){
            res.status(404).json({message:"page not found"});
})
module.exports = router;