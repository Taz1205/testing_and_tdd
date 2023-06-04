import {bowlingGame} from "./bowling_game.js";
  
  describe("returns scores for a bowling game based on the rolls input", () => {
    test("returns score 0 when all 20 rolls are misses(gutter game)", () => {
      expect(bowlingGame("--------------------")).toEqual(0);
    });
    test("returns score 300 when all 12 rolls are strikes", () => {
      expect(bowlingGame("XXXXXXXXXXXX")).toEqual(300);
    });
    test("returns score 150 when all rolls are spares", () => {
      expect(bowlingGame("5/5/5/5/5/5/5/5/5/5/5")).toEqual(150);
    });
    test("returns score 90 when 10 rolls are 9s and 10 misses", () => {
      expect(bowlingGame("9-9-9-9-9-9-9-9-9-9-")).toEqual(90);
    });
    test("returns score 93 when all rolls 9 or less", () => {
      expect(bowlingGame("12345678912345678912")).toEqual(93);
    });
    test("returns score 79  with a mix of pins knocked down and misses", () => {
      expect(bowlingGame("77-9-8-886-6---81119")).toEqual(79);
    });
    test("returns score 129 with a mix of spares and misses", () => {
      expect(bowlingGame("5/9-5/8--85/9-185/5/5")).toEqual(129);
    });
     test("returns score 132 with a mix of spares and misses", () => {
      expect(bowlingGame("7/9-9/81111/9-2/4/8/5")).toEqual(132);
    });
    test("returns score 82 with a mix of spares and misses", () => {
      expect(bowlingGame("587654321--81555115/5")).toEqual(82);
    }); 
    /*test("returns score 155 with a mix of strikes, spares and misses", () => {
      expect(bowlingGame("X9-5/8-X-8/9-X8")).toEqual(155);
    });*/ 
  });



 