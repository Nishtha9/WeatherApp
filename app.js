const request=require('request');
const yargs=require('yargs');
const geocode=require('./Geocode/Geocode.js');
const weather=require('./weather/weather.js');

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

geocode.geocodeAddress(argv.address, (errorMsg,results)=>{
  if (errorMsg){
    console.log(errorMsg);
  }
  else {
  console.log(results.Address);
  weather.getWeather(results.Latitude,results.Longnitude, (errorMsg, weatherResults)=>{
    if (errorMsg){
      console.log(errorMsg);
    }
    else {
      console.log(`Its currently ${weatherResults.temp}. It feels like ${weatherResults.appTemp}`);
    }
  });

  }
});
