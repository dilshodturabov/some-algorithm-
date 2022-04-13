function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort((a, b) => a - b);

    for (let number = 0; number <= arr.length; number++) {
        if (arr[number] === num)
            return number;
    }
}

console.log(getIndexToIns([40, 60], 50));