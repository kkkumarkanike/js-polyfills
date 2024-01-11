// This function takes 1 or more arrays/values as input using rest operator and gives concatenated new array as result
Array.prototype.myConcat = function (...arguments) {
  let result = this;
  for (let index = 0; index < arguments.length; index++) {
    const eachElement = arguments[index];
    if (Array.isArray(eachElement)) {
      // If we have nested arrays in the arguments, those are handled here atmost one level, otherwise every element is
      // added to the resultant array.
      result = [...result, ...eachElement];
    } else {
      result.push(eachElement);
    }
  }

  return result;
};

const inputArray = [1, 2, 3];

console.log(inputArray.myConcat(["a", "b", "c"], 20));
console.log(inputArray.myConcat([4, 5, 6], [7, 8], [9], 8));
console.log([1, , 3].concat([4, 5]));
console.log(inputArray.concat(20));
