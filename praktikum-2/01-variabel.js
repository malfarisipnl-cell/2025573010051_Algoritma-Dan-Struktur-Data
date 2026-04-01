// 01-variabel.js
//============================
// VARIABEL DAN DEKLARASI
// =============================

// Deklarasikan dengan let (nilai bisa diubah) ---
let nama = "Alfarisi";
let umur = 19;
let kota = 'Aceh Utara';

console.log('=== Data Mahasiswa ===');
console.log('Nama: ' + nama);
console.log('Umur: ' + umur);
console.log('Kota: ' + kota);

//--- Mengubah nilai let ---
umur = 20; // Alfarisi ulang tahun!
console.log('Ulang tahun! umur sekarang:', umur);

// --- Deklarasikan dengan const (nilai tidak bisa diubah) ---
const jurusan = 'Teknik informatika';
const tahunmasuk = 2025;

console.log('Jurusan    :', jurusan);
console.log('Tahun Masuk:', tahunmasuk);

// --- Coba hapus '//' di baris bawah ini, lalu jalankan ulang ---
// jurusan = Sistem informasi' : // --> ini akan menyebabkan Error!