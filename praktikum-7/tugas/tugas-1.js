class Pasien {
  constructor(id, nama, prioritas, waktuDaftar) {
    this.id = id
    this.nama = nama
    this.prioritas = prioritas
    this.waktuDaftar = waktuDaftar
  }

  toString() {
    return `ID: ${this.id}, Nama: ${this.nama}, Prioritas: ${this.prioritas}, Waktu Daftar: ${this.waktuDaftar.toLocaleString()}`
  }
}

class AntrianRS {
  constructor() {
    this.antrianDarurat = []
    this.antrianBiasa = []
  }

  daftar(pasien) {
    if (pasien.prioritas === 'darurat') {
      this.antrianDarurat.push(pasien)
    } else {
      this.antrianBiasa.push(pasien)
    }
  }

  layani() {
    if (this.antrianDarurat.length > 0) {
      const pasien = this.antrianDarurat.shift()
      console.log(`Sedang dilayani (darurat): ${pasien.toString()}`)
      return pasien
    }

    if (this.antrianBiasa.length > 0) {
      const pasien = this.antrianBiasa.shift()
      console.log(`Sedang dilayani (biasa): ${pasien.toString()}`)
      return pasien
    }

    console.log('Tidak ada pasien yang harus dilayani.')
    return null
  }

  tampilkanAntrian() {
    console.log('=== Status Antrian ===')
    console.log('Antrian Darurat:')
    if (this.antrianDarurat.length === 0) {
      console.log('  (kosong)')
    } else {
      this.antrianDarurat.forEach((pasien, index) => {
        console.log(`  ${index + 1}. ${pasien.toString()}`)
      })
    }

    console.log('Antrian Biasa:')
    if (this.antrianBiasa.length === 0) {
      console.log('  (kosong)')
    } else {
      this.antrianBiasa.forEach((pasien, index) => {
        console.log(`  ${index + 1}. ${pasien.toString()}`)
      })
    }
    console.log('======================')
  }
}

function buatSimulasi() {
  const rs = new AntrianRS()
  const namaPasien = [
    'Andi',
    'Budi',
    'Citra',
    'Dewi',
    'Eka',
    'Fajar',
    'Gina',
    'Hadi',
    'Ika',
    'Joko'
  ]

  namaPasien.forEach((nama, index) => {
    const prioritas = Math.random() < 0.5 ? 'darurat' : 'biasa'
    const waktuDaftar = new Date(Date.now() + index * 1000)
    const pasien = new Pasien(index + 1, nama, prioritas, waktuDaftar)
    rs.daftar(pasien)
    console.log(`Daftar: ${pasien.toString()}`)
  })

  console.log('\nMulai simulasi...\n')
  rs.tampilkanAntrian()

  while (rs.antrianDarurat.length > 0 || rs.antrianBiasa.length > 0) {
    rs.layani()
  }

  console.log('\nSemua pasien telah dilayani.')
}

buatSimulasi()
