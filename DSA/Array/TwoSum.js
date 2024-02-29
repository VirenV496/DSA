// function twoSum(nums, target) {
//     const indexes = [];
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 indexes.push(i, j);
//                 return indexes;
//             }
//         }
//     }
//     return indexes; // If no solution found, return empty array
// }
// // Test cases
// console.log(twoSum([2,7,11,15], 9));  // Output: [0,1]
// console.log(twoSum([3,2,4], 6));  // Output: [0,1]
// console.log(twoSum([3,3], 6));  // Output: [0,1]

function twoSum(nums, target) {
    const numIndices = {}; //hashing the array

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        console.log("complement",complement)
        if (numIndices.hasOwnProperty(complement)) {
            return [numIndices[complement], i];
        }
        numIndices[nums[i]] = i;
    }
    return []; // If no solution found, return empty array
}

// Test cases
console.log(twoSum([2,7,11,15], 6));  // Output: [0,1]
console.log(twoSum([3,2,4], 6));  // Output: [1,2]
console.log(twoSum([3,3], 6));  // Output: [0,1]