import {convertNumberToRoman} from "./convert_numbers_to_roman_numerals";

//Test initially failed as I had not written any code for the function it calls -convertNumberToRoman()
// Next started with one simple test that tests for 1 as input to expect 'I' roman numeral as output
// Arrange would be 1, Action will be calling the convertNumberToRoman function and Assertion would be 'I'

describe("Numbers to Roman Numerals", () => {
  test("converts 1 to I", () => {
    expect(convertNumberToRoman(1)).toBe("I");
  });
  test("converts 2 to II", () => {
    expect(convertNumberToRoman(2)).toBe("II");
  });

  // then gradually added more tests as they passed
  test("converts 3 to III", () => {
    expect(convertNumberToRoman(3)).toBe("III");
  });

  test("converts 4 to IV", () => {
    expect(convertNumberToRoman(4)).toBe("IV");
  });
  test("converts 5 to V", () => {
    expect(convertNumberToRoman(5)).toBe("V");
  });
  test("converts 6 to VI", () => {
    expect(convertNumberToRoman(6)).toBe("VI");
  });
  test("converts 9 to IX", () => {
    expect(convertNumberToRoman(9)).toBe("IX");
  });
  test("converts 10 to X", () => {
    expect(convertNumberToRoman(10)).toBe("X");
  });
  test("converts 19 to IXX", () => {
    expect(convertNumberToRoman(19)).toBe("XIX");
  });
  test("converts 21 to XXI", () => {
    expect(convertNumberToRoman(21)).toBe("XXI");
  });
  test("converts 40 to XL", () => {
    expect(convertNumberToRoman(40)).toBe("XL");
  });
  test("converts 41 to XLI", () => {
    expect(convertNumberToRoman(41)).toBe("XLI");
  });
  test("converts 50 to L", () => {
    expect(convertNumberToRoman(50)).toBe("L");
  });

  test("converts 100 to C", () => {
    expect(convertNumberToRoman(100)).toBe("C");
  });

  test("converts 500 to D", () => {
    expect(convertNumberToRoman(500)).toBe("D");
  });

  test("converts 1000 to M", () => {
    expect(convertNumberToRoman(1000)).toBe("M");
  });

  test("converts 1987 to MCMLXXXVII", () => {
    expect(convertNumberToRoman(1987)).toBe("MCMLXXXVII");
  });
  test("converts 3999 to MMMCMXCIX", () => {
    expect(convertNumberToRoman(3999)).toBe("MMMCMXCIX");
  });
  // added edge test cases to cover all input scenarios and errors

  test("throws an error for non-numerals", () => {
    expect(() => convertNumberToRoman("abc")).toThrow(
      "Input must be a positive integer"
    );
  });
  test("throws an error for non-numerals", () => {
    expect(() => convertNumberToRoman("")).toThrow(
      "Input must be a positive integer"
    );
  });

  test("throws an error for non-integer numbers", () => {
    expect(() => convertNumberToRoman(3.14)).toThrow(
      "Input must be a positive integer"
    );
  });
});
