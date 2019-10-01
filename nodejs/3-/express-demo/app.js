const express = require('express')
// http.creatServer
const app = express()

app.use('/public/', express.static('./public/'))

app.get('/', function (req, res) {
  res.send('hello express')
})
app.get('/about', function (req, res) {
  res.send('<!DOCTYPE html>\n' +
    '<html lang="en">\n' +
    '<head>\n' +
    '  <meta charset="UTF-8">\n' +
    '  <title>Title</title>\n' +
    '</head>\n' +
    '<body>\n' +
    '<h1>hello about</h1>\n' +
    '</body>\n' +
  '</html>\n')
})

app.listen(3000, function () {
  console.log('app is running at port 3000')
})
