// implementasi stack menggunakan linked list
//mengimport LinkedList dari file 01-Linked-list.js

const { LinkedList } = require('./01-Linked-list');
class Stack {
    constructor() {
        this.list = new LinkedList();
    }

    //membuat method
    //push(data) - o(1)
    push(data) {
        this.list.prepend(data);
    }

    //pop() - o(1)
    pop(){
        if (this.list.isEmpty()) return null;
        const topdata = this.list.head.data;
        this.list.head = this.list.head.next;
        this.list.size--;
        return topdata;
    }

    //peek() - o(1)
    peek(){
        return this.list.head ? this.list.head.data :null;
    }

    //isEmpty() - o(1)
    isEmpty(){
        return this.list.isEmpty();
    }

    //size() - o(1)
    size(){
        return this.list.size;
    }

    //print() - o(n)
    print(){
        this.list.print();
    }
}

//--- membuat demonstrasi stack dengan undo/redo secara sederhana ---
const actionS = ['buka folder', 'buka file', 'simpan file'];
const stack = new Stack();

actionS.forEach(a => stack.push(a));
stack.print();

console.log('undo:', stack.pop());
stack.print();
