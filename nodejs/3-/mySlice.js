// 补充：伪书组转数组的原理实现
Array.prototype.mySlice = function () {
  let start = 0
  let end = this.length
  if (arguments.length === 1) {
    start = arguments[0]
  } else if (arguments.length === 2) {
    start = arguments[0]
    end = arguments[1]
  }
  // 遍历插入
  let temp = []
  for (let i = start; i < end; i++) {
    // this[i] =
    temp.push(this[i])
  }
  return temp
}
let foo = { 0: 'a', 1: 'b', 2: 'c', length: 3 }
// 将slice方法中的this指向指定伪数组对象
console.log([].mySlice.call(foo))


