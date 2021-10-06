const ThreePics = (E) => {
  L = E[0].length;
  H = E.length;
  Max = E[0][0];
  nextStep = E[0][0];

  i = 0;
  j = 0;
  while (i < H - 1 && j < L - 1) {
    if (E[i][j + 1] >= E[i + 1][j]) {
      Max += E[i][j + 1] + E[i + 1][j + 1];
    } else {
      Max += E[i + 1][j] + E[i + 1][j + 1];
    }
    i++;
    j++;
  }
  return Max;
};

/*
  recursive :
    threePic(E)

*/

module.exports = ThreePics;
