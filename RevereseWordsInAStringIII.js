// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "God Ding"
// Output: "doG gniD"

const reverseWords = function(s) {
    s = s.split(' ')
    return s.map(function(str){
        let newStr = ''
        let j = str.length - 1
        while(j > - 1){
            newStr += str[j]
            j--
        }
        return newStr
    }).join(' ')
};