let fs = require('fs')

fs.writeFile('./data/2.txt', 'hello nodejs writeFile', function (error) {
  console.log(error)
})