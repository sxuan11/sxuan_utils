export function concat (array , ...args){
  const arr = [...array]
  //遍历args
  args.forEach((item)=>{
    if(Array.isArray(item)){
      arr.push(...item)
    }else {
      arr.push(item)
    }
  })
  return arr
}