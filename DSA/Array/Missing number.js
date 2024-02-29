function missingNumber(nums) {
    const n = nums.length;
    let actualSum = 0;
    for (let i = 0; i < n; i++) {
        actualSum += nums[i];
    }
    const expectedSum = (n * (n + 1)) / 2;
    return expectedSum - actualSum;
}

// Example usage:
const nums = [3, 0, 1];
console.log(missingNumber(nums)); // Output: 2
