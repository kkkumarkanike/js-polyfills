const binarySearch = (list, value) => {
  let start = 0;
  let end = list.length - 1;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === value) return true;
    if (arr[mid] > value) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
};

const arr = [1, 3, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(arr, 5));
