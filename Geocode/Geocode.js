const request=require('request');

var geocodeAddress=(address,callback)=>{
var enaddress=(encodeURIComponent(address));

request({
  url:'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA86NJhCdG0jWkJ5opDi-PcHSsdXM-thCE&address='+enaddress,
  json:true
},(error,response,body)=>{
if (error){
  callback("Could not connect to Google Servers.");
}
else if(body.status=="ZERO_RESULTS")
{
  callback("Entered address could not be located.");
}
else if(body.status=="OK"){
callback(undefined,{
  Address: body.results[0].formatted_address,
  Latitude: body.results[0].geometry.location.lat,
  Longnitude: body.results[0].geometry.location.lng
});
}
});
};
module.exports={
  geocodeAddress
};
