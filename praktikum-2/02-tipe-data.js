// 02-tipe-data.js
// =============================
// Mengenal sistem data javascript
// =============================

// ---1. string (teks) ---
let namaMahasiswa = 'Alfarisi';
let ProgramStudi = "Teknik Informatika";

// Template literal: gunakan backticks (`) untuk menggabugkan teks & variabel
let perkenalan = `Halo, nama saya ${namaMahasiswa} dari ${ProgramStudi}.`;
console.log(perkenalan);
console.log('panjang nama:);', namaMahasiswa.length);

// ---2. number (angka) ---
let nilaiUjian = 87;    //bilangan bulat
let ipk        = 3.75;  //bilangan desimal
let suhuKulkas = -4;   //bilangan negatif

console.log('Nilai Ujian:', nilaiUjian);
console.log('IPK        :', ipk);
console.log('Suhu Kulkas:', suhuKulkas);
console.log(nilaiUjian + ipk);

// ---3. Boolean (true/false) ---
let sudahLogin  = true;
let sudahLulus  = false;

console.log('Sudah Login:', sudahLogin);
console.log('Sudah Lulus:', sudahLulus);

// ---4. null (nilai kosong yang disengaja) ---
let fotoprofil = null; // belum ada foto 
    console.log('Foto Profil:', fotoprofil);

// ---5. UNDERFINED (belum diberi nilai) ---
let nomorTelepon; ;
console.log('No. Telepon:', nomorTelepon); 

// --- mengecek tipe data dengan typeof ---

console.log('--- tipe data ---');
console.log('namaMahasiswa:', typeof namaMahasiswa);
console.log('nilaiUjian   :', typeof nilaiUjian);
console.log('sudahLogin   :', typeof sudahLogin);
console.log('fotoprofil   :', typeof fotoprofil);
console.log('nomorTelepon :', typeof nomorTelepon);
