const http = require('http')

let server = http.createServer()

server.on('request', function (req, res) {
  // 用来告知对发送的数据类型
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.end('你好')
})

server.listen(3000, function () {
  console.log('server running...')
})
