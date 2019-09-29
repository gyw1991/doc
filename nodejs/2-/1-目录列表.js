const fs = require('fs')
const http = require('http')
const dir = 'E:/demo/www'
const server = http.createServer()
server.on('request', function (req, res) {
  let url = req.url
  console.log(url)
  fs.readFile('./tmeplate.html', function (err, data) {
    if (err) {
      res.end('文件读取失败')
    }
    fs.readdir(dir, function (err, files) {
      if (err) {
        return console.log('文件目录不存在')
      }
      let content = ''
      files.forEach(function (item) {
        content += `
        <tr>
          <td data-value="apple/"><a class="icon dir" href="${dir}">${item}/</a></td>
          <td class="detailsColumn" data-value="0"></td>
          <td class="detailsColumn" data-value="1509589967">2017/11/2 上午10:32:47</td>
        </tr>`
      })
      let html = data.toString().replace('^_^', content)
      res.end(html)
    })
  })
})
server.listen(3000, function () {
  console.log('server is running...')
})
