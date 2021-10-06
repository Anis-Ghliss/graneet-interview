const ZeroToOne = (M) => {
  if (M == 0) return 1;
  array = [];
  while (M >= 1) {
    array.push(M % 2);
    M = Math.floor(M / 2);
  }

  zeros = 0;
  MaxZeros = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] == 0) {
      zeros++;
    } else {
      if (zeros >= MaxZeros) {
        MaxZeros = zeros;
      }
      zeros = 0;
    }
  }
  return MaxZeros;
};

module.exports = ZeroToOne;
