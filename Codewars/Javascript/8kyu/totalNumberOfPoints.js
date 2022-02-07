// Write a function that takes such collection and 
// counts the points of our team in the championship. 
// Rules for counting points for each match:

// For example: ["3:1", "2:2", "0:1", ...]
// if x>y - 3 points
// if x<y - 0 point
// if x=y - 1 point

// code:
function points(games) {
    // your code here
    let totalPoints = 0;
    
    for (const game of games) {
      let score = game.split(":");
      if (Number(score[0]) > Number(score[1])) {
        totalPoints += 3
      } else if (Number(score[0]) === Number(score[1])) {
        totalPoints += 1
      };
        
    };
    return totalPoints;
  };
  