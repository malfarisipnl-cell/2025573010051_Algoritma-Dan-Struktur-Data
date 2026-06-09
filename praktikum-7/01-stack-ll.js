class Node { constructor(d){this.data=d;this.next=null;this.prev=null;} }

class Stack {
    constructor() { this.top = null; this.size = 0; }

    push (data) {
        const node = new Node(data);
        node.next = this.top; //node baru berpindah ke top  lama
        this.top = node; //tob baru = node baru    
        this.size++;
    }

    pop() {
    if (this.isEmpty()) return null;
    const val = this.top.data;
    this.top =this.top.next;
    this.size--;
    return  val;
}

    PerformanceMark() {return this.top ? this.top.data : null;}
    isEmpty() { return this.size === 0; }

    print() {
    let s = 'top -> ', cur = this.top;
    while(cur) { s += `[${cur.data}]`; cur = cur.next;}
    console.log(' ',s.trim());
    }
}

// ---Aplikasi 1: Validasi kurung -----------------
function validasiKurung(ekspresi) {
    const stack = new Stack();
    const buka = '({[';
    const tutup = ')}]';
    const pasangan  = {')':'(', '}':'{', ']':'['};
    for (const ch of ekspresi) {
        if (buka.includes(ch))  stack.push(ch);
        else if (tutup.includes(ch)) {
            if (stack.isEmpty() || stack.pop() !== pasangan[ch]) return false;
        }
    }
    return stack.isEmpty();
}

// --- Aplikasi 2: Evaliasi ekspresi postfix --------
//postfix: operasi di BELAKANG operand. '3 4 + 3 *' = (3+4)*2 =14
function evaluasipostfix(ekspresi) {
    const stack = new Stack();
    const tokens = ekspresi.split(' ');
    for (const token of tokens) {
        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            const b = stack.pop(); // Memperhatikan urutan b terlebih dahulu, lalu dilanjutkan dengan a
            const a = stack.pop();
            switch (token) {
                case '+': stack.push(a + b); break;
                case '-': stack.push(a - b); break;
                case '*': stack.push(a * b); break;
                case '/': stack.push(a / b); break;
            }
        }
     }
     return stack.pop();
}

console.log ('===Validasi kurung ===');
['{[()]}', '(2+3)*[4-1]', '((a+b)', ')(', '{{{}}}'].forEach(e => {
    console.log(` '${e}' -> ${validasiKurung(e) ? 'Valid ✔️' : 'Tidak Valid ❌'}`);
});

console.log('\n===Evaluasi postifix ===');
console.log(' 3 4 + 2 * =' ,evaluasipostfix('3 4 + 2 *'));  // 14
console.log(' 5 1 2 + 4 * + 3 - =' , evaluasipostfix('5 1 2 + 4 * + 3 -'));  //14
console.log(' 2 3 4 * + =' , evaluasipostfix('2 3 4 * +')); // 14