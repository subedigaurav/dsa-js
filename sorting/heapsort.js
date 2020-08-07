function max_heapify(A, n, i) {
  let largest = i;
  // the left and right children
  let l = 2 * i + 1;
  let r = l + 1;

  if (l < n && A[l] > A[largest]) {
    largest = l;
  }
  if (r < n && A[r] > A[largest]) {
    largest = r;
  }
  if (largest != i) {
    [A[largest], A[i]] = [A[i], A[largest]];
    max_heapify(A, n, largest);
  }
}

function buildMaxHeap(A) {
  const n = A.length;
  // the last parent
  let i = Math.floor(n / 2 - 1);
  while (i >= 0) {
    max_heapify(A, n, i);
    i--;
  }
}

function heapSort(A) {
  buildMaxHeap(A);

  for (let i = A.length - 1; i > 0; i--) {
    // swap the first and the last element
    [A[i], A[0]] = [A[0], A[i]];
    max_heapify(A, i, 0);
  }
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
heapSort(numbers);
console.log(numbers);
