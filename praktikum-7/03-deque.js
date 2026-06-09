// Double-Ended queue

class Node { constructor(d){this.data=d;this.next=null;this.prev=null;} }

class Deque {
    constructor() { this.front = null; this.back = null; this.size = 0; }

    addFront(data) {
        const n = new Node(data);
        if (!this.front) {
            this.front = this.back = n;
        } else {
            n.next = this.front;
            this.front.prev = n;
            this.front = n;
        }
        this.size++;
    }

    addBack(data) {
        const n = new Node(data);
        if (!this.back) {
            this.front = this.back = n;
        } else {
            this.back.next = n;
            n.prev = this.back;
            this.back = n;
        }
        this.size++;
    }

    removeFront() {
        if (!this.front) return null;
        const v = this.front.data;
        this.front = this.front.next;
        if (this.front) this.front.prev = null;
        else this.back = null;
        this.size--;
        return v;
    }
    removeBack() {
        if(!this.back)return null;
        const v=this.back.data;
        this.back=this.back.prev;
        if(this.back)this.back.next=null; else this.front=null;
        this.size--;return v;
    }
    peekFront() { return this.front?this.front.data:null; }
    peekBack()  { return this.back?this.back.data:null; }
    isEmpty()   { return this.size===0; }
    print() {
        let s = '', cur = this.front;
        while (cur) {
            s += cur.next ? `[${cur.data}]↔` : `[${cur.data}]`;
            cur = cur.next;
        }
        console.log(' FRONT->', s, '<-BACK');
    }
} 

//--- Untuk Aplikasi: Sliding Window Maximum ------------

function slidingWindowMax(arr, k) {
    const deque = new Deque(); // penyimpanan indeks
    const hasil = [];

    for (let i = 0; i < arr.length; i++) {
        if (!deque.isEmpty() && deque.peekFront() <= i - k) deque.removeFront();

        while (!deque.isEmpty() && arr[deque.peekBack()] < arr[i]) deque.removeBack();

        deque.addBack(i);

        if (i >= k - 1) hasil.push(arr[deque.peekFront()]);
    }

    return hasil;
}

const dq = new Deque();
dq.addBack(1); dq.addBack(3);
dq.addFront(0);
dq.print();
console.log('Remove back :', dq.removeBack());
console.log('Remove front:', dq.removeFront());
dq.print();

console.log('\n=== sliding Window Maximum ===');
const arr = [1, 3, -1, 5, 3, 6, 7];
console.log('Array :', arr);
console.log('k=3,  :', slidingWindowMax(arr, 3)); // [3,3,5,6,7]