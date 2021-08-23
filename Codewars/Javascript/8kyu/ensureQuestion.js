// Given a string, write a function that returns the string with a question mark ("?") 
// appends to the end, unless the original string ends with a question mark, 
// in which case, returns the original string.

function ensureQuestion(s) {
  let qm = '?'
  let last = s.slice(-1);
  // console.log(last);
  if (last === '?') {
    return s;
  } else {
    let join = s.concat(qm);
    // console.log(join);
    return news;
  }
}