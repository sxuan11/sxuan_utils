export function map(array, callbackFn) {
  const retArr = []
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    retArr.push(callbackFn(element, i))
  }
  return retArr
}


export function filter(array, callbackFn) {
  const retArr = []
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    if (callbackFn(element, i)) {
      retArr.push(element)
    }
  }
  return retArr
}

export function reduce(array, callbackFn, initVlaue) {
  //返回的结果为初始值
  let result = initVlaue
  //遍历当前元素，调用callbackFn得到一个累加的结果
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    result = callbackFn(result, element, i)
  }
  return result
}

export function find(array, callbackFn) {
  const retArr = []
  //遍历当前元素，如果为true，返回当前元素
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    if (callbackFn(element, i)) {
      return element
    }
  }
  return undefined
}

export function findIndex(array, callbackFn) {
  const retArr = []
  //遍历当前元素，如果为true，返回当前元素
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    if (callbackFn(element, i)) {
      return i
    }
  }
  return undefined
}

export function every(array, callbackFn) {
  const retArr = []
  //遍历当前元素，调用callbackFn，一旦是false，立刻返回false
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    if (!callbackFn(element, i)) {
      return false
    }
  }
  return true
}

export function some(array, callbackFn) {
  const retArr = []
  //遍历当前元素，调用callbackFn，一旦是true，立刻返回true
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    if (!callbackFn(element, i)) {
      return true
    }
  }
  return false
}