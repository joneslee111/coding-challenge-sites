// Given an array of integers as strings and numbers, 
// return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumMix(x){

  let news = x.map(Number)
  // console.log(news)
  let total = 0
  
  for (let i = 0; i < news.length; i++) {
    total += news[i];
    
  }
  return total;
  // console.log(total)
}
