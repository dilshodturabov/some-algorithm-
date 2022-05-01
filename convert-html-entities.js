/*
Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

*/

function convertHTML(str) {
    str = str.replace(/[&<>"']/g, repeatEnt)
    return str;
}

function repeatEnt(ent) {
    if (ent === '&')
        return '&amp;'
    if (ent === '<')
        return '&lt;'
    if (ent === '>')
        return '&gt;'
    if (ent === '"')
        return '&quot;'
    if (ent === "'")
        return '&apos;'
}

console.log(convertHTML("Dolce & Gabbana"));

function convertHTML(str) {
    let temp = str.split('');
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] === '&')
            temp[i] = '&amp;';
        if (temp[i] === '<')
            temp[i] = '&lt;';
        if (temp[i] === '>')
            temp[i] = '&gt;';
        if (temp[i] === '"')
            temp[i] = '&quot;';
        if (temp[i] === "'")
            temp[i] = '&apos;';
    }
    return temp.join('');
}

console.log(convertHTML("<>"));