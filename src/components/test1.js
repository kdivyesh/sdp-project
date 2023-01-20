const fs=require('fs');
datas=fs.readFileSync('data.txt','utf-8');
console.log(datas)
console.log('after this')