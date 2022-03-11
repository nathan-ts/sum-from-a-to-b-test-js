
function sum(fromN, toN) {
  if (fromN > toN) {
    let max = fromN;
    fromN = toN;
    toN = max;
  }
  if (fromN === toN) return toN;
  else return fromN + sum(fromN + 1, toN);
}

module.exports = sum;
