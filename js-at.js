// this function will take index of an array and returns the value of particular index of that array.
Array.prototype.myAt = function (index) {
  //   if enter index is not a number, will return undefined
  if (typeof index !== "number") return undefined;

  // Edge cases: if index is less than the negative of array length or greater than or equal to array length,
  // will return "undefined"
  if (index < -this.length || index >= this.length) return undefined;

  let myIndex = index;

  // If passed index is less than 0, then index + array length is accessed (index is counted from the end).
  if (myIndex < 0) myIndex += this.length;

  return this[myIndex];
};

const inputArray = [1, 2, 3, 4, 5, 6];

console.log(inputArray.myAt(2));
console.log(inputArray.myAt(-1));
console.log(inputArray.myAt("2"));
