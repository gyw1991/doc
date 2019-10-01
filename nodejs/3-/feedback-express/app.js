const express = require('express')
const app = express()
const fs = require('fs')
const template = require('art-template')

const comments = [{
  name: 'jack',
  msg: '牛逼',
  date: '2018-11-20'
},
{
  name: 'rose',
  msg: '牛逼',
  date: '2018-11-20'
},
{
  name: 'catherine',
  msg: '牛逼',
  date: '2018-11-20'
}
]

app.get('/', function (req, res) {
  fs.readFile('./views/index.html', function (err, data) {
    if (err) {
      return res.end('404')
    }
    let html = template.render(data.toString(), comments)
    res.send(html)
  })
})

app.get('/post', function (req, res) {
  fs.readFile('./views/post.html', function (err, data) {
    if (err) {
      return res.end('404')
    }
    res.end(data)
  })
})

app.get('/comment', function (req, res) {
  console.log(req.query)
  let comment = req.query
  comment.date = '2019-10-01'
  comments.push(comment)
  res.statusCode = 302
  res.setHeader('Location', '/')
  res.end()
})

app.listen(3000, function () {
  console.log('app is running at port 3000')
})
