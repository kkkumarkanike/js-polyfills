const myCurry = function (fn) {
  const curry = (...outerArgs) => {
    let totalArgs = [];
    if (outerArgs.length >= fn.length) {
      return fn(...outerArgs);
    }

    totalArgs = [...totalArgs, ...outerArgs];

    const innerFunc = (...innerArgs) => {
      totalArgs = [...totalArgs, ...innerArgs];
      if (totalArgs.length >= fn.length) {
        return fn(...totalArgs);
      } else {
        return innerFunc;
      }
    };

    return innerFunc;
  };
  return curry;
};

const testFunction = (a, b, c, d) => a + b + c + d;

const func = myCurry(testFunction);
console.log(func(1)(2)()(4)(5));
console.log(func(1, 2)(4)(3));
