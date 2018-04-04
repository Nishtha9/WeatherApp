var asyncAdd=(a,b)=>{
  return new Promise((resolve, reject)=>{
    setTimeout( ()=>{
  if (typeof a == 'number' && typeof b == 'number'){
    resolve(a+b);
  }
  else {
    reject('Arguments must be numeric');
  }
},1500);
})
}
asyncAdd(5,7).then((res)=>{
  console.log(res);
  return asyncAdd(res,33);
}).then((res)=>{
  console.log('Should be 45: ', res);
}).catch((msg)=>{
  console.log(msg);
});




// var  somePromise=new Promise((resolve,reject)=>{
// setTimeout(()=>{
//   // resolve('Done');
//   reject('Could not fulfill promise');
// },2500);
// });
//
// somePromise.then((msg)=>{
//   console.log('Success: ',msg);
// }, (ermsg)=>{
//   console.log('Error: ',ermsg);
// });
