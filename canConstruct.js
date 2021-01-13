/*Write a function canConstruct(target,wordBank) that
 * accepts target string and an array of strings.
 *
 * the function should return a boolean indicating whether or not 
 * target can be constructed by concatenating the elements of the wordBank
 * 
 * You may use the elements from the wordbank as many times as needed.*/

const canConstruct = (target,wordBank,memo={}) => 
{	if(target in memo) return memo[target]
	if (target === '') return true
	
	// the for loop creates the branches of the three
	for(let word of wordBank)
	{	
		if(target.substring(0,word.length) === word)
			{       
				const targetResult = target.replace(word,'')
				memo[target]=targetResult				
				if(canConstruct(targetResult,wordBank,memo)===true)
				{
					return true
				}
			}
	}
	return false
}
console.log(canConstruct('skateboard',['bo','rd','ate','t','ska','sk','boar']))
console.log(canConstruct('',['ab','abc','cd','ef','abcd']))
console.log(canConstruct('abcdef',['ab','abc','cd','def','abcd']))
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',['e','ee','eee','eeee','eeeee']))
/*m is the target.length
 * n is the wordBank.length
 * the height of the three is m. therefore, O(m^2) is space complexity
 * o(n^m) time complexity. which is the branching factor to the hight power. 
 *
 *
 * after memoization time complexity is O(n*m^2)*/

