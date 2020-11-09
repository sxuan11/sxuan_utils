import {concat} from "./concat";
import {unique2} from "./unique";

export function mergeAndUnique (array1,array2){
  if (!Array.isArray(array1)){
    throw new Error('must be array')
  }
  if (!Array.isArray(array2)){
    throw new Error('must be array')
  }
  let arr = []
  // arr = concat(array1,array2)
  // arr = unique2(arr)
  // return arr

  arr = array1.concat(array2)
  arr = Array.from(new Set(arr))
  return arr
}


export function merge(array1 , array2){
  if (!Array.isArray(array1)){
    throw new Error('must be array')
  }
  if (!Array.isArray(array2)){
    throw new Error('must be array')
  }
  let arr = [...array1]
  for (const item of array2) {
    if(!arr.includes(item)){
      arr.push(item)
    }
  }
  return arr
}