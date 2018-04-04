const request=require('request');

var getWeather= (lat, lng, callback) =>{
request({
  url: `https://api.darksky.net/forecast/bc46b81c5e755e9877e92914c9368584/${lat},${lng}`,
  json: true
}, (error,response,body)=>{
  if (!error && response.statusCode === 200)
  {
    callback(undefined,{
      temp: body.currently.temperature,
      appTemp: body.currently.apparentTemperature
    });
  }
  else {
    callback('Unable to fetch weather.');
  }
});
}

module.exports={
  getWeather
}
