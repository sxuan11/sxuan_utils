export function apply(fun, obj, args) {
  if (obj === undefined || obj === null) {
    obj = window
  }
  //给obj添加一个方法
  obj.tempFn = fun
  //执行原方法，并带入参数
  const result = obj.tempFn(...args)
  //参数新对象里绑定的方法
  delete obj.tempFn
  //返回执行后的结果
  return result
}