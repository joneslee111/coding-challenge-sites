// Finish the solution so that it sorts the passed in array of numbers. 
// If the function passes in an empty array or null/nil value 
// then it should return an empty array.

function solution(nums){
  
  if (nums == null) {
    return [];
  } else {
   let asc = nums.sort(function(a, b) {
      return a - b;
    })
   return asc;
   // console.log(asc)
  }
}
  