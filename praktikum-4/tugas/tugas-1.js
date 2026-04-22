class Produk {
  constructor(id, nama, harga, stok) {
    this.id = id;
    this.nama = nama;
    this.harga = harga;
    this.stok = stok;
  }

  info() {
    return `ID: ${this.id} | ${this.nama} | Harga: Rp${this.harga.toLocaleString()} | Stok: ${this.stok}`;
  }


  tersedia() {
    return this.stok > 0;
  }

  jual(jumlah) {
    if (jumlah <= 0) {
      console.log("Error: jumlah harus lebih dari 0.");
      return;
    }
    if (jumlah > this.stok) {
      console.log("Error: stok tidak cukup.");
      return;
    }
    this.stok -= jumlah;
    console.log(`Berhasil menjual ${jumlah} ${this.nama}. Sisa stok: ${this.stok}`);
  }
}

class ProdukDigital extends Produk {
  constructor(id, nama, harga, ukuranFile, formatFile) {
    super(id, nama, harga, 1); // stok fisik tidak dipakai, tetap agar tersedia() bekerja
    this.ukuranFile = ukuranFile;
    this.formatFile = formatFile;
  }

  info() {
    return `${super.info()} | Ukuran: ${this.ukuranFile}MB | Format: ${this.formatFile}`;
  }

  download() {
    console.log(`Mengunduh ${this.nama}...`);
  }

  jual(jumlah) {
    if (jumlah <= 0) {
      console.log("Error: jumlah harus lebih dari 0.");
      return;
    }
    console.log(`Berhasil menjual ${jumlah} ${this.nama} (produk digital).`);
  }
}

class ProdukFisik extends Produk {
  constructor(id, nama, harga, stok, beratGram, dimensi) {
    super(id, nama, harga, stok);
    this.beratGram = beratGram;
    this.dimensi = dimensi;
  }

  info() {
    return `${super.info()} | Berat: ${this.beratGram} gram | Dimensi: ${this.dimensi}`;
  }

  hitungOngkir(tarifPerKg) {
    const beratKg = this.beratGram / 1000;
    const ongkir = beratKg * tarifPerKg;
    return ongkir;
  }
}

const produkDigital1 = new ProdukDigital(101, "Kursus Python Lengkap", 199000, 250, "MP4");
const produkDigital2 = new ProdukDigital(102, "Coding Bootcamp", 399000, 500, "ZIP");
const produkFisik1 = new ProdukFisik(201, "Programming in C++", 185000, 8, 950, "20x15x2 cm");
const produkFisik2 = new ProdukFisik(202, "Hoodie Developer", 150000, 15, 300, "L");

const daftarProduk = [produkDigital1, produkDigital2, produkFisik1, produkFisik2];

console.log("=== Semua Produk ===");
daftarProduk.forEach((produk) => console.log(produk.info()));

console.log("\n=== Produk Tersedia ===");
const produkTersedia = daftarProduk.filter((produk) => produk.tersedia());
produkTersedia.forEach((produk) => console.log(produk.info()));

console.log("\n=== Nama Produk ===");
const namaProduk = daftarProduk.map((produk) => produk.nama);
console.log(namaProduk);

console.log("\n=== Contoh Penjualan dan Unduhan ===");
produkFisik1.jual(2);
produkDigital1.jual(1);
produkDigital2.download();
console.log(`Ongkir ${produkFisik2.nama}: Rp${produkFisik2.hitungOngkir(25000).toLocaleString()}`);