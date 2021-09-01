// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.

function getAverage(marks) {
    let total = 0
    
    for (let i = 0; i < marks.length; i++) {
      total += marks[i];
    };
    let rounded = Math.floor(total / marks.length);
    return rounded;
  }