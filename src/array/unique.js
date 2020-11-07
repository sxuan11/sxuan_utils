/**双重循环*/
export function unique1(array) {
  const arr = []
  array.forEach((item, index) => {
    if (!arr.includes(item)) {
      arr.push(item)
    }
  })
  return arr
}
export function unique2(array) {
  return Array.from(new Set(array))
}

