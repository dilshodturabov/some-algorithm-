/*
Sum All Primes

A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

*/
function showPrimeNumber(num) {
    let isPrime;
    let sumAllPrime = [];
    for (let number = 2; number <= num; number++) {
        isPrime = true;
        for (let j = 2; j < number; j++) {
            if (number % j === 0)
                isPrime = false;
        }
        if (isPrime) {
            sumAllPrime.push(number);
        }
    }
    return sumAllPrime.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    })
}

console.log(showPrimeNumber(10));