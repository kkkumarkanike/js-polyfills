Array.prototype.customFlat = function (levels = 1) {
  const output = [];

  const flat = (array, depth) => {
    for (let each of array) {
      if (Array.isArray(each) && depth > 0) {
        flat(each, depth - 1);
      } else {
        output.push(each);
      }
    }
    return output;
  };
  return flat(this, levels);
};

const arr = [
  1,
  [2, 3],
  4,
  [5, 6, [7, 8], [9, [10, 11], [13, 14, [15, 16]], 17, 18, [12]], 19],
  20,
];
console.log(arr.customFlat(Infinity));
