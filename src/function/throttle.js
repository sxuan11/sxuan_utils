/**
 * 用来返回节流函数的工具函数
 * @param {function} callback
 * @param {number} delay
 */
export function throttle(callback, delay) {
  let pre = 0 //为0 就是可以让第一次点击就调用
  return function () { //this 是发生事件的标签
    //记录当前时间
    const args = arguments
    const current = Date.now()
    if (current - pre > delay) {//只有离上一次调用callback的时间差大于delay
      callback.call(this, args)
      pre = current
    }

  }

}