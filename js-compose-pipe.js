const customCompose = function (...funcs) {
  return (arg) => {
    return funcs.reduceRight((acc, func) => func(acc), arg);
  };
};

const customPipe = function (...funcs) {
  return (arg) => {
    return funcs.reduce((acc, func) => func(acc), arg);
  };
};

const add5 = (a) => {
  return a + 5;
};

const sub2 = (a) => {
  return a - 2;
};

const multiply5 = (a) => {
  return a * 3;
};

const compose = customCompose(add5, sub2, multiply5);
const pipe = customPipe(multiply5, sub2, add5);
console.log(compose(5));
console.log(pipe(5));
// Expected output: 18
