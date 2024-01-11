// This function will iterate through the array with the callback function, checks each element in the
// array pass the condition will return "true", if atlease one element fails the condition will return "false"
Array.prototype.myEvery = function (callbackFunc) {
  // By default assigning the result as true
  let result = true;
  for (let i = 0; i < this.length; i++) {
    // Atlease one element fails the condition, 'myEvery' function will return "false"
    if (!callbackFunc(this[i])) {
      return false;
    }
  }

  return result;
};

const inputArray1 = [2, 4, 6, 8];
const inputArray2 = [1, 3, 6, 7];

const checkForEven = (num, index) => num % 2 === 0;
const checkForOdd = (num, index) => num % 2 === 1;

console.log(inputArray1.myEvery(checkForEven));
console.log(inputArray2.myEvery(checkForOdd));
