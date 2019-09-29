const fs = require('fs')
const http = require('http')
const template = require('art-template')
const url = require('url')

const comments = [
  {
    name: 'jack',
    msg: '牛逼',
    date:'2018-11-20'
  },
  {
    name: 'rose',
    msg: '牛逼',
    date:'2018-11-20'
  },
  {
    name: 'catherine',
    msg: '牛逼',
    date:'2018-11-20'
  }
]

http.createServer(function (req, res) {
  let parseObj = url.parse(req.url, true)
  let pathName = parseObj.pathname
  // console.log(pathName)
  if (pathName === '/') {
    fs.readFile('./views/index.html', function (err, data) {
      if (err) {
        return res.end('404')
      }
      let html = template.render(data.toString(), comments)
      res.end(html)
    })
  } else if (pathName === '/post') {
    fs.readFile('./views/post.html', function (err, data) {
      if (err) {
        return console.log('404 not found')
      }
      res.end(data)
    })
  } else if (pathName === '/comment') {
    let comment = parseObj.query
    comment.date = '2019-11-20'
    comments.unshift(comment)
    // 重定向
    res.statusCode = 302
    res.setHeader('Location', '/')
    res.end()
  } else {
    fs.readFile('./views' + pathName, function (err, data) {
      if (err) {
        res.end('404')
      }

      res.end(data)
    })
  }
}).listen(3000, function () {
  console.log('server is running...')
})
