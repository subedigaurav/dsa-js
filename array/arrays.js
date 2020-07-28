const strings = ['a', 'b', 'c', 'd']; //!s 16 bytes of storage

strings.push('e'); //! O(1)

strings.pop(); //! O(1)

strings.unshift('x'); //! O(n) since we update the indices of the array

// add an item at the middle of the array
strings.splice(2, 0, 'alien'); //! O(n)

console.log(strings);

// C++
//* int a[20];
//* int b[5] = {1,2,3,4,5};
