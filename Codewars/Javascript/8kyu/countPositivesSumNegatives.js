// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
// If the input array is empty or null, return an empty array.

function countPositivesSumNegatives(input) {
  // check to see if array is null or empty
  // return an empty array if so
  if (input == null || input < 1) {
    return [];
  };
  
  // set an empty array
  let pos = [];
  // set sum to 0
  let sum = 0;
  
  // set a for loop to check if input is greater than 0
  for (let i = 0; i < input.length; i++) {
    // if greater than 0, push to pos array
    if(input[i] > 0)
      pos.push(input[i]);
    // if not, add to sum
    else
      sum += input[i];
  };  
                
  // return the two variables in an array
  return [pos.length, sum];
}
