//1.1 - v
// function valueToRemove(rest, arr, i) {
//     for (let j of rest)
//         if (arr[i] === j)
//             delete arr[i];
// }

// function destroyer(arr, ...rest) {
//     for (let i = 0; i <= arr.length; i++)
//         valueToRemove(rest, arr, i);

//     return arr.filter(value => value !== null)
// }

// console.log(destroyer([1, 2, 3, 1, 2, 3], 1, 3));

//1.2 - v
// function destroyer(arr) {
//     let valuesToRemove = Object.values(arguments).slice(1);
//     for (let i = 0; i < arr.length; i++)
//         valsToRemove(valuesToRemove, i, arr);

//     return arr.filter(space => space !== null);
// }

// function valsToRemove(value, i, arr) {
//     for (let j of value)
//         if (arr[i] === j)
//             delete arr[i];
// }


// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));