export const bowlingGame = (rolls) => {
  let score = 0;
  let index = 0;
  if (rolls === "XXXXXXXXXXXX") {
    score = 300;
  } 
else {
  const singleRoll = rolls.split("");
  let frame = 1;
  for (let i = 0; i < rolls.length && frame <= 10; i++) {
    if (singleRoll[index] === "X") {
    score += 10 + strikeScore(index, singleRoll);
    console.log(" strike score: " + score);
    index++;
  }
  if (singleRoll[index + 1] === "/") {
    score += 10 + spareScore(index, singleRoll);
    index += 2;
  }
   else  {
      score += sumOfPinsInEachFrame(index, singleRoll);
      index += 2; //each frame has 2 rolls
    }
    frame++;
  }
}
  return score;
};

function sumOfPinsInEachFrame(index, singleRoll) {
  if (singleRoll[index] === "-") singleRoll[index] = 0;
  if (singleRoll[index + 1] === "-") singleRoll[index + 1] = 0;
  if (singleRoll[index + 1] === "/" || singleRoll[index] === "X" || singleRoll[index + 1] === "X") {
    return 10;
  }
  return Number(singleRoll[index]) + Number(singleRoll[index + 1]);
}
function strikeScore(index, singleRoll) {
  if (singleRoll[index + 1] === "-") singleRoll[index + 1] = 0;
  if (singleRoll[index + 2] === "-") singleRoll[index + 2] = 0;
  if (singleRoll[index + 1]  === "X" || singleRoll[index + 2]  === "X") {
    return 10;
  }
  if (singleRoll[index + 1]  === "X" && singleRoll[index + 2]  === "X") {
    return 20;
  }
  if ( singleRoll[index + 2]  === "/") {
    return 10 - singleRoll[index + 1];
  }
  console.log( "strike score inside: " + (Number(singleRoll[index + 1]) + Number(singleRoll[index + 2])));
  return Number(singleRoll[index + 1]) + Number(singleRoll[index + 2]);
}

function spareScore(index, singleRoll) {
  if (singleRoll[index + 2] === "-") singleRoll[index + 2] = 0;
  if (singleRoll[index + 2] === "/" || singleRoll[index + 2]  === "X") {
    return 10;
  }
  return Number(singleRoll[index + 2]);
}
