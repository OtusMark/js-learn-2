// Calculate factorial
const factorial = (n) => {
    return (n !== 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial(5))

// Calculate Fibonacci
const fibonacci = (n) => {
    return (n <= 1) ? n : fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(7))

// Calculate sum of n
const sum = (n) => {
    return (n === 1) ? 1 : n + sum(n - 1)
}

console.log(sum(5))