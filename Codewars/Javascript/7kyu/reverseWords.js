// Complete the function that accepts a string parameter, 
// and reverses each word in the string. 
// All spaces in the string should be retained.

function reverseWords(str) {
    
  let a = str.split('');
  // console.log(a);
  let b = a.reverse();
  // console.log(b);
  let c = b.join('');
  // console.log(c);
  let d = c.split(' ');
  // console.log(d);
  let e = d.reverse();
  // console.log(e);
  let f = e.join(' ');
  // console.log(f);
  return f;
}
