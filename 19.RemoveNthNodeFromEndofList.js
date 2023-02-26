/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// Input: head = [1,2,3,4,5], n = 2

var removeNthFromEnd = function(head, n) {
    //set up two pointers starting from the head
    let fast= head;
    let slow = head;
    //increasing fast n times
    // so wehen we will loop through the array we will have the right distance between fast and slow
    while( n >= 1 ) {
        fast = fast.next;
        n--;
    }
    // if fast is null, so n is the length of list
    if(fast === null) {
        head = head.next
    } else {  
        //if the length of the list is grater than n
        while( fast.next !== null){
            //loop until fast.next doesn't exist and increase fast and slow
            slow= slow.next;
            fast=fast.next;
        }
        //to delete the node we will increase twice the slow
        slow.next = slow.next.next;
    }
    return head
    
};