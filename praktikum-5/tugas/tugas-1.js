// Fungsi A: Intersection dari dua array - versi O(n²) dan O(n) menggunakan Set
// O(n²) time, O(min(n,m)) space - nested loop
function intersectionNaive(arr1, arr2) {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j] && !result.includes(arr1[i])) {
                result.push(arr1[i]);
            }
        }
    }
    return result;
}

// O(n) time, O(min(n,m)) space - menggunakan Set
function intersectionSet(arr1, arr2) {
    const set1 = new Set(arr1);
    const result = [];
    for (const item of arr2) {
        if (set1.has(item) && !result.includes(item)) {
            result.push(item);
        }
    }
    return result;
}

// Fungsi B: Kelompok anagram dari array string
// O(n * k log k) time, O(n * k) space - di mana n panjang array, k panjang string rata-rata
function groupAnagrams(strs) {
    const map = {};
    for (const str of strs) {
        const sorted = str.split('').sort().join('');
        if (!map[sorted]) {
            map[sorted] = [];
        }
        map[sorted].push(str);
    }
    return Object.values(map);
}

// Fungsi C: Cek jika ada dua elemen yang jumlahnya sama dengan kuadrat elemen ketiga
// O(n³) time, O(1) space - triple nested loop
function checkSumSquareNaive(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = 0; k < arr.length; k++) {
                if (i !== k && j !== k && arr[i] + arr[j] === arr[k] * arr[k]) {
                    return true;
                }
            }
        }
    }
    return false;
}

// O(n log n) time, O(n) space - sort array, lalu two pointers atau set
function checkSumSquareOptimized(arr) {
    const sorted = [...arr].sort((a, b) => a - b);
    const squares = new Set(sorted.map(x => x * x));
    for (let i = 0; i < sorted.length; i++) {
        for (let j = i + 1; j < sorted.length; j++) {
            const sum = sorted[i] + sorted[j];
            if (squares.has(sum)) {
                return true;
            }
        }
    }
    return false;
}

// Fungsi untuk mengukur waktu eksekusi
function measureTime(label, fn, ...args) {
    const start = Date.now();
    const result = fn(...args);
    const end = Date.now();
    console.log(`${label}: ${end - start} ms`);
    return result;
}

// Data besar untuk testing
const arr1 = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
const arr2 = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));
const strs = Array.from({ length: 1000 }, () => {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let str = '';
    for (let i = 0; i < 5; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
});
const nums = Array.from({ length: 100 }, () => Math.floor(Math.random() * 50) + 1); // Lebih kecil untuk O(n³) agar tidak terlalu lama

console.log('=== Analisis dan Benchmark Fungsi ===');

// Fungsi A
console.log('\n--- Fungsi A: Intersection ---');
const naiveResult = measureTime('Intersection Naive O(n²)', intersectionNaive, arr1, arr2);
const setResult = measureTime('Intersection Set O(n)', intersectionSet, arr1, arr2);
console.log('Hasil sama?', JSON.stringify(naiveResult.sort()) === JSON.stringify(setResult.sort()));

// Fungsi B
console.log('\n--- Fungsi B: Group Anagrams ---');
const anagramResult = measureTime('Group Anagrams O(n k log k)', groupAnagrams, strs);
console.log('Jumlah kelompok:', anagramResult.length);

// Fungsi C
console.log('\n--- Fungsi C: Check Sum Square ---');
const naiveCheck = measureTime('Check Sum Square Naive O(n³)', checkSumSquareNaive, nums);
const optCheck = measureTime('Check Sum Square Optimized O(n log n)', checkSumSquareOptimized, nums);
console.log('Hasil sama?', naiveCheck === optCheck);