// //In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. 
// If there are one or two good ideas, return 'Publish!', 
// if there are more than 2 return 'I smell a series!'. 
// If there are no good ideas, as is often the case, return 'Fail!'.

function well(x) {
  let total = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i] === 'good') {
      total++
    }
  }
  
  if (total > 0 && total < 3) {
    return "Publish!"
  } else if (total >= 3) {
    return "I smell a series!"
  } else {
    return "Fail!"
  }
//   console.log(x)
//   console.log(total)
}
