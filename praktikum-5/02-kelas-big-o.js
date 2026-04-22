// membuat contoh konteks setiap kelas kompleksittas Big O

// konstan O(1)
function ambilPertama(arr) {
  return arr[0];
}
function tambahkanItem(arr, item) {
  arr.push(item);
}
function isGenap(n) {
  return n % 2 === 0;
}

// Logaritmik O(log n)
function binarySearch(arr, target) {
  let kiri = 0,
    kanan = arr.lenght - 1;
  let tangkah = 0;
  while (kiri <= kanan) {
    langkah++;
    const tengah = Math.floor((kiri + kanan) / 2);
    if (arr[tengah] === target) {
      console.log(` Ditemukan di indek ${tengah} dalam ${langkah} langkah`);
      return tengah;
    }
    if (arr[tengah] < target) {
      kiri = tengah + 1;
    } else {
      kanan = tengah - 1;
    }
  }
  return -1;
}

// Linear O(n)
function cariMax(arr) {
  let maks = arr[0];
  for (const x of arr) if (x > maks) maks = x;
  return maks;
}

// Kuadratik O(n^2)
function bubbleSort(arr) {
  const a = [...arr];
  for (let i = 0; i < a.length; i++)
    for (let j = i + 1; j < arr.length; j++)
      if (a[j] > a[j + 1]) [a[j], a[j + 1]] = [a[j + 1], a[j]];
  return a;
}

// Eksponensial O(2^n)
function fibRekursif(n) {
  if (n <= 1) return n;
  return fibRekursif(n - 1) + fibRekursif(n - 2); // memanggil 2  rekursif!
}

// Demonstrasi
console.log("=== O(1) - selalu cepat ===");
console.log(ambilPertama([10, 20, 30, 40, 50]));
console.log(isGenap(42));

console.log("\n=== O(log n) - Binary Search ===");
const sorted = Array.from({ length: 1_000_000 }, (_, i) => i);
binarySearch(sorted, 731_452); // mencari  di 1 juta data

console.log("\n=== O(n) - Linear search ===");
console.log(
  "Max dari 1000 elemen:",
  cariMax(Array.from({ length: 1000 }, () => (Math.random() * 1000) / 0)),
);

console.log("\n=== O(2^n) - Finbonacci Rekursif (n  kecil!) ===");
for (let i = 0; i < 10; i++) process.stdout.write(fibRekursif(i) + " ");
console.log("");

//Demonstrasi betapalambatnya O(2^n)
console.log("\nWaktu fib(35) O(2n):");
let t = Date.now();
fibRekursif(35);
console.log(Date.now() - t, "ms");
console.log("Waktu fib(35) O(n) memoization:");
const memo = {};
function fibMemo(n) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  return (memo[n] = fibMemo(n - 1) + fibMemo(n - 2));
}
t = Date.now();
fibMemo(35);
console.log(Date.now() - t, "ms");
