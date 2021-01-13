/* 
 * write a function allConstruct(target, wordBacnk) 
 * that accepts a target string and an array of strings.
 * The function should return a 2D array containing all of the ways the target 
 * by concatenating elements of the wordBank array
 * each element of the should represent on combination that constructs the target.
 *
 * */

const allConstruct = (target, wordBank, memo={})=>
{
	if(target==='') return [[]]
	if(target in memo) return memo[target]
	
	const FinalArray=[]
	for (let word of wordBank)
	{
		if(target.substring(0,word.length)===word)
		{		
			const wordResult = target.replace(word,'')
			const result = allConstruct(wordResult, wordBank,memo)	
			// for each array in the result variable the WORD will be added at the begning 
			
			const tempArray=result.map(suffix=>[word,...suffix])
			
		    	// then, all the diferent arrays are pushed into FinalArray wich is reurned at the end.
			  FinalArray.push(...tempArray)
			
		
		}

	} memo[target] = FinalArray
	return FinalArray
}

console.log(allConstruct('abcdef',['a','b','c','d','e','f','abc','def']))
console.log(allConstruct('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',['a','aa','aaa']))
