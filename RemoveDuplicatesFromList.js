// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
// Input: head = [1,1,2]
// Output: [1,2]

const deleteDuplicates = function (head) {
  let dummy = head;
  while (dummy !== null && dummy.next !== null) {
    if (dummy.val === dummy.next.val) {
      dummy.next = dummy.next.next;
    } else {
      dummy = dummy.next;
    }
  }
  return head;
};
