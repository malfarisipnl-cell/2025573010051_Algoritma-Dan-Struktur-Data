// membuat pryek pengukuran perbedaan perm=forma algoritma secara empiris

// fungsi bantuan: mengukur waktu eksekusi
function ukurWaktu(label, fn) {
    const mulai = Date.now();
    fn();
    const selesai = Date.now();
    console.log(`${label}: ${selesai - mulai} ms`);
}
    const N = 100_00; // ukuran data : 100 ribu

    // --- Algoritma A: o(n) - loop satu kali ---
    function jumlahkanLinear(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) total  += 1;
        return total;
}

// --- Algoritma B: o(1) - rumus matematika ---
const jumlahkanRumus= (n) => {
    return (n * (n + 1)) / 2;
}

// --- Algoritma B: o(1) - rumus matematika ---
function caripasangan (arr) {
    const pasangan = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 10) 
                pasangan.push([arr[i], arr[j]]);
            }
        }
    return pasangan;
}

 const data = Array.from({length: 5000}, (_, i) => i);

 console.log('=== Perbandingan Waktu Eksekusi ===');
 ukurWaktu('o(1) jumlahkanRumus  ', () => jumlahkanRumus(N));
 ukurWaktu('o(n) jumlahkanLinear ', () => jumlahkanLinear(N));
 ukurWaktu('o(n^2) caripasangan ', () => caripasangan(data));

 console.log('\nHasil sama?', jumlahkanLinear(100) === jumlahkanRumus(100));
 