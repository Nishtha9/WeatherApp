console.log('Starting');

setTimeout(()=>{
  console.log('Inside Callback')
},2000);

setTimeout(()=>{
  console.log('Second timeout');
},0);


setTimeout(()=>{
  console.log('Third timeout');
},1000);

console.log('Finishing');
