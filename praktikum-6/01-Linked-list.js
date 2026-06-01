class Node {
    constructor(d) {
        this.data=d;
        this.next=null;
    }
}

// --- membuat class linkedlist ----
class LinkedList {
    constructor () {
        this.head = null;
        this.size = 0;
    }

    // menambahkan node di akhir - 0(n)
    append (data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) current = current.next; // untuk mengantar point ke akhir
            current.next = newNode;
            }
            this.size++;
        }
    // membuat node untuk  bagian awal - 0(1)
    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }
    // menambahkan node di posisi tertentu - 0(n)
    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            console.log ('index di luar batas!'); return;
        }
        if (index === 0) {this.prepend(data); return; }
        const newNode = new Node(data);
        let current = this.head;
        for (let i = 0; i < index - 1; i++) current = current.next;
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
    }

    // menghapus node yang sesuai dengan nilai - 0(n)
    delete(data){
        if (!this.head) return false;
        if (this.head.data === data) {
            this.head = this.head.next;
            this.size--;
            return true;
        }
        let current = this.head;
        while (current.next && current.next.data !== data) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
            this.size--;
            return true;
        }
        
    return false;
    }
    // Unntuk mencari node berdasarkan point - o(n)
    search (data) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.data === data) return index;
            current = current.next;
            index++;
        }
        return -1;
    }
    // untuk menampilkan semua Node - o(n)
    print() {
        if (!this.head) { console.log (' [List kosong]'); return; }
        let result = '';
        let current =this.head;
        while (current) {
            result += current.next ? `[${current.data}] -> ` : `[${current.data}]`;
            current = current.next;
        }
        console.log(' ', result, ` (size: ${this.size})`);
    }

    // Balik urutan list - o(n)
    reverse() {
        let prev    = null;
        let current = this.head;
        while (current) {
            const next = current.next;   // untuk menyimpan next sementara
            current.next = prev;        // untuk membalik pointer 
            prev    = current;          // untuk  prev maju 
            current =next;              // untuk mengeser current maju
        }
        this.head = prev;  // head ini ada di bagian node terakhir 
    }

    // ambil data di posisi index, null jika index invalid - o(n)
    getAt(index) {
        if (index < 0 || index >= this.size) return null;
        let current = this.head;
        let i = 0;
        while (i < index) {
            current = current.next;
            i++;
        }
        return current.data;
    }

    // hapus node di posisi index - o(n)
    deleteAt(index) {
        if (index < 0 || index >= this.size) return false;
        if (index === 0) {
            this.head = this.head.next;
            this.size--;
            return true;
        }
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        current.next = current.next.next;
        this.size--;
        return true;
    }

    // cari index berdasarkan data, -1 jika tidak ditemukan - o(n)
    indexOf(data) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.data === data) return index;
            current = current.next;
            index++;
        }
        return -1;
    }

    // apakah list kosong? - o(1)
    isEmpty() {
        return this.size === 0;
    }

    // hapus semua node - o(1)
    clear() {
        this.head = null;
        this.size = 0;
    }

    // untuk mengkonfersikan ke array (inpeksi) - o(n)
    toArray (){
        const arr = [];
        let current = this.head;
        while (current) { arr.push(current.data); current = current.next;}
        return arr;
    }
}

// --demonstrasi ----
if (require.main === module) {
    const ll = new LinkedList();

    console.log('=== Append ===');
    ll.append(10); ll.append(20); ll.append(30); ll.append(40);
    ll.print ();

    console.log ('\n=== prepend ===');
    ll.prepend(5);
    ll.print ();

    console.log('\n===prepend ===');
    ll.prepend(5);
    ll.print();

    console.log('\n search ===');
    console.log(' indeks nilai 20:', ll.search(20));
    console.log(' indeks nilai 99:', ll.search(99));
    console.log('\n=== Delete 20 ===');
    ll.delete(20);
    ll.print();

    console.log ('\n=== Reverse ===');
    ll.reverse();
    ll.print();

    console.log('\n=== Test method baru ===');
    console.log('getAt(2):', ll.getAt(2));
    console.log('indexOf(30):', ll.indexOf(30));
    console.log('indexOf(99):', ll.indexOf(99));
    console.log('isEmpty():', ll.isEmpty());
    console.log('deleteAt(1):', ll.deleteAt(1));
    ll.print();
    ll.clear();
    console.log('setelah clear, isEmpty():', ll.isEmpty());
    console.log('toArray() setelah clear:', ll.toArray());
}

module.exports = { LinkedList };