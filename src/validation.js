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
    let len=Geojson.geometry.coordinates[0].length;
    if(len<3)
        return false;
    if((Geojson.geometry.coordinates[0]).filter(point => isPoint(point)).length !== len)
        return false;
    return true;
}
function isPoint(point){
    if(!Array.isArray(point))
        return false;
    if(point.length!==2)
        return false;
    if((typeof point[0]!=="number") || (typeof point[1]!=="number"))
        return false;
    if(point[0]<-180 || point[0]>80 || point[1]<-90 || point[1]>90)
        return false;
    return true;
}
exports.validateGeoJson=validateGeoJson;
exports.isPoint=isPoint;