// --- 04-array-method.js
//===============================================================
// membuat methode iterasi dengan menggunakan forEach, map, filter, dan reduce
//===============================================================

const nilaiMahasiswa = [75, 90, 82, 68, 95, 48, 77];

// ---  fungsi forEach untuk menjalankan sesuatu di setia[p elemen ---
console.log("=== forEach: Tampilkan Semua Nilai ===");
nilaiMahasiswa.forEach((nilai, indeks) => {
  console.log(` Mahasiswa-${indeks + 1}: ${nilai}`);
});

// --- map berfungsi sebagai transformasi setiap menjadi nilai baru ---

// cara konversi nilai angka menjadi grade huruf
const gradeHuruf = nilaiMahasiswa.map((nilai) => {
  if (nilai >= 90) return "A";
  if (nilai >= 80) return "B";
  if (nilai >= 70) return "C";
  if (nilai >= 60) return "D";
  return "E";
});
console.log("\n=== map: Nilai ke Grade ===");
console.log("Nilai :", nilaiMahasiswa);
console.log("Grade :", gradeHuruf);

// --- filter berfungsi sebagai penyaringan elemen yang memenuhi kondisi ---
// membuat filter
const nilaiLulus = nilaiMahasiswa.filter((nilai) => nilai >= 60);
const nilaiGagal = nilaiMahasiswa.filter((nilai) => nilai < 60);

console.log("\n=== filter: Lulus dan Tidak Lulus ===");
console.log("Semua nilai :", nilaiMahasiswa);
console.log("Nilai lulus :", nilaiLulus);
console.log("Nilai gagal :", nilaiGagal);

// --- reduce  berfungsi mereduksi array menjadi satu nilai ---
const totalNilai = nilaiMahasiswa.reduce((akumulator, nilai) => {
  return akumulator + nilai;
}, 0); // 0 adalah nilai defaul akumulator

const rataRata = totalNilai / nilaiMahasiswa.length;

console.log("\n=== reduce: Statistik Nilai ===");
console.log("Total nilai :", totalNilai);
console.log("Rata-rata :", rataRata.toFixed(2));

// ---Menggabungkan beberapa methode menjadi satu (method chaining) ---
const rataRataNilaiLulus = nilaiMahasiswa
  .filter((nilai) => nilai >= 60) // mengambil dari yang lulus terlebih dulu
  .reduce((acc, val, idx, arr) => {
    return acc + val / arr.length; // bagi saat proses
  }, 0);

console.log("\n=== Method Chaining ===");
console.log("Rata-rata nilai lulus:", rataRataNilaiLulus.toFixed(2));

// LATIHAN: ANALISIS DATA PRODUK
const produk = [
  { nama: "Laptop", harga: 8500000, stok: 5 },
  { nama: "Mouse", harga: 150000, stok: 0 },
  { nama: "Keyboard", harga: 450000, stok: 12 },
  { nama: "Monitor", harga: 3200000, stok: 0 },
  { nama: "Headset", harga: 350000, stok: 8 },
];

console.log("\n\n=== Produk Tersedia ===");
produk
  .filter((filterProduk) => filterProduk.stok > 0)
  .forEach((produk) => {
    console.log(
      `Nama: ${produk.nama}, Harga: ${produk.harga}, Stok: ${produk.stok}`,
    );
  });

console.log("\n=== Status Produk ===");
produk
  .map((mapProduk) => {
    return {
      nama: mapProduk.nama,
    };
  })
  .forEach((produk) => {
    console.log(produk);
  });

console.log("\n=== Total Nilai Stok ===");
const totalNilaiStok = produk.reduce((total, produk) => {
  return total + produk.harga * produk.stok;
}, 0);
console.log(`Total nilai stok: ${totalNilaiStok}`);

produk.forEach((produk) => {
  if (produk.stok > 0) {
    console.log(
      `[TERSEDIA] ${produk.nama} -${produk.harga} [${produk.stok} unit]`,
    );
  } else {
    console.log(`[HABIS] ${produk.nama} - ${produk.harga}`);
  }
});
