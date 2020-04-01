function validateGeoJson(Geojson){
    if(!Geojson.type || Geojson.type != "Feature")
        return false;
    if(!Geojson.properties || !Geojson.properties.name)
        return false;
    if(!Geojson.geometry || !Geojson.geometry.type ||  Geojson.geometry.type!="Polygon")
        return false;
    if( !Geojson.geometry.coordinates || !Array.isArray(Geojson.geometry.coordinates) ||
            !Array.isArray(Geojson.geometry.coordinates[0]))
        return false;
    if(Geojson.geometry.coordinates[0].length<3)
        return false;
    return true;
}
module.exports=validateGeoJson;