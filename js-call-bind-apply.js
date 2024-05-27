function sample(age, clas) {
  console.log(`${this.firstName} ${this.lastName} - ${age} - ${clas}`);
}

const obj = {
  firstName: "Kalyan",
  lastName: "Kumar",
};

Function.prototype.customCall = function (obj, ...args) {
  const currentObj = obj;
  let randomId = Math.random();
  while (currentObj[randomId] !== undefined) {
    randomId = Math.random();
  }
  currentObj[randomId] = this;
  let result = currentObj[randomId](...args);
  delete currentObj[randomId];
  return result;
};

Function.prototype.customApply = function (obj, args) {
  const currentObj = obj;
  let randomId = Math.random();
  while (currentObj[randomId] !== undefined) {
    randomId = Math.random();
  }
  currentObj[randomId] = this;
  let result = currentObj[randomId](...args);
  delete currentObj[randomId];
  return result;
};

Function.prototype.customBind = function (...args) {
  var callback = this,
    argus = args.splice(1);
  return function (...internalArgs) {
    callback.call(args[0], ...[...argus, ...internalArgs]);
  };
};

// sample.apply(obj, [21])
// sample.customApply(obj, [21]);

const bindFunc = sample.bind(obj, 32);
console.log(bindFunc);
bindFunc("Hii");

const customBindFunc = sample.customBind(obj, 45);
console.log(customBindFunc);
customBindFunc("There");
