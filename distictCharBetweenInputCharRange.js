function countDistinctOccurrences(input1, input2) {
    // Remove spaces and split the string by occurrences of input2
    input1 = input1.split(' ').join('').split(input2);
    input1.shift();
    input1.pop();
    // Remove all characters that have duplicates
    input1 = removeDuplicateAll(input1.join(''));
    
    return input1.length || -1;
}

// Function to remove all duplicate characters completely
function removeDuplicateAll(str) {
    const charCount = {};
    
    // Count occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Filter out characters that appear more than once
    let distinctStr = '';
    for (let char of str) {
        if (charCount[char] === 1) {
            distinctStr += char;
        }
    }

    return distinctStr;
}

// Example usage:
const input1 = 'my name is aman';
const input2 = 'n';

console.log(countDistinctOccurrences(input1, input2)); // Output: 5
