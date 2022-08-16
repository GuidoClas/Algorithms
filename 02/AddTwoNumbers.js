
// singly-linkedlist class
class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    // returns the number version of the linkedList correctly reversed.
    toNumberReversed = function () {
        let tail = this.head;
        let str = "";
        while(tail !== null){
            str += tail.val; 
            tail = tail.next;
        }
        return parseInt(str.split("").reverse().join(""));
    }

    // pushes a value into the last position of the LinkedList
    push = function(data) {
        let newNode = new ListNode(data);
        newNode.next = null;
        if(this.head === null){
            this.head = newNode;
            return;
        }

        let tail = this.head;
        while(tail.next !== null){
            tail = tail.next;
        }

        tail.next = newNode;
        return;
    }

    // transforms a the summed up number into a LinkedList and returns it.
    static toLinkedList = function (num){
        let arr = num.toString().split("").map((n) => {
            return Number(n);
        });

        let outputLinkedList = new LinkedList();
        arr.map((val) => {
            outputLinkedList.push(val);
            return;
        });
        
        return outputLinkedList;
    }
}

// singly-linkedlist node class
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;               
    }
}

////////////////////
let l1Node5 = new ListNode(6, null);
let l1Node4 = new ListNode(4, l1Node5);
let l1Node3 = new ListNode(9, l1Node4);
let l1Node2 = new ListNode(3, l1Node3);
let l1Node1 = new ListNode(4, l1Node2);
let l1Head = new ListNode(2, l1Node1)
////////////////////
let l2Node2 = new ListNode(4, null);
let l2Node1 = new ListNode(6, l2Node2);
let l2Head = new ListNode(5, l2Node1)
///////////////////
let l1 = new LinkedList(l1Head);
let l2 = new LinkedList(l2Head);

/**
 * @param {LinkedList} l1
 * @param {LinkedList} l2
 * @return {LinkedList}
 */
 var addTwoNumbers = function(l1, l2) {
    let l1Num = l1.toNumberReversed();
    let l2Num = l2.toNumberReversed();
    let summ = l1Num + l2Num;

    return LinkedList.toLinkedList(summ);
};

addTwoNumbers(l1, l2);