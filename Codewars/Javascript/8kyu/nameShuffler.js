// Write a function that returns a string in which firstname is swapped with last name.

function nameShuffler(str){
  let split = str.split(' ');
  // console.log(split);
  let flip = split.reverse();
  // console.log(flip);
  let join = flip.join(' ');
  // console.log(join);
  return join;
  
}
