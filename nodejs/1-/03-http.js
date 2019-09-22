// 引入http模块
const http = require('http')
// 创建一个server实例
const server = http.createServer()
// 监听
server.on('request', function (req, res) {
  console.log('收到请求')

  console.log(req.url)
  //res对象的中的write方法
  res.write('hello')
  res.end()
})
// 绑定端口号
server.listen(3000, function () {
  console.log('服务器启动成功')
})