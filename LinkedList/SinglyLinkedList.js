class LinkedList {

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }
 
    push(node){

        if (this.length === 0){
            this.head = node;
            this.tail= node;
            this.head.next = null;
        }else{
            this.tail.next = node;
            this.tail = node;
        }

        this.length = this.length + 1;

    }

    traverse(){
        let head = this.head;
        console.log(this.length);
        while(head){
            console.log(head.value);
            head = head.next 
        }
    }

    reverse(){

        let curr = this.head;
        let prev = null;  // this becomes the reverse liked list
        let next;

        // 1st Iteration 
        // 22 -> 3 -> 4 ->5 ->7 -> 9

        // null   22   ->   3 ->   4 ->   5 ->7 -> 9
        // prev   cur       next
 


           
            while(curr != null){
                 // first save the next element before re-Assigning
                 // null     22   ->   3 ->   4 ->   5 ->7 -> 9
                // prev     cur      next
                next = curr.next
                curr.next = prev  // reversing happens here

                // code for Next Iteration
                 // null     22   ->   3 ->   4 ->   5 ->7 -> 9
                // prev     cur      next 
                // null <-22   ->   3 ->     4 ->   5 ->7 -> 9
                 //      prev      cur       next
                 
                 prev = curr;
                 curr = next;
            }
            
            return prev
        
        
    }


}

class Node{
    constructor(value){
        this.next = null;
        this.value = value
    }
}
const n1 = new Node(10);
const n2 = new Node(20);
const n3 = new Node(30);

const sl = new LinkedList();

sl.push(n1);
sl.push(n2);
sl.push(n3);

sl.traverse();