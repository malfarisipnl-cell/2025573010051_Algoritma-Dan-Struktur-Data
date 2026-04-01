// --- latihan 2 count beratbadan ---

const beratBadan = 60; // berat badan dalam kg
const tinggiBadan = 1.80; // tinggi badan dalam meter
const bmi = beratBadan / (tinggiBadan ** 2); // rumus BMI: berat / tinggi^2

console.log('=== Hitung BMI ===');
console.log(`Berat Badan: ${beratBadan} kg`);
console.log(`Tinggi Badan: ${tinggiBadan} m`);
console.log(`BMI: ${bmi.toFixed(2)}`); // tampilkan dengan 2 angka desimal

if (bmi < 18.5) {
    console.log('Kategori: Underweight (Kurus)');
} else if (bmi >= 18.5 && bmi < 25) {
    console.log('Kategori: Normal (Ideal)');
}   else if (bmi >= 25 && bmi < 30) {   
    console.log('Kategori: Overweight (kelebihan berat badan)');
} else {
    console.log('Kategori: Obese (Obesitas)');
}   