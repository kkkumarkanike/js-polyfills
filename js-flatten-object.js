const flattenObj = function (obj, parent = "") {
  const outputObj = {};
  const flat = (obj, innerParent) => {
    for (let key in obj) {
      const newParent = innerParent + key;
      const value = obj[key];
      if (typeof value === "object") {
        flat(value, newParent + ".");
      } else {
        outputObj[newParent] = value;
      }
    }
    return outputObj;
  };
  return flat(obj, parent);
};

const obj = {
  A: 1,
  B: 2,
  C: {
    P: 23,
    O: {
      L: 26,
    },
    Q: [1, 2],
  },
};

const flattedObj = flattenObj(obj);
console.log(flattedObj);
