// Given the head of a singly linked list, return true if it is a palindrome.

const isPalindrome = function (head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  let i = 0;
  let j = arr.length - 1;
  while (j > i) {
    if (arr[i] != arr[j]) {
      return false;
    }
    j--;
    i++;
  }
  return true;
};
