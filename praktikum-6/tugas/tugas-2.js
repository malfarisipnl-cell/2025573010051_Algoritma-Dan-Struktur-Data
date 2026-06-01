//---Membuat node dan fungsi-fungsi untuk LikedList---

class node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// membuat linkedlist dari array, dan kembalikan head dari linkedlist
function fromArray(arr) {
    let head = null, tail = null;
    for (const v of arr) {
        const newNode = new node(v);
        if (!head) head = tail = newNode;
        else  { tail.next = newNode; tail = newNode;}
    }
    return head;
}

// membuat konversi linked list ke array (untuk verifikasi)
function toArray(head) {
    const out = [];
    let cur =head;
    while (cur) { out.push(cur.data); cur = cur.next; }
    return out;
}

// fungsi untuk memeriksa apakah linked list merupakan palindrome
function palindromLL(head) {
    const arr = [];
    let cur = head;
    while (cur) {arr.push(cur.data); cur = cur.next; }
    let i = 0, j = arr.length - 1; 
    while (i < j) {
        if (arr[i] !== arr[j]) return false;
        i++; j--;  
    }
    return true;
}

// hapus n dari akhir (head, n)
function hapusNDariAkhir(head, n) {
    const dummy = new node(null);
    dummy.next = head;
    let fast = dummy, slow = dummy;
    for (let i = 0; i < n; i++){
        if (!fast.next) return head; // jika n > panjang = tidak akan berubah
        fast = fast.next;
    }

    // maju sampai fast mencapai akhir
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    // slow.next = node yang akan dihapus
    slow.next = slow.next ? slow.next.next : null;
    return dummy.next;
}

// kompleksitas: O(n) waktu, O(1) ruang.
function tengahLinkedList(head) {
    if (!head) return null;
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow; // jika nilai genap, maka slow akan berada pada node tengah kedua
}

// contoh kasus per fungsi
function test() {
    //palidromLL 
    console.log(palindromLL(fromArray([10, 20, 30, 20, 10])) === true);
    console.log(palindromLL(fromArray([10, 20, 30, 40])) === false);
    console.log(palindromLL(fromArray([10])) === true);

    //menghapusNdariakhir
    console.log(toArray(hapusNDariAkhir(fromArray([10, 20, 30, 40, 50]), 2))); // [10, 20, 30, 50]
    console.log(toArray(hapusNDariAkhir(fromArray([10,20]), 2))); //[20] (menghapus head)
    console.log(toArray(hapusNDariAkhir(fromArray([10,20,30]), 4))); // n > len -> [10,20,30] tidak berubah

    //tengahLinkedList
    console.log(tengahLinkedList(fromArray([1,2,3])).data === 2);
    console.log(tengahLinkedList(fromArray([1,2,3,4])).data === 3); //node tengah kedua
    console.log(tengahLinkedList(fromArray([1])).data === 1);
}

if (require.main === module) test();