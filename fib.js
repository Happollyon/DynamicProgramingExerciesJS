/* Write a function fib(n) that takes in a number as an argument. 
 * the function should return the n-th number of the fibonacci sequence.
 *
 * The first and second number of the sequenc is 1.
 * to generate the next number of the sequence, we sum the previous two.
 * 1,1,2,3,5,8
 *
 * USE RECURSION TO SOLVE THIS PROBLEM
 * */

const fib = (n) =>{
	if(n<=2) return 1
	return fib(n-1) + fib(n-2)
}

console.log(fib(7))
console.log(fib(2))
console.log(fib(1))
console.log(fib(10))
/*
 * this code works okay unless you ask for a big N.
 *
 * If you ask a big N the code will take a long time to retur 
 * an answer.
 *
 * time complexite is 2^N and N space
 * O(2^N) its not a nice time complexity
 * fib(50) is aprox 2^50 steps which is equal to 1.12e+15  	
 *
 *
 *
 * */
//console.log(fib(55))

/*
* memoization
* js object, keys will be arg to fn, value will be return value
*
*with memoization the time and space complexity changes to O(n)
*/

const fib2 = (n, memo = {}) =>{
	if (n in memo) return memo[n]
	if(n<=2) return 1
	memo[n]= fib2(n-1,memo) + fib2(n-2,memo)
	return memo[n]
}

console.log(fib2(7))
console.log(fib2(2))
console.log(fib2(1))
console.log(fib2(10))
console.log(fib2(50))
