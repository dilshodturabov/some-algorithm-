function sumAll(arr) {
  if(arr.length > 2)
    return "only two number"
  
  let maxNum = 0;
  for(let i = 0; i <= arr.length; i++)
    if(maxNum < arr[i])
      maxNum = arr[i]

  let minNum = Math.min(...arr)

  let result = 0
  let i = minNum
  while(i <= maxNum){
    result+=i
    i++
  }

  return result
}

console.log(sumAll([1,4]));