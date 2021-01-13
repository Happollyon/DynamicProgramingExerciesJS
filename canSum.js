/*
 * Write a function canSum(targetSum,numbers)
 *that takes in a targetSum and an array of number.s
  the function should return a boolean indcating  t or F if 
  it  is possible to generate the targetSum using the numbers of the array. 
 * */

const canSum = (targetSum,numbers) =>{
        if (targetSum === 0 ) return true
	if (targetSum<0) return false
	for( let num of numbers)
	{
		const remainder = targetSum - num
		if(canSum(remainder,numbers)===true){
			return true
		}
	}
	return false
}

console.log(canSum(7,[2,3]))
console.log(canSum(7,[5,3,4,7]))
console.log(canSum(7,[2,4]))
console.log(canSum(8,[2,3,5]))
//console.log(canSum(300,[7,14]))
// n is size of array and m is target sum
// time O(n^m) ans space O(m)


const canSum2 = (targetSum,numbers,memo={}) =>{
	if (targetSum in memo) return memo[targetSum]
	if (targetSum === 0 ) return true
	if (targetSum<0) return false
	

	for( let num of numbers)
	{
		const remainder = targetSum - num
		if(canSum2(remainder,numbers,memo)===true){
			memo[targetSum] = true;
			return true
		}
	}
	memo[targetSum] = false
	return false
}

//console.log(canSum(7,[2,3]))
//console.log(canSum(7,[5,3,4,7]))
//console.log(canSum(7,[2,4]))
//console.log(canSum(8,[2,3,5]))
console.log('cansum2')
console.log(canSum2(300,[7,14]))
