function fn (callback) {
  setTimeout(() => {
    let data = 'hello'
    callback(data)
  }, 1000)
}
fn(function (data) {
  console.log(data)
})
