// Given an integral number of watermelons, 
// check whether Pete and Billy can divide the melons so that each of them gets an even amount.
// ...each of them should get a part of positive weight.

function divide(weight) {
  
  if (weight % 2 == 1 || weight === 2)
    return false;
  else
    return true;
}
