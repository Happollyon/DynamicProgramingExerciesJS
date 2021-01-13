/*
 * Write a function bestSum(targetSum,numbers) that takes in a targetSum and 
 * an array of numbers as arguments.
 *
 * The function should return an array containing the shortest
 * combination of numbers that add up to exactly the targetSum.
 *
 * If there is any tie you may return any shortest sum.*/

const bestSum=(targetSum,numbers,memo={})=>
{ 	if (targetSum in memo) return memo[targetSum]
	if(targetSum === 0) return []
	if(targetSum<0) return null
	let shortestCombination = null

	for (let num of numbers)
	{
		const reminder = targetSum - num;
	
		const reminderResult = bestSum(reminder, numbers,memo)
		if(reminderResult!==null)
		{
			const combination = [...reminderResult, num]
			if (shortestCombination===null||combination.length < shortestCombination.length){
			shortestCombination=combination
			}
		}
	
	}
	memo[targetSum] = shortestCombination
	return shortestCombination
		
}

console.log(bestSum(7,[1,2,5]))
console.log(bestSum(100,[1,2,5,25]))

