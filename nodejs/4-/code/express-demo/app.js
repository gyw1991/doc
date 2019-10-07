const express = require('express')
const fs = require('fs')
const app = express()

app.use(express.static('./public/'))

app.get('/', () => {}).listen(3000, function () {
  console.log('app is running at port 3000')
})
