// 05-perulangan.js
// =============================
// perulangan for, while,break, continue
// =============================

// --- for loop ---

// struktur: for (inisialisasi; kondisi; update)
console.log('=== For loop: hitung 1 sampai 5 ===');
for (let i = 1; i <= 5; i++) {
    console.log(`iteraksi ke-${i}`);
}

// --- while loop ---
console.log('=== While loop: countdown ===');
let j = 5;
while (j >= 0) {
    console.log(`hitung mundur: ${j}`);
    j--; // Wajib kurangi nilai agar loop tidak berjalan selamanya
}
console.log(`selesai!`);

// --- for loop mencetak bilangan genap ---
console.log('\n=== bilangan genap antara 1-30 ===');
for (let i = 2; i <= 30; i += 2) {
   if (i % 2 === 0) { // jika habis dibagi 2, (sisa = 0), maka genap
       console.log(`bilangan genap: ${i}`);
       process.stdout.write(i + ' '); // cetak di baris yang sama
   }
}
console.log(''); // pindah baris

// --- break dan continue ---
console.log('\n=== Break dan Continue ===');
for (let i = 1; i <= 30; i++) {
    if (i === 4) {
        console.log(`melewati angka ${i} (continue)`);
        continue; // lewati angka 4, lanjut ke i=5
    }   
    if (i === 8) {
        console.log(`berhenti di angka ${i} (break)`);
        break; // hentikan lopp di angka 8
    } 
    console.log(`angka: ${i}`);
}   

// --- latihan 3: segitiga bintang dan deret fibonacci ---
console.log('\n=== Segitiga Bintang ===');
let tinggi = 5; 
for (let i = 1; i <= tinggi; i++) {
    console.log('*'.repeat(i)); // cetak i bintang di setiap baris
}   

// --- deret fimbonacci menggunakan for loop  ---

console.log('\n=== Deret Fibonacci ===');
let n = 10;
let a = 0, b = 1;
console.log(`Deret Fibonacci pertama ${n} angka:`);
for (let i = 1; i <= n; i++) {
    console.log(a); // cetak angka saat ini
    let temp = a; // simpan nilai a sementara
    a = b; // update a ke nilai b
    b = temp + b; // update b ke jumlah a dan b sebelumnya
}   