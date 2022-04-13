function reverseString(str) {
  let splitedStr = str.split('');
  let result = '';
  for (let i = splitedStr.length-1; i >= 0; i--)  {
    let res = splitedStr[i];
    result += res;
  }
  return result;
}
let res = reverseString("hello");
console.log(res);