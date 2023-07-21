export const convertNumberToRoman = (num: number): string => {
  if (!Number.isInteger(num) || num <= 0 || num > 3999) {
    throw new Error("Input must be a positive integer between 1 and 3999");
  }

  const lookup: { [key: number]: string } = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };

  let result = "";
  let keys = Object.keys(lookup).sort((a, b) => Number(b) - Number(a));

  for (let key of keys) {
    while (num >= Number(key)) {
      result += lookup[Number(key)];
      num -= Number(key);
    }
  }

  return result;
};
