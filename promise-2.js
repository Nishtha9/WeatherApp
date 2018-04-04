const request=require('request');

var geocodeAddress=(address)=>{

return new Promise((resolve,reject)=>{
var enaddress=(encodeURIComponent(address));

request({
    url:'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA86NJhCdG0jWkJ5opDi-PcHSsdXM-thCE&address='+enaddress,
    json:true
  },(error,response,body)=>{
if (error){
    reject("Could not connect to Google Servers.");
  }
else if(body.status=="ZERO_RESULTS")
  {
    reject("Entered address could not be located.");
  }
else if(body.status=="OK"){
  resolve({
    Address: body.results[0].formatted_address,
    Latitude: body.results[0].geometry.location.lat,
    Longnitude: body.results[0].geometry.location.lng
  });
  }
});
});
};

geocodeAddress('302017').then((location)=>{
  console.log(JSON.stringify(location,undefined,2));
}, (errMsg)=>{
  console.log(errMsg);
});
