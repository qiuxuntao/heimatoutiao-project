// 封装本地存储操作模块

// 获取数据
export const getItem = name => {
  const data = window.localStorage.getItem(name)
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}

// 存储数据
export const setItem = (name, value) => {
  // 将数组、对象类型的数据转换为JSON 格式字符串进行存储
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(name, value)
}

// 删除数据
export const removeItem = name => {
  window.localStorage.removeItem(name)
}
