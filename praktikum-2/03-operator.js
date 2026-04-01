// 03-operator.js
// =============================
// OPERATOR javascipt

// --- Operator Aritmatika ---
let a = 17;
let b = 5;

console.log('=== Aritmatika ===');
console.log(`${a} + ${b} = ${a + b}`); //22
console.log(`${a} - ${b} = ${a - b}`); //12
console.log(`${a} * ${b} = ${a * b}`); //85
console.log(`${a} / ${b} = ${a / b}`); //3.4
console.log(`${a} % ${b} = ${a % b}`); //2 (sisa bagi: 17 = 5x3 + 2)
console.log(`${a} ** ${b} = ${a ** b}`); // 1419857 (17 pangkat 5)

// --- Operator Perbandingan ---
console.log('=== Perbandingan ===');
console.log('10 > 5    :', 10 > 5);   // true
console.log('10 < 5    :', 10 < 5);   // false
console.log('10 >= 10  :', 10 >= 10); // true  
console.log('10 <= 9   :', 10 <= 9);  // false

// perbedaan == dan ===
console.log('--- perbedaaan == dan === ---');
console.log('5 == "5"  :', 5 == "5");   // true (JANGAN gunakan ini)
console.log('5 === "5" :', 5 === "5");  // false (selau gunakan ini)
console.log('5 !== "3" :', 5 !== "3");   // true (tidak sama dengan)

// --- Operator Logika ---
console.log('=== Logika ===');
let sudahMakan = true;
let punyaUang  = false;

// AND (&&): kedua kondisi harus true
console.log('Makan && Uang:', sudahMakan && punyaUang); // false

// OR (||): salah satu kondisi cukup true
console.log('Makan || Uang:', sudahMakan || punyaUang); // true

// NOT (!): membalik nilai boolean
console.log('!sudahMakan:', !sudahMakan); // false
console.log('!punyaUang:', !punyaUang);   // true


// Latihan 1 kalkulator sederhana
let x = 12;
let y = 8;

//luas persegi panjang dan keliling persegi panjang
let luas = x * y;
let keliling = 96 * (x + y);

console.log('=== Kalkulator Persegi Panjang ===');
console.log(`Panjang: ${x}`);
console.log(`Lebar  : ${y}`);
console.log(`Luaspersegipanjang  : ${luas}`);
console.log(`Keliling: ${keliling}`);
console.log(' 96 * (x + y) = 96 * (12 + 8) = 96 * 20 = 1920');
 
