// 02-arrow-callback.js
//===============================================================

// --- Membuat function dengan arrow ---
// --- function cara lama, menggunakan declaration ---
    function kuadratBiasa (x) {
        return x * x;
    }

// function cara baru, menggunakan arrow function
    const kuadratArrow = (x) => {
        return x * x;
    };

// cara ringkas function arrow mengimmplicit return
    const kuadratRingkas = x => x * x; 
  
    console.log('=== Perbandingan Penulisan ===');
    console.log('Biasa :', kuadratBiasa(5)); 
    console.log('Arrow :', kuadratArrow(5)); 
    console.log('Ringkas :', kuadratRingkas(5));

// --- membuat arrow function dengan beberapa parameter ---
    const luas = (panjang, lebar) => panjang * lebar;
    const salam = (nama, waktu) => `Selamat ${waktu}, ${nama}!`;
    console.log('Luas 4x6 :', luas(4, 6));
    console.log(salam('Budi', 'Pagi'));

// ---  memanggil kembali function dengan callback sebagai argumen ---
    function lakukanOperasi(angka, operasiCallback) {
        console.log(`Angka awal: ${angka}`);
        const hasil = operasiCallback(angka);
        console.log(`Hasil setelah operasi: ${hasil}`);
}
    console.log('\n=== Callback ===');
    lakukanOperasi(7, kuadratRingkas); // mengirimmkan function sebagai argument
    lakukanOperasi(10, x => x + 100); // mengirim arrow function secara langsung
    lakukanOperasi(20, function(x) { // mengirim function biasa secara langsung
    return x / 2;
});

// --- settimeout untuk contoh penggunaan callback ---
    console.log('\n=== setTimeout dengan Callback ===');
    console.log('pesan 1: sebelum timer');

    setTimeout(() => {
        console.log('pesan 3: ini dari dalam setTimeout (setelah 1 detik)');
        }, 1000); //mili detik 

        console.log('pesan 2: setelah mendaftarkan timer');


// LATIHAN 2 PIPELINE TRANSFORMASI
const keHurufBesar = (str) => str.toUpperCase();
const tambahTandaSeru = (str) => str + "!";
const hitungKata = (str) => str.split(" ").length;

function prosesTeks(teks, transformasiCallback) {
  return transformasiCallback(teks);
}

console.log("\n=== Pipeline Transformasi ===");
const teksAwal = "Belajar JavaScript itu menyenangkan";
const hasilTransformasi = prosesTeks(teksAwal, (teks) => {
  const besar = keHurufBesar(teks);
  const seru = tambahTandaSeru(besar);
  const jumlahKata = hitungKata(seru);
  console.log(`Teks awal: ${teks}`);
  return `Besar: ${besar}, Transformasi: ${seru} (Jumlah kata: ${jumlahKata})`;
});
console.log(hasilTransformasi);


