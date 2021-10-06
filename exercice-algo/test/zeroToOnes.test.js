const zeroToOnes = require("../src/zeroAndOnes");

test("Séquence de zéro", () => {
  expect(zeroToOnes(123456)).toBe(6);
});

test("Pas de zéros", () => {
  expect(zeroToOnes(65535)).toBe(0);
});

test("negativeNumber", () => {
  expect(zeroToOnes(0)).toBe(1);
});
