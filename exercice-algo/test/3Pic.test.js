const threepic = require("../src/3Pic");

test("example1", () => {
  expect(
    threepic([
      [1, 2, 3],
      [4, 5, 6],
      [7, 0, 9],
    ])
  ).toBe(25);
});

test("example2", () => {
  expect(
    threepic([
      [0, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ])
  ).toBe(3);
});
