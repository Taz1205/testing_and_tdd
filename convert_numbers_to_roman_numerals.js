 export const convertNumberToRoman = (num) => {
  if (!Number.isInteger(num)) {
    throw new Error("Input must be a positive integer");
  }
  const table = [
    [1000,'M'],
    [900,'CM'],
    [500,'D'],
    [400,'CD'],
    [100,'C'],
    [90,'XC'],
    [50,'L'],
    [40,'XL'],
    [10,'X'],
    [9,'IX'],
    [5,'V'],
    [4,'IV'],
    [1,'I']
  ];
  
  for (let [number, notation] of table) {
    if (num >= number)
      return notation + convertNumberToRoman(num - number)
  }
  return ''
}

/* function convertNumberToRoman(num) {
  if (!Number.isInteger(num)) {
    throw new Error("Input must be a positive integer");
  }
  if (num < 1) {
    return "";
  }
  if (num >= 1000) {
    return "M" + convertNumberToRoman(num - 1000);
  }
  if (num >= 900) {
    return "CM" + convertNumberToRoman(num - 900);
  }
  if (num >= 500) {
    return "D" + convertNumberToRoman(num - 500);
  }
  if (num >= 400) {
    return "CD" + convertNumberToRoman(num - 400);
  }
  if (num >= 100) {
    return "C" + convertNumberToRoman(num - 100);
  }
  if (num >= 90) {
    return "XC" + convertNumberToRoman(num - 90);
  }
  if (num >= 50) {
    return "L" + convertNumberToRoman(num - 50);
  }
  if (num >= 40) {
    return "XL" + convertNumberToRoman(num - 40);
  }
  if (num >= 10) {
    return "X" + convertNumberToRoman(num - 10);
  }
  if (num >= 9) {
    return "IX" + convertNumberToRoman(num - 9);
  }
  if (num >= 5) {
    return "V" + convertNumberToRoman(num - 5);
  }
  if (num >= 4) {
    return "IV" + convertNumberToRoman(num - 4);
  }
  if (num >= 1) {
    return "I" + convertNumberToRoman(num - 1);
  }
}
*/