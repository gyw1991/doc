const http = require('http')

http.createServer().on('request', function (req, res) {
  console.log(`请求路径${req.url}`)
  if (req.url === '/index') {
    // res.end('index')
    res.end(req.url)
  } else if (req.url === '/login') {
    res.end(req.url)
  } else {
    res.end('404 Not found')
  }
}).listen(80, function () {
  console.log('服务器启动...')
})