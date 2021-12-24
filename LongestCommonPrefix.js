// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".


// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


var longestCommonPrefix = function (strs) {
    let result = "";
    let solution = "";
    //find minimim strs element length to use within the for loop
    let maxNum = strs.reduce(
        (a, b) => (b.length > a.length ? a.length : b.length),
        0
    );
    //run a nested for loop which will iterate for each letter for every letter and append it to the result string
    for (let i = 0; i < maxNum; i++) {
        for (let j = 0; j < strs.length; j++) {
            result += strs[j][i];
        }
        // initalize a variable x that places the result within a new Set() which will filter out any duplicates
        let x = [...new Set(result)];
        //empty the result variable for the next iteration of the loop
        result = "";
        //check to see if all the characters were the same, if true, append the single character to the solution string
        if (x.length === 1) {
            solution += x[0];
        //if x includes more that one distinct character, break the loop
        } else {
            break;
        }
    }
    //return solution string containing the largest common prefix
    return solution;
};
