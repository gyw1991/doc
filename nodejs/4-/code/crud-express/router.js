const express = require('express')
const fs = require('fs')
const router = express.Router()
const Student = require('./student')

router.get('/', function (req, res) {
  // fs.readFile('db.json', 'utf8', function (error, data) {
  //   if (error) {
  //     return res.status(500).send('server error')
  //   }
  //   res.render('index.html', {
  //     students: JSON.parse(data).students
  //   })
  // })
  Student.find(function (error, students) {
    if (error) {
      return res.status(500).send('server error')
    }
    res.render('index.html', {
      students
    })
  })
})

// 添加新成员-get
router.get('/new', function (req, res) {
  res.render('new.html')
})

// 添加新成员-get
router.post('/new', function (req, res) {
  console.log(req.body)
  // 1.拿到表单数据
  let info = req.body
  // 2.存储到db.json中
  Student.add(info, function (error) {
    if (error) {
      res.send('server error')
    }
    res.redirect('/')
  })
})

// 编辑信息-get
router.get('/edit', (req, res) => {
  // 1.拿到id调用方法查询到对应数据
  let id = parseInt(req.query.id)
  Student.findById(id, function (error, obj) {
    if (error) {
      return res.send('server error')
    }
    // res.send(obj)
    res.render('edit.html', {
      student: obj
    })
  })
})

// 编辑信息-post
router.post('/edit', (req, res) => {
  console.log(req.body)
  Student.updateById(req.body, function (error) {
    if (error) {
      return res.send('server error')
    }
    res.redirect('/')
  })
})

// 删除信息
router.get('/delete', (req, res) => {
  console.log(req.query)
  Student.deleteById(req.query.id, function (error) {
    if (error) {
      res.send('server error')
    }
    res.redirect('/')
  })
})

module.exports = router
