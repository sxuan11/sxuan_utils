export function different(array1,array2){
  if (!Array.isArray(array1)){
    throw new Error('must be array')
  }
  if (!Array.isArray(array2)){
    throw new Error('must be array')
  }
  let arr = []
  if(array1.length === 0){
    return arr
  }if(array2.length === 0){
    return [...array1]
  }
  array1.forEach((item)=>{
    if(!array2.includes(item)){
      arr.push(item)
    }
  })
  return arr
}

export function different1(array1,array2){
  if (!Array.isArray(array1)){
    throw new Error('must be array')
  }
  if (!Array.isArray(array2)){
    throw new Error('must be array')
  }
  let arr = []
  if(array1.length === 0){
    return arr
  }if(array2.length === 0){
    return [...array1]
  }
  for (let item of array1){
    for (let item2 of array2){
      if(item !== item2 ){
        arr.push(item2)
      }
    }
  }
  return arr
}