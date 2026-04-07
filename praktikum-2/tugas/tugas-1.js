// Tugas 1: fizzBuzz
// =============================
// Tulis program yang mencetak angka dari 1 sampai 100.
// Namun, untuk kelipatan 3, cetak "Fizz" sebagai gantinya.
// Untuk kelipatan 5, cetak "Buzz".
// Untuk angka yang merupakan kelipatan dari 3 dan 5, cetak "FizzBuzz". 
// =============================

console.log('=== FizzBuzz ===');
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }   
}