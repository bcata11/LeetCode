
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


var middleNode = function(head) {
    let rabbit = head;//fast pointer
    let tortle = head;//slowpointer
  
    while ( rabbit && rabbit.next) {
        rabbit = rabbit.next.next;
        tortle = tortle.next;
    }
    return tortle
  };

  /*initial state
rabbit
1 -> 2 -> 3 -> 4 -> 5
tortle

1st loop
		  rabbit
1 -> 2 -> 3 -> 4 -> 5
     tortle
	 
2nd loop
		            rabbit
1 -> 2 -> 3 -> 4 -> 5
          tortle 
*/