function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  let result = 0;
  if (toN === 0) {
    return 0;
  }

  if (toN === 1) {
    return 1;
  }

  if (fromN <= toN) {
    result += toN + sum(fromN, toN - 1);
  }
  return result;
}

console.log(sum(3, 7));

module.exports = sum;
