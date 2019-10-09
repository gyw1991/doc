// find  & findIndex 原理

// find-接受一个方法作为参数，方法内部返回一个条件
// 遍历数组中的所有元素，执行条件函数

let users = [{
  id: 1,
  name: 'jack'
},
{
  id: 2,
  name: 'rose'
},
{
  id: 3,
  name: 'slow'
}
]

// Array.prototype.myFind = function (fn) {
//   for (let i = 0; i < this.length; i++) {
//     if (fn(this[i], i)) {
//       return this[i]
//     }
//   }
// }

// Array.prototype.myFindIndex = function (fn) {
//   for (let i = 0; i < this.length; i++) {
//     if (fn(this[i], i)) {
//       return i
//     }
//   }
// }

let res = users.myFind(item => item.id === 3)

let index = users.myFindIndex(item => item.id === 1)

console.log(index)
console.log(res)