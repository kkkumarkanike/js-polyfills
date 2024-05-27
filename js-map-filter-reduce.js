
const arr = [1,2,3,4,5,6,7,8,9,10];

// polyfill - map

Array.prototype.customMap = function (cb) {
    const result = [];
    for (let idx = 0; idx < this.length; idx++){
        result.push(cb(this[idx], idx, this));
    }
    return result;
}

const myMapCallback = (value, index, arr) =>{
    return value**2;
}

console.log(arr.map(myMapCallback))
console.log(arr.customMap(myMapCallback))


// polyfill - filter

Array.prototype.customFilter = function (cb) {
    const result = [];
    for (let idx = 0; idx < this.length; idx++){
        const res =cb(this[idx], idx, this);
       if(res) result.push(this[idx])
    }
    return result;
}

const myFilterCallback = (value, index, arr) =>{
    return value % 2 === 0;
}


console.log(arr.filter(myFilterCallback))
console.log(arr.customFilter(myFilterCallback))



// polyfill - reduce

Array.prototype.customReduce = function (cb, initialValue = 0) {
    let output = initialValue;
    for (let idx = 0; idx < this.length; idx++){
        output = cb(this[idx], output);
    }
    return output;
}

const myReduceCallback = (value, preValue) =>{
    return preValue + value;
}


console.log(arr.reduce(myReduceCallback))
console.log(arr.customReduce(myReduceCallback))



