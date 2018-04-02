const request=require('request');

request({
  url:'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA86NJhCdG0jWkJ5opDi-PcHSsdXM-thCE&address=12/34%20malviya%20Nagar%20Jaipur',
  json:true
},(error,response,body)=>{
console.log(`Address: ${body.results[0].formatted_address}`);
console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
console.log(`Longnitude: ${body.results[0].geometry.location.lng}`);
});
