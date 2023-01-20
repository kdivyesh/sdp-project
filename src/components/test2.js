const fs=require('fs');
fs.readFile('data.txt','utf-8',(error,d)=>{
    console.log(d);
});
console.log('This demo ends');