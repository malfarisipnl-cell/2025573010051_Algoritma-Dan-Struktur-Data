// Fungsi A: function fn(n) { return n * 2; } → Big O: O(1), operasi aritmatika sederhana yang tidak tergantung pada ukuran input n.
function fnA(n) {
    return n * 2;
}

// Fungsi B: for (let i=0; i<n; i++) for (let j=0; j<n; j++) console.log(i,j); → Big O: O(n^2), ada dua loop bersarang, masing-masing berjalan n kali, menghasilkan n*n operasi.
function fnB(n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            count++; // Operasi dummy untuk mensimulasikan kompleksitas tanpa output
        }
    }
    return count;
}

// Fungsi C: for (let i=1; i<n; i*=2) console.log(i); → Big O: O(log n), loop berjalan dengan i dikalikan 2 setiap iterasi, sehingga jumlah iterasi adalah log2(n).
function fnC(n) {
    for (let i = 1; i < n; i *= 2) {
        console.log(i);
    }
}

// Fungsi D: arr.forEach(x => arr.forEach(y => arr.forEach(z => console.log(x,y,z)))); → Big O: O(n^3), tiga loop bersarang forEach, masing-masing atas array panjang n, menghasilkan n*n*n operasi.
function fnD(n) {
    const arr = Array.from({ length: n }, (_, i) => i);
    let count = 0;
    arr.forEach(x => arr.forEach(y => arr.forEach(z => {
        count++; // Operasi dummy untuk mensimulasikan kompleksitas tanpa output
    })));
    return count;
}

// Function hitungKompleksitas(n, fn) yang menjalankan fn(n) dan mencetak waktu eksekusi.
function hitungKompleksitas(n, fn, ...args) {
    const start = Date.now();
    fn(n, ...args);
    const end = Date.now();
    console.log(`Waktu eksekusi untuk ${fn.name}: ${end - start} ms`);
}

// Jalankan setiap fungsi untuk n=1000 dan ukur waktunya.
const n = 1000;

console.log('=== Mengukur Waktu Eksekusi untuk n=1000 ===');

hitungKompleksitas(n, fnA);
hitungKompleksitas(n, fnB);
hitungKompleksitas(n, fnC);
hitungKompleksitas(n, fnD); 