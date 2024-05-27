const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
    }
  }
  return arr;
};

const selectionSortTestArray = [1, 8, 2, 4, 5, 7, 3];
console.log(selectionSort(selectionSortTestArray));

const bubbleSort = (arr) => {
  const len = arr.length;
  let swapped = false;
  for (let i = 0; i <= len - 1; i++) {
    for (let j = 0; j <= len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        swapped = true;
      }
    }
    // * Break the loop, if the array is already sorted
    if (!swapped) break;
  }
  return arr;
};

const bubbleSortTestArray = [1, 8, 2, 4, 5, 7, 3];
console.log(bubbleSort(bubbleSortTestArray));


const insertionSort = (arr) =>{
  for(let i = 1; i < arr.length; i++){
      const currentElement = arr[i];
      let j = i - 1;
      while(j>=0 && arr[j] > currentElement){
          [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
          j--;
      }
      arr[j+1] = currentElement;
  }
  return arr;
}


const insertionSortArray = [1,8,2,4,5,7,3];
console.log(insertionSort(insertionSortArray));



const merge = (leftArr, rightArr) =>{
  const result = [];
  let leftArrCounter = 0;
  let rightArrCounter = 0;
  
  while(leftArrCounter < leftArr.length && rightArrCounter < rightArr.length){
      if(leftArr[leftArrCounter] < rightArr[rightArrCounter]){
          result.push(leftArr[leftArrCounter]);
          leftArrCounter++;
      }else{
          result.push(rightArr[rightArrCounter]);
          rightArrCounter++;
      }
  }
  
  while(leftArrCounter < leftArr.length){
       result.push(leftArr[leftArrCounter]);
       leftArrCounter++;
  }
  
  while(rightArrCounter < rightArr.length){
       result.push(rightArr[rightArrCounter]);
       rightArrCounter++;
  }
  
  return result;
}

const mergeReccursion = (arr) =>{
  const len = arr.length;
  
  if(len === 0 || len === 1) return arr;
  
  const mid = Math.floor(len / 2);
  const leftArr = arr.slice(0,mid);
  const rightArr = arr.slice(mid, len)
  
  return merge(mergeReccursion(leftArr),mergeReccursion(rightArr));
  
}


const arr = [1,8,2,4,5,7,3];
console.log(mergeReccursion(arr));

const getPivotIndex = (arr, low, high) =>{
  let pivotValue = arr[high];
  let pivotIndex = low-1;
  
  for(let i = low; i < high; i++){
      if(arr[i] < pivotValue){
          pivotIndex++;
          [arr[pivotIndex], arr[i]] = [arr[i], arr[pivotIndex]]
      }
  }
  [arr[pivotIndex + 1], arr[high]] =  [arr[high],arr[pivotIndex+1]];
  return pivotIndex + 1;
}

const quickSort = (arr, low, high) =>{
  if(low < high){
      const pi = getPivotIndex(arr,low, high);
      quickSort(arr,low,pi-1);
      quickSort(arr,pi+1,high);
  }
}

let list = [10, 7, 8, 9, 1, 5];

quickSort(list, 0, list.length - 1);
console.log(list);
