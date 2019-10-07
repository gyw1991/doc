const fs = require('fs')
const path = './db.json'

// 查询
exports.find = function (callback) {
  fs.readFile(path, (error, data) => {
    if (error) {
      return callback(error)
    }
    callback(null, JSON.parse(data.toString()).students)
  })
}

// 添加保存
exports.add = function (obj, callback) {
  fs.readFile(path, 'utf8', function (error, data) {
    if (error) {
      return callback(error)
    }
    let students = JSON.parse(data).students
    // console.log(students)
    let student = obj
    student.id = students[students.length - 1].id + 1
    console.log(student)
    students.unshift(student)
    fs.writeFile(path, JSON.stringify({ students }), function (error) {
      if (error) {
        return callback(error)
      }
      return callback(null)
    })
  })

}

// 根据id查找对应的信息
exports.findById = function (id, callback) {
  fs.readFile(path, function (error, data) {
    if (error) {
      callback(error)
    }
    let students = JSON.parse(data.toString()).students
    let res = students.find(item => item.id === id)
    callback(null, res)
  })
}

// 更新修改的信息
exports.updateById = function (obj, callback) {
  let id = parseInt(obj.id)
  fs.readFile(path, function (error, data) {
    if (error) {
      return callback(error)
    }
    let students = JSON.parse(data.toString()).students
    obj.id = parseInt(obj.id)
    // 找到需要需要修改的数据对象
    let stu = students.find(item => item.id === id)
    // 替换数据
    for (let key in obj) {
      stu[key] = obj[key]
    }
    let dbStr = JSON.stringify({
      students
    })

    // 写入数据
    fs.writeFile(path, dbStr, function (error) {
      if (error) {
        return callback(error)
      }
      callback(null)
    })
  })

}

// 删除
exports.deleteById = function (id, callback) {
  fs.readFile(path, function (error, data) {
    if (error) {
      return callback(error)
    }
    let students = JSON.parse(data.toString()).students

    // 根据id找到要删除的数据对象
    let index = students.findIndex(item => item.id === parseInt(id))
    students.splice(index, 1)

    // update db.json
    let dbStr = JSON.stringify({
      students
    })

    fs.writeFile(path, dbStr, function (error) {
      if (error) {
        return callback(error)
      }
      callback(null)
    })
  })
}