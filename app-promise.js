const yargs=require('yargs');
const axios=require('axios');

const argv=yargs
.options({
    a:{
      demand:true,
      alias:'address',
      description:'Address to fetch weather for'
    }
})
.help()
.alias('help','h')
.argv;
var enaddress=(encodeURIComponent(argv.address));
var geocodeURL='https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA86NJhCdG0jWkJ5opDi-PcHSsdXM-thCE&address='+enaddress;

axios.get(geocodeURL).then((response)=>{
  if (response.data.status=== 'ZERO_RESULTS'){
    throw new Error('Unable to find that address');
  }
  var lat=response.data.results[0].geometry.location.lat;
  var lng=response.data.results[0].geometry.location.lng;
  var weatherURL=`https://api.darksky.net/forecast/bc46b81c5e755e9877e92914c9368584/${lat},${lng}`;
  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherURL);
})
.then((response)=>{
  var temp=response.data.currently.temperature;
  var appTemp=response.data.currently.apparentTemperature;
console.log(`Its currently ${temp}. It feels like ${appTemp}`);

})
.catch((error)=>{
  if (error.code==='ENOTFOUND')
  {
  console.log("Unable to connect to API Servers.");
}
else {
  console.log(error.message);
}
});
