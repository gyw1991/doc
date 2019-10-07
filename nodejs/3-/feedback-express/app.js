const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const comments = [
  {
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

app
  .engine('html', require('express-art-template'))
  .use(bodyParser.urlencoded({ extended: false }))
  .get('/', function (req, res) {
    // render方法默认加载views文件夹中的文件
    res.render('index.html', {
      comments
    })
  })
  .get('/post', function (req, res) {
    res.render('post.html')
  })
  // .get('/comment', function (req, res) {
  //   let comment = req.query
  //   comment.date = '2019-10-01'
  //   comments.push(comment)
  //   res.redirect('/')
  // })
  .post('/comment', function (req, res) {
    // console.log('post请求')
    // console.log(req.body)
    let comment = req.body
    comment.date = '2019-10-01'
    comments.push(comment)
    res.redirect('/')
  })
  .listen(3000, function () {
    console.log('app is running at port 3000')
  })
