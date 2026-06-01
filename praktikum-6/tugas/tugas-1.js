//---mengimplementasikan class DoubleLikedList--- 
//DoublyLikedlist = menyimpan node dalam  dua arah (next dan prev)
//head = nnode pertama 
//tail = node terakhir
//size = jumlah node dalam list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // append: tambahkan node di akhir - O(1)
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }

    // prepend: tambahkan node di awal - O(1)
    prepend(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    // insertAt: sisipkan node di posisi tertentu - O(n)
    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            console.log('Index di luar batas!');
            return;
        }
        if (index === 0) {
            this.prepend(data);
            return;
        }
        if (index === this.size) {
            this.append(data);
            return;
        }

        const newNode = new Node(data);
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        const nextNode = current.next;
        current.next = newNode;
        newNode.prev = current;
        newNode.next = nextNode;
        nextNode.prev = newNode;
        this.size++;
    }

    // delete: hapus node pertama yang menemukan data - O(n)
    delete(data) {
        if (!this.head) return false;

        let current = this.head;
        while (current && current.data !== data) {
            current = current.next;
        }

        if (!current) return false;

        if (current === this.head) {
            this.head = this.head.next;
            if (this.head) this.head.prev = null;
            else this.tail = null;
        } else if (current === this.tail) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }

        this.size--;
        return true;
    }

    // reverse: membalik urutan list - O(n)
    reverse() {
        let current = this.head;
        let temp = null;

        while (current) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }

        if (temp) {
            this.tail = this.head;
            this.head = temp.prev;
        }
    }

    // print: menampilkan dari depan dan dari belakang - O(n)
    print() {
        let forward = '';
        let current = this.head;
        while (current) {
            forward += current.next ? `[${current.data}] <-> ` : `[${current.data}]`;
            current = current.next;
        }
        console.log('Forward:', forward);

        let backward = '';
        current = this.tail;
        while (current) {
            backward += current.prev ? `[${current.data}] <-> ` : `[${current.data}]`;
            current = current.prev;
        }
        console.log('Backward:', backward);
        console.log(`size: ${this.size}`);
    }
}

//--- demonstrasi penggunaan DoublyLinkedList ---
if (require.main === module) {
    const dll = new DoublyLinkedList();

    console.log('=== append ===');
    dll.append(10);
    dll.append(20);
    dll.append(30);
    dll.print();

    console.log('\n=== prepend ===');
    dll.prepend(5);
    dll.print();

    console.log('\n=== insertAt(25, 3) ===');
    dll.insertAt(25, 3);
    dll.print();

    console.log('\n=== delete(20) ===');
    dll.delete(20);
    dll.print();

    console.log('\n=== reverse ===');
    dll.reverse();
    dll.print();


}
