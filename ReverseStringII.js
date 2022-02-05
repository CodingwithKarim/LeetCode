// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

 

// Example 1:

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"

// Example 2:

// Input: s = "abcd", k = 2
// Output: "bacd"

const reverseStr = function(s, k) {
    let count = 0
    let result = ''
    for(let i = 0; i < s.length;i=i +(k)){
        if(count % 2 === 0){
            result += s.substring(i, i+k).split('').reverse().join('')
        }
        else{
            result += s.substring(i,i+k)
        }
        count++
    }
    return result
 }