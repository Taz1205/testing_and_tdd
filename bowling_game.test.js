import {bowlingGame} from "./bowling_game.js";
  
  describe("returns scores for a bowling game based on the rolls input", () => {
    test("returns score 0 when all 20 rolls are misses(gutter game)", () => {
      expect(bowlingGame(["-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-","-"])).toEqual(0);
    });
    test("returns score 300 when all 12 rolls are strikes", () => {
      expect(bowlingGame(["X","X","X", "X","X", "X", "X", "X", "X", "X","X","X"])).toEqual(300);
    });
    test("returns score 150 when all rolls are spares", () => {
      expect(bowlingGame([5,"/",5,"/",5,"/",5,"/",5,"/",5,"/",5,"/",5,"/",5,"/",5,"/",5])).toEqual(150);
    });
    test("returns score 90 when 10 rolls are 9s and 10 misses", () => {
      expect(bowlingGame([9,"-", 9,"-", 9,"-", 9,"-", 9,"-", 9,"-", 9,"-", 9,"-", 9,"-", 9,"-"])).toEqual(90);
    });
    test("returns score 61 when no spares or no strikes", () => {
      expect(bowlingGame([9,1, 3,5, "-","-", 4,2, 5,"-", 2,3, 6,3, 1,2, 7,1, 3,4])).toEqual(61);
    });
    test("returns score 20 when all pins are one", () => {
      expect(bowlingGame([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])).toEqual(20);
    });
    test("returns score 96 when there are mix of misses, strikes and spares", () => {
      expect(bowlingGame([9,"/", 3,5, "-","-", "X", 5,"-", 2,3, 6,3, 1,2, 7,1, "X","X","X"])).toEqual(96);
    });
    test("returns score 80 when there are mix of strikes and spares", () => {
      expect(bowlingGame([3,1, "X", 1,2, 1, "/", 3,"/", 1,1, 1,4, 5,3, 1,2, 6,"/",8])).toEqual(80);
    });
    test("returns score 91 when there are mix of strikes and spares", () => {
      expect(bowlingGame([2,1, 8,1, 3,5, "X", 2,6, 5,1, 4,5, 1,3, 5,1, "X",6,"/"])).toEqual(91);
    });
    test("returns score 94 with spares before the last turn", () => {
      expect(bowlingGame([9,"/", 3,5, "-","/", 4,2, 5,"-", 2,"/", 6,3, 1,2, 7,"/", 3,4])).toEqual(94);
    });
    test("returns score 75 with strikes before the last turn", () => {
      expect(bowlingGame([9,"-", "X", 1,1, 4,2, "X", "-","-", 6,3, 1,2, "X", 3,4])).toEqual(75);
    });
  });


  