/*
 * write a function countConstruct(target, wordBank) that
 * accepts a target string and an array of strings.
 *
 * the function should return the number of way that the target can be consturcted by
 * concatenating elements of the wordBank array.
 *
 * you may reuse elements of WordBank as many times as needed. */

const countConstructor=(target, wordBank , memo={})=>
{ 	if(target in memo) return memo[target]
	if(target === '') return 1
	
	let total = 0;
	for (let word of wordBank)
	{
		if(target.substring(0,word.length)===word)
		{
			const wordResult = target.replace(word,'')
			//console.log(target, word , wordResult)
			
			const total2 = countConstructor(wordResult,wordBank,memo)
			total +=  total2
			memo[target]=total
		}

	
	}
	return total
}
console.log(countConstructor('abcde',['a','b','c','d','e','abc','de']))
console.log(countConstructor('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad',['ad','aaa','aa','aaaaa','aaaaaa']))
