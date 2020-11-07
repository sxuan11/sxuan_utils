import { reduce } from './declares'
import { concat } from './concat'

export function flattenDeep2(array){
  return reduce(array,(pre,item)=>{
    if(Array.isArray(item)){
      pre = concat(pre,flattenDeep(item))
    }else {
      pre.push(item)
    }
    return pre
  },[])
}

export function flattenDeep (array){
  let arr
  arr = [].concat(...array)
  while (arr.some(item=>Array.isArray(item))){
    arr = [].concat(...arr)
  }
  return arr
}
