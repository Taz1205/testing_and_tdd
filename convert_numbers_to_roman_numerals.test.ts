import { convertNumberToRoman } from "./convert_numbers_to_roman_numerals";

//Test initially failed as I had not written any code for the function it calls -convertNumberToRoman()
// Next started with one simple test that tests for 1 as input to expect 'I' roman numeral as output
// Arrange would be 1, Action will be calling the convertNumberToRoman function and Assertion would be 'I'

describe("Numbers to Roman Numerals", () => {
  test("converts 1 to I", () => {
    const inputNumber = 1;

    const result = convertNumberToRoman(inputNumber);

    expect(result).toBe("I");
  });
  test("converts 2 to II", () => {
    const inputNumber = 2;
    const result = convertNumberToRoman(inputNumber);
    expect(result).toBe("II");
  });

  test("converts 3 to III", () => {
    const inputNumber = 3;
    const result = convertNumberToRoman(inputNumber);
    expect(result).toBe("III");
  });

  test("converts 4 to IV", () => {
    const inputNumber = 4;
    const result = convertNumberToRoman(inputNumber);
    expect(result).toBe("IV");
  });

  test("converts 5 to V", () => {
    const inputNumber = 5;
    const result = convertNumberToRoman(inputNumber);
    expect(result).toBe("V");
  });

  test("converts 6 to VI", () => {
    const inputNumber = 6;
    const result = convertNumberToRoman(inputNumber);
    expect(result).toBe("VI");
  });

  test("converts 9 to IX", () => {
    const inputNumber = 9;
    const result = convertNumberToRoman(inputNumber);
    expect(result).toBe("IX");
  });

  test("converts 10 to X", () => {
    const inputNumber = 10;
    const result = convertNumberToRoman(inputNumber);
    expect(result).toBe("X");
  });

  test("converts 19 to XIX", () => {
    const inputNumber = 19;
    const result = convertNumberToRoman(inputNumber);
    expect(result).toBe("XIX");
  });

  test("converts 21 to XXI", () => {
    const inputNumber = 21;
    const result = convertNumberToRoman(inputNumber);
    expect(result).toBe("XXI");
  });

  test("converts 40 to XL", () => {
    const inputNumber = 40;
    const result = convertNumberToRoman(inputNumber);
    expect(result).toBe("XL");
  });

  test("converts 41 to XLI", () => {
    const inputNumber = 41;
    const result = convertNumberToRoman(inputNumber);
    expect(result).toBe("XLI");
  });

  test("converts 50 to L", () => {
    const inputNumber = 50;
    const result = convertNumberToRoman(inputNumber);
    expect(result).toBe("L");
  });

  test("converts 100 to C", () => {
    const inputNumber = 100;
    const result = convertNumberToRoman(inputNumber);
    expect(result).toBe("C");
  });

  test("converts 500 to D", () => {
    const inputNumber = 500;
    const result = convertNumberToRoman(inputNumber);
    expect(result).toBe("D");
  });

  test("converts 1000 to M", () => {
    const inputNumber = 1000;
    const result = convertNumberToRoman(inputNumber);
    expect(result).toBe("M");
  });

  test("converts 1987 to MCMLXXXVII", () => {
    const inputNumber = 1987;
    const result = convertNumberToRoman(inputNumber);
    expect(result).toBe("MCMLXXXVII");
  });

  test("converts 3999 to MMMCMXCIX", () => {
    const inputNumber = 3999;
    const result = convertNumberToRoman(inputNumber);
    expect(result).toBe("MMMCMXCIX");
  });

  // Edge cases

  test("throws an error for non-integer numbers", () => {
    const inputNumber = 3.14;
    expect(() => convertNumberToRoman(inputNumber)).toThrow(
      "Input must be a positive integer between 1 and 3999"
    );
  });

  test("throws an error for 0", () => {
    const inputNumber = 0;
    expect(() => convertNumberToRoman(inputNumber)).toThrow(
      "Input must be a positive integer between 1 and 3999"
    );
  });

  test("throws an error for numbers > 3999", () => {
    const inputNumber = 4000;
    expect(() => convertNumberToRoman(inputNumber)).toThrow(
      "Input must be a positive integer between 1 and 3999"
    );
  });
});
