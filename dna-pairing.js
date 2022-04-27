/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/






function pairElement(str) {
  let totalDNA = "";
  let resArr = [];

  for (let i = 0; i < str.length; i+=1){
    if(str[i]==="A"){
      totalDNA += str[i]+"T";
    } else if(str[i]==="T"){
      totalDNA += str[i]+"A";
    } else if(str[i]==="C"){
      totalDNA += str[i]+"G";
    } else if(str[i]==="G"){
      totalDNA += str[i]+"C";
    }
  }

  let splitedStr = totalDNA.split('');
  
  arrayInsider(splitedStr, resArr);

return resArr;

}




function arrayInsider(splitedStr, resArr){
  for(let i = 0; i < splitedStr.length; i+=2)
      resArr.push(splitedStr.slice(i, i+2));
}

console.log(pairElement("ATCGA"));