const rendArgent = require("../src/rendArgent");

test("rendre argent avec minimum de billet", () => {
  expect(
    rendArgent(
      [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01],
      626.5
    )
  ).toBe(6);
});

test("rendre argent avec minimum de billet 3 chiffre aprés la virgule", () => {
  expect(
    rendArgent(
      [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.002],
      250.072
    )
  ).toBe(5);
});

test("impossible de faire le rest", () => {
  expect(rendArgent([500, 200, 100, 50, 20, 10, 5], 626.5)).toBe(-1);
});

test("impossible de faire le rest", () => {
  expect(rendArgent([500, -200, 100, 50, 20, 10, 5], 626.5)).toBe(-1);
});
