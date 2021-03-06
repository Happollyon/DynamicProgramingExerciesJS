/*
 *Say that you are a traveler on a 2d grid. You begin in the top
 let corner and your goal is to travel to the bottom-right corner.
 you may only move down or right.
 in how many way can you travel to the goal on a grid with dimentions m*n?


 write a function gridTraveler(m,n) tht calculates this.
 * */

const gridTraveler=(m,n)=>
{
	if (m===1 && n===1) return 1
	if ( m===0 || n===0) return 0

	return gridTraveler(m-1,n) + gridTraveler(m , n-1)

}
console.log(gridTraveler(1,1))
console.log(gridTraveler(2,3))
//console.log(gridTraveler(18,18))
/*
 * O(2^m+n) time
 * O(m+n)   space	
 * 
 *
 */
 const gridTraveler2=(m,n,memo={})=>
 {  const key = m + "," + n
    if (key in memo) return memo[key]	
    if (m===1 && n===1) return 1
    if ( m===0 || n===0) return 0
    memo[key] = gridTraveler2(m-1,n, memo) + gridTraveler2(m , n-1,memo)
	return memo[key]	
 }
console.log(gridTraveler2(1,1))
console.log(gridTraveler2(2,3))
console.log(gridTraveler2(18,18))

/*
 *O(m*n) time and space with the new algorithm 
 *
 * */

