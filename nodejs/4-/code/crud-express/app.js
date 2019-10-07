const express = require('express')
const app = express()
const router = require('./router')
const bodyParser = require('body-parser')
// app.use(express.static('./views/'))
app.engine('html', require('express-art-template'))
app.use(bodyParser.urlencoded({
  extended: false
}))

// parse application/json
app.use(bodyParser.json())
// 路由
app.use(router)

app.listen(3000, () => {
  console.log('app is runing')
})
