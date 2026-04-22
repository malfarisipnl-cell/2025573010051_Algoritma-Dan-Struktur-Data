// Fungsi untuk benchmark berbagai kompleksitas
function fn_O1(n) {
    return n + 1; // O(1) - operasi konstan
}

function fn_On(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i; // O(n) - loop linear
    }
    return sum;
}

function fn_OnLogn(n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n; j *= 2) {
            count++; // O(n log n) - loop luar n, dalam log n
        }
    }
    return count;
}

function fn_On2(n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            count++; // O(n²) - nested loop
        }
    }
    return count;
}

// Fungsi benchmarkSemua
function benchmarkSemua(ukuranData) {
    console.log('=== Benchmark Kompleksitas Algoritma ===\n');

    for (const n of ukuranData) {
        console.log(`Ukuran data: ${n}`);
        console.log('-------------------');

        // Ukur waktu untuk setiap fungsi
        const startO1 = Date.now();
        fn_O1(n);
        const timeO1 = Date.now() - startO1;
        console.log(`O(1): ${timeO1} ms`);

        const startOn = Date.now();
        fn_On(n);
        const timeOn = Date.now() - startOn;
        console.log(`O(n): ${timeOn} ms`);

        const startOnLogn = Date.now();
        fn_OnLogn(n);
        const timeOnLogn = Date.now() - startOnLogn;
        console.log(`O(n log n): ${timeOnLogn} ms`);

        const startOn2 = Date.now();
        fn_On2(n);
        const timeOn2 = Date.now() - startOn2;
        console.log(`O(n²): ${timeOn2} ms`);

        console.log(''); // Baris kosong
    }

    // Komentar observasi
    console.log('=== Observasi Pola Pertumbuhan ===');
    console.log('O(1): Waktu konstan, tidak berubah dengan n. Konsisten dengan teori.');
    console.log('O(n): Waktu meningkat linear dengan n. Untuk n=100 ke 1000 (10x), waktu ~10x. Konsisten.');
    console.log('O(n log n): Lebih cepat dari O(n²) tapi lebih lambat dari O(n). Untuk n besar, log n signifikan. Konsisten.');
    console.log('O(n²): Waktu meningkat drastis (kuadratik). Untuk n=100 ke 1000 (10x), waktu ~100x. Konsisten, tapi tidak scalable.');
    console.log('Secara keseluruhan, pola pertumbuhan konsisten dengan teori Big O: O(1) < O(n) < O(n log n) < O(n²).');
}

// Panggil benchmarkSemua dengan ukuran data yang diberikan
benchmarkSemua([100, 500, 1000, 5000, 10000]);
