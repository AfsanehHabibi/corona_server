let validateGeoJson = require('./../src/validation');
let variable =require('./../index');
let express = require("express");
let router = express.Router();
const fs = require('fs');
router.put("/gis/addpolygon",function(req,res){
    if(!req.body || !validateGeoJson(req.body)){
        res.status(400).json({message:"bad request"});
    } else {
        variable.map.features.push(req.body);  
        res.status(200).json(variable.map);
        fs.writeFile(__dirname+'/../res/init.json', JSON.stringify(variable.map) , 'utf8', function (err) {
            if (err) {
                variable.logger.log({
                    level:'error',
                    message:"An error occured while writing Database Object to File."+err
            })
            }else{
            variable.logger.log({
                level:'info',
                message:"Database file has been updated."
            })
            }
        });
    }
})
module.exports = router;
