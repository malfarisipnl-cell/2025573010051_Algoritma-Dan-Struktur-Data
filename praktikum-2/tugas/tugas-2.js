// --- latihan 2 count beratbadan ---

const beratBadan = 100; // berat badan dalam kg
const tinggiBadan = 1.90; // tinggi badan dalam meter
const bmi = beratBadan / (tinggiBadan ** 2); // rumus BMI: berat / tinggi^2


if (bmi < 18.5) {
    console.log(`Berat Badan: ${beratBadan} kg | Tinggi Badan: ${tinggiBadan} m | BMI: ${bmi.toFixed(2)} | Kategori: Underweight (Kurus)`);
} else if (bmi >= 18.5 && bmi < 25) {
    console.log(`Berat Badan: ${beratBadan} kg | Tinggi Badan: ${tinggiBadan} m | BMI: ${bmi.toFixed(2)} | Kategori: Normal (Ideal)`);
}   else if (bmi >= 25 && bmi < 30) {   
    console.log(`Berat Badan: ${beratBadan} kg | Tinggi Badan: ${tinggiBadan} m | BMI: ${bmi.toFixed(2)} | Kategori: Overweight (kelebihan berat badan)`);
} else {
    console.log(`Berat Badan: ${beratBadan} kg | Tinggi Badan: ${tinggiBadan} m | BMI: ${bmi.toFixed(2)} | Kategori: Obese (Obesitas)`);
}