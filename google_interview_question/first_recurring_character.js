//* GOOGLE QUESTION
// given an array, find the first recurring character
// if array = [2,5,1,2,3,5,1,2,4], then return 2
// if array = [2,1,1,2,3,5,1,2,4], then return 1
// if array = [2,3,4,5], then return undefined

//! brute force method: naive solution
const firstRecurringCharacter = nums => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) return nums[i];
    }
  }
  return undefined;
};

//! using inbuilt Map() object
//! O(n): space complexity
//! O(n): time complexity
const firstRecurringCharacter1 = nums => {
  let hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    // if the element we are currently seeing is already in the map, it is the first repeated element
    if (hashMap.has(nums[i])) return nums[i];
    hashMap.set(nums[i]);
  }
  return undefined;
};

//! using the objects
//! O(n): time complexity
//! O(n): space complexity
const firstRecurringCharacter2 = nums => {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) return nums[i];
    else map[nums[i]] = true;
  }
};

let nums = [2, 5, 5, 2, 5, 3];
console.log(firstRecurringCharacter(nums));
