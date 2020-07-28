function mergeSortedArrays(arr1, arr2) {
  if (arr1.length == 0) return arr2;
  if (arr2.length == 0) return arr1;

  let mergedArray = [];
  let el1 = arr1[0];
  let el2 = arr2[0];
  let i = 1;
  let j = 1;

  while (el1 || el2) {
    // if the second element is undefined, push the first element into the array
    if (!el2 || el1 < el2) {
      mergedArray.push(el1);
      el1 = arr1[i++];
    } else {
      mergedArray.push(el2);
      el2 = arr2[j++];
    }
  }
  return mergedArray;
}

// a better way to do the above problem
function mergeSortedArrays1(arr1, arr2) {
  let mergedArray = [];
  let n1 = arr1.length;
  let n2 = arr2.length;
  let i = 0;
  let j = 0;

  while (i < n1 && j < n2) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i++]);
    } else {
      mergedArray.push(arr2[j++]);
    }
  }

  // copy the remaining elements of first array
  while (i < n1) {
    mergedArray.push(arr1[i]);
  }
  // copy the remaining elements of the second array
  while (j < n2) {
    mergedArray.push(arr2[j]);
  }

  return mergedArray;
}

console.log(mergeSortedArrays([1, 9, 55, 125], [4, 6, 30]));
