// Remove an exclamation mark from the end of a string. 

// code:
function remove (string) {
    //coding and coding....
    
    if (string.slice(-1) === '!') {
      let newString = string.slice(0, -1);
      return newString;
    } else {
      return string;
    };
  };