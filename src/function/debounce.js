/**
 * 用来返回防抖函数的工具函数
 * @param {function} callback
 * @param {number} delay
 */
export function debounce(callback, delay) {
  return function () {
    //如果上一次时间还没有处理，取消上一次
    if (callback.hasOwnProperty('timeoutId')) {
      clearTimeout(callback.timeoutId)
    }
    const args = arguments
    callback.timeoutId = setTimeout(() => {
      callback.call(this, args)
      //删除标记
      delete callback.timeoutId
    }, delay)
  }
}