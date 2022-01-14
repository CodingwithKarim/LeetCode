// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

 

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Example 3:

// Input: haystack = "", needle = ""
// Output: 0

const strStr = function(h, n) {
    //declare a variable for the correct loop interval to iterate on a list of substrings
    let loopLength = (h.length - n.length) + 1
    //run a loop which will initalize a subStr variable containing the sliced h string, string is sliced by i index and the length of n
    //since i is being incremented by 1 for each iteration, the value of i must be added to n.length in order for length of the substring to be n.length
    for(let i = 0; i < loopLength; i++){
      let subStr = h.slice(i, i + n.length)
      //if subStr and n are showing equality, return the index of the substring
      if(n === subStr){
        return h.indexOf(subStr)
      }
    }
    // if no substrings show equality with n, return -1
    return -1
  }