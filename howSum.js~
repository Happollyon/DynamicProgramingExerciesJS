/*
 *Write a funtion 'howSum(targetSum,numbers)'
 that take in a targetSum and an array of numbers.

 the function should return an array containing any combination
 of elements that add up to exactly the target Sum. If there is no
 combination that adds up to the targetSum, then return Null.
 * */


const howSum = (targetSum,numbers,memo={}) =>
{
	if (targetSum === 0) return []
	if (targetSum < 0 ) return null
	if (targetSum in memo) return memo[targetSum]
	
	for (let num of numbers)	
	{
		const reminder = targetSum - num
		const reminderResult = howSum(reminder, numbers,memo)
		
		if( reminderResult !== null )
		{
		memo[targetSum]=[...reminderResult,num]
			return [...reminderResult,num]
		}
	}
	memo[targetSum]=null
	return null
}

console.log(howSum(300,[7,50,26,80,90,100,200]))
console.log(howSum(300,[7,14]))
console.log(howSum(9,[2,7]))
console.log(howSum(8,[2,3]))
console.log(howSum(300,[7,14]))
