let fs = require('fs')

fs.readFile('./data/1.txt',function (error, data) {
  console.log(data)
})