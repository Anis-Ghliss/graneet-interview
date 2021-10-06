const decimalCount = require("./utils/decimalCount");

const rendArgent = (T, M) => {
  dec = decimalCount(M);
  startPointer = 0;

  P = 0;
  for (let i = 0; i < T.length; i++) {
    if (T[i] >= M) {
      startPointer = i;
      break;
    }
  }
  for (i = startPointer; i < T.length; i++) {
    if (M - T[i] == 0) {
      P++;
      M = M - T[i];
      break;
    }
    if (M - T[i] > 0) {
      P++;
      M = (M - T[i]).toFixed(dec);
    } else {
      continue;
    }
  }

  return M == 0 ? P : -1;
};

//Complexity O(n)
module.exports = rendArgent;
