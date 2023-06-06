export function bowlingGame(rolls) {
  let frame = 0;
  let score = 0;
  rolls.forEach(function (elem, index) {
    if (frame < 10) {
      if (rolls[index] === "X") {
        score +=
          pinScore(index, rolls) +
          pinScore(index + 1, rolls) +
          pinScore(index + 2, rolls);
        frame += 1;
      } else if (rolls[index] === "/") {
        score += pinScore(index, rolls) + pinScore(index + 1, rolls);
        frame += 0.5;
      } else {
        score += pinScore(index, rolls);
        frame += 0.5;
      }
    }
  });
  return score;
}
function pinScore(index, rolls) {
  if (rolls[index] === "-") return 0;
  else if (rolls[index] === "X") return 10;
  else if (rolls[index] === "/") return 10 - pinScore(index - 1, rolls);
  else return rolls[index];
}
