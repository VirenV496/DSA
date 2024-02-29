function isPalindrome(s) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleanString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Check if the clean string is equal to its reverse
    return cleanString === cleanString.split('').reverse().join('');
}

// Example usage:
const s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s)); // Output: true
