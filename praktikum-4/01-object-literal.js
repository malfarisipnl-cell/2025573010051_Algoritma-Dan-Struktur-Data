// Mempelajari  Objek literasi.js
//=====================================

// --- membuat objek literal ---
const mahasiswa = {
    nama    : 'Budi santoso',
    umur    : 20,
    jurusan : 'Teknik Informatika',
    ipk     : 3.75,
    aktif   : true,
};

// --- mengakses property ---
console.log('=== Akses property ===');
console.log('Nama    :', mahasiswa.nama);       // tidak notation . untuk mengakses property
console.log('jurusan :', mahasiswa['jurusan']); // breket notation

//braket notation berfungsi apabila key di simpan di variabel
const keyyangdicari = 'ipk';
console.log('ipk     :', mahasiswa[keyyangdicari]);    // berguna!

// --- menambahkan dan mengubah property ---
mahasiswa.email = 'budi@email.com'; // menambahkan property baru
mahasiswa,umur  = 21;               // mengubah property yang ada

console.log('\n=== Setelah diubah:', mahasiswa);

// --- menghapus property ---
delete mahasiswa.aktif; // menghapus property
console.log('\n=== Setelah dihapus:', mahasiswa);

// --- menamah method ke object ---
const dosen = {
    nama        : 'dr. Ahmad fauzzi',
    matakuliah  : 'struktur data',
    pengalaman  : 10, //tahun

//---methode function di dalam object ---
perkenalan() {
    console.log(`Halo, nama saya ${this.nama}, saya dosen ${this.matakuliah}`);
},

statussenior() {
    if (this.pengalaman >= 10) {
        return `${this.nama} adalah dosen senior.`;
    } 
    return `${this.nama} adalah dosen junior.`;
    }
};

console.log('\n=== method object ===');
console.log(dosen.perkenalan());
console.log(dosen.statussenior());

// --- iterasi key-value menggunakan for in ---
console.log('\n=== iterasi object ===');
for (const key in dosen) {
    if (typeof dosen[key] !== 'function') {
        console.log(`${key} : ${dosen[key]}`);
    }
}

// object.key(), object.values(), object.entries()
console.log('keys :', Object.keys(mahasiswa));
console.log('values :', Object.values(mahasiswa));

// --- tugas ---
//===============================================================

//--- membuat object buku ---

const buku = {
    judul       : 'belajar javascript',
    penerbit    : 'budi santoso',
    tahunTerbit : '2022',
    harga       : '50000',
    tersedia    : 'true',
};

// --- mengakses property ---
console.log('=== akses property ===');
console.log('judul       :', buku.judul);
console.log('penerbit    :', buku.penerbit);
console.log('tahunTerbit :', buku.tahunTerbit);
console.log('harga      :', buku.harga);
console.log('tersedia    :', buku.tersedia);

// --- membuat methode ---
console.log('\n=== method object ===');
buku.tampilBuku = function () {
    console.log(`\nJudul       : ${this.judul}`);
    console.log(`Penerbit    : ${this.penerbit}`);
    console.log(`Tahun Terbit: ${this.tahunTerbit}`);
    console.log(`Harga       : ${this.harga}`);
    console.log(`Tersedia    : ${this.tersedia}`);
};

// --- menambahkan diskon ---
buku.diskon = function (diskon) {
    this.harga = this.harga - (this.harga * 0.9. diskon / 100);
};

buku.tampilBuku();
buku.diskon(10);

// --- membuat array koleksi buku ---
const koleksiBuku = [
    {
        judul       : 'belajar web dasar',
        penerbit    : 'ziyan susilo',
        tahunTerbit : '2026',
        harga       : '74000',
        tersedia    : 'true',
    },
    {
        judul       : 'belajar algoritma dan struktur dasar',
        penerbit    : 'randy budiono',
        tahunTerbit : '2021',
        harga       : '45000',
        tersedia    : 'false',
    }
];

// --- menambahkan forEach untuk koleksi buku ---

koleksiBuku.forEach((buku) => {
    console.log(`\nJudul       : ${buku.judul}`);
    console.log(`Penerbit    : ${buku.penerbit}`);
    console.log(`Tahun Terbit: ${buku.tahunTerbit}`);
    console.log(`Harga       : ${buku.harga}`);
    console.log(`Tersedia    : ${buku.tersedia}`);
});

//  menambahkan filter untuk melihat apa buku tersedia atau tidak

const bukutersedia = koleksiBuku.filter((buku) => buku.tersedia === 'true');
console.log('\n=== buku tersedia ===');
bukutersedia.forEach((buku) => {
    console.log(`\nJudul       : ${buku.judul}`);
    console.log(`Penerbit    : ${buku.penerbit}`);
    console.log(`Tahun Terbit: ${buku.tahunTerbit}`);
    console.log(`Harga       : ${buku.harga}`);
    console.log(`Tersedia    : ${buku.tersedia}`);
});
