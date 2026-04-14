// --- 03-array-dasar.js
//===============================================================
// membuat array :deklarasi, akses, dan manipulasi

// pembuatan array ---
const mahasiswa = ["Budi", "Siti", "Ahmad", "Rina"];
const nilai = [85, 92, 95, 88];
console.log("=== Array Awal ===");
console.log("Mahasiswa:", mahasiswa);
console.log("Nilai :", nilai);
console.log("Jumlah mahasiswa:", mahasiswa.length);

// --- akses elemen array ---
console.log("\n=== Akses Elemen ===");
console.log("Elemen pertama :", mahasiswa[0]); // memulai indeks 0
console.log("Elemen ketiga :", mahasiswa[2]); // memulai indeks 2
console.log("Elemen terakhir:", mahasiswa[mahasiswa.length - 1]);

// --- merubah element ---
mahasiswa[1] = "Siti Rahayu"; // merubah elemen ke indeks 1
console.log("\nSetelah diubah:", mahasiswa);

// --- Menambahkan dan juga menghapuskan elemen ---
console.log("\n=== Manipulasi Array ===");
mahasiswa.push("Doni"); // menambahkan elemen di akhir array
console.log("Setelah push   :", mahasiswa);

mahasiswa.unshift("Zahra"); // menambah di awal
console.log("Setelah unshift :", mahasiswa);

const dihapusAkhir = mahasiswa.pop(); // menghapus dari akhir
console.log("Dihapus (pop) :", dihapusAkhir);
console.log("Setelah pop :", mahasiswa);

const dihapusAwal = mahasiswa.shift(); // menghapus dari awal
console.log("Dihapus (shift) :", dihapusAwal);
console.log("Setelah shift :", mahasiswa);

// --- mencari elemen dalam array ---
console.log("\n=== Pencarian ===");
console.log("Indeks Ahmad :", mahasiswa.indexOf("Ahmad"));
console.log("Ada Rina? :", mahasiswa.includes("Rina"));
console.log("Ada Budi? :", mahasiswa.includes("Budi"));

// --- mengiris array dengan alice ---
const sebagian = nilai.slice(1, 4); // dari indeks 1 sampai sebelum 4
console.log("\nNilai asli :", nilai);
console.log("Slice [1,4] :", sebagian);

// LATIHAN MANAJEMEN DAFTAR BELANJA
const daftarBelanja = ["Susu", "Roti", "Telur"];
console.log("\n=== Daftar Belanja Awal ===");
for (let i = 0; i < daftarBelanja.length; i++) {
  console.log(daftarBelanja[i]);
}

daftarBelanja.push("Beras");
daftarBelanja.push("Gula");
console.log("\n=== Daftar Belanja Baru ===");
for (let i = 0; i < daftarBelanja.length; i++) {
  console.log(daftarBelanja[i]);
}

daftarBelanja.shift(0);

console.log("\n=== Daftar Belanja Terbaru ===");
for (let i = 0; i < daftarBelanja.length; i++) {
  console.log(daftarBelanja[i]);
}

console.log(`Adakah susu? ${daftarBelanja.includes("Susu")}`);
