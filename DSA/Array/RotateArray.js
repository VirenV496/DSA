

function reverse(nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}

function rotate(nums, k) {
    const n = nums.length;
    k = k % n; // in case k is greater than the length of the array

    // Reverse the entire array
    reverse(nums, 0, n - 1);
    // Reverse the first k elements
    reverse(nums, 0, k - 1);
    // Reverse the remaining elements
    reverse(nums, k, n - 1);
}


// Example usage:
const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
rotate(nums, k);
console.log("nums",nums); // Output: [5, 6, 7, 1, 2, 3, 4]
