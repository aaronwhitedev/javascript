const fibonacci = (n: number) => {
	const fib = [0, 1];
	// Start loop at 2 since indexes of 0 and 1 exist
	// iterate until we have an element in the array
	for (let i = 2; i < n; i++) {
		// Populate iteration using previous two numbers
		fib[i] = fib[i - 1] + fib[i - 2];
	}

	return fib;
};

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));
