// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {

    let myArr = String(n).split('').reverse().map((n)=> {
      return Number(n)
    });
    
    return myArr
  }
  
  