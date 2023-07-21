export function bowlingGame(rolls: string[]): number {
  let frame = 0;
  let score = 0;
  for (let i = 0; i < rolls.length; i++) {
    if (frame >= 10) break;

    if (rolls[i] === "X") {
      // strike
      score += 10 + pinScore(rolls[i + 1]) + pinScore(rolls[i + 2]);
      frame++;
    } else if (rolls[i + 1] === "/") {
      // spare
      score += 10 + (frame < 9 ? pinScore(rolls[i + 2]) : 0);
      frame++;
      i++; // skip next roll
    } else {
      // open frame
      score += pinScore(rolls[i]) + pinScore(rolls[i + 1]);
      frame++;
      i++; // skip next roll
    }
  }
  return score;
}

function pinScore(roll: string): number {
  if (roll === "-" || roll === "/") return 0;
  else if (roll === "X") return 10;
  else return parseInt(roll);
}
