export function chunk (array,value){
  if (!value){
    throw new Error('must be have a value')
  }
  if(value < 0){
    throw new Error('value must be 正数')
  }
  let arr = []
  let temArr = []
  for (let i = 0; i < array.length ; i++) {
    if(temArr.length === value){
      arr.push(temArr)
      temArr =[]
      temArr.push(array[i])
      if(i === (array.length-1)){
        arr.push(temArr)
      }
    }else{
      temArr.push(array[i])
      if(i === (array.length-1)){
        arr.push(temArr)
      }
    }
  }
  return arr
}