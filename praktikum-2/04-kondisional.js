// 04-kondisional.js
// =============================
// KONDISIONAL if/else, switch, ternary
// =============================

// --- IF / ElSE IF / ELSE: KONVERSI NILAI KE GRADE ---
let nilaiUjian = 78;

console.log('=== Konversi Nilai ke Grade ===');
console.log(`Nilai: ${nilaiUjian}`);

if (nilaiUjian >= 90) {
    console.log('Grade: A (sangat baik)');
} else if (nilaiUjian >= 80) {
    console.log('Grade: B (baik)');
} else if (nilaiUjian >= 70) {
    console.log('Grade: C (cukup)');
} else if (nilaiUjian >= 60) {
    console.log('Grade: D (kurang)');
} else {
    console.log('Grade: E (tidak lulus)');
}

// --- swich: cek nama hari ---
let namaHari = 'Minggu';

console.log('\n=== Cek jenis hari ===');
switch (namaHari) {
    case 'Senin':
    case 'Selasa':
    case 'Rabu':
    case 'Kamis':
    case 'Jumat':
        console.log(`${namaHari} adalah hari kerja`);
        break;
    case 'Sabtu':
    case 'Minggu':
        console.log(`${namaHari} adalah akhir pekan`);
        break;
    default:
        console.log('NamaHari tidak dikenal.');
}

  // --- ternary operator: cek kelulusan ---
    let nilai = 65;
    let status = nilai >= 60 ? 'Lulus' : 'Tidak Lulus';

        console.log('\n=== status Kelulusan ===');
        console.log(`Nilai ${nilai}: ${status}`);


        // latihan 2: konversi musim dan status cuaca
        let bulan = 7; // Juli
        console.log('\n=== Konversi Bulan ke Musim ===');
        console.log(`Bulan: ${bulan}`);
        let musim;

        if (bulan >= 12 && bulan <= 3) {
            musim = 'Musim Dingin';
        } else if (bulan >= 6 && bulan <= 8) {
            musim = 'Musim Panas';
        }else if (bulan >=9 && bulan <= 11)  {
            musim = 'Musim Gugur';
        } else if (bulan >= 4 && bulan <= 5) {
            musim = 'Musim Semi';
        } else {
            musim = 'Bulan tidak valid';
        }
        console.log('\n=== Konversi Bulan ke Musim ===');
        console.log(`Bulan: ${bulan} --> ${musim}`);

        // cuaca berawan dan berangin ---
    
        const adaawan = true;
        const adaanggin = false;

        let statusCuaca = adaawan && adaanggin ? 'Cuaca Buruk' : 'Cuaca Baik';
        console.log('\n=== Status Cuaca ===');
        console.log(`Ada Awan: ${adaawan}, Ada Angin: ${adaanggin} --> ${statusCuaca}`);
    