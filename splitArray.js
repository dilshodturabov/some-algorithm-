function splitArray(arr, limit) {
    let resArr = [];
    for (let i = 0; i < arr.length; i += limit) {
        resArr.push(arr.slice(i, i + limit));
    }
    return resArr;
}
const res = splitArray([1, 5, 6, 7, 8], 2); //expected output [[1,5],[6,7],[8]];

console.log(res);