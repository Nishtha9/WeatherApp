const request=require('request');
const yargs=require('yargs');
const geocode=require('./Geocode/Geocode.js');

const argv=yargs
.options({
    a:{
      damnd:true,
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
    console.log(JSON.stringify(results,undefined,2));
  }
});
