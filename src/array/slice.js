export function slice (array,_begin,_end){
  const arr = []
  let begin = _begin
  let end = _end

  //如果原数组为空，返回空数组
  if(array.length===0){
    return arr
  }

  //如果没传两个参数就返回原数组
  if(!begin && !end){
    return array
  }

  //如果只有begin ，就让
  if(begin && !end){
    end = array.length
  }

  //如果end小于了begin
  if(end<begin){
    throw (new Error('begin must 小于 end'))
  }

  //如果begin大于了数组长度，返回空
  if(begin>array.length){
    return arr
  }

  if(begin < 0){
    begin = 0
  }

  if(end<0){
    return arr
  }

  if(end>array.length){
    end = array.length
  }

  for (let i = begin; i < end; i++) {
    arr.push(array[i])
  }
  return arr
}