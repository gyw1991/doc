let template = require('art-template')
const http = require('http')
const fs = require('fs')

const server = http.createServer()
let dir = 'E:/demo/www'
server.on('request', function (req, res) {
  fs.readFile('./tpl.html', function (err, data) {
    if (err) {
      return console.log('读取文件失败')
    }
    fs.readdir(dir, function (err, files) {
      if (err) {
        return console.log('目录不存在')
      }
      let html = template.render(data.toString(), files)
      res.end(html)
    })
  })
})
server.listen(3000, function () {
  console.log('服务器运行中...')
})
