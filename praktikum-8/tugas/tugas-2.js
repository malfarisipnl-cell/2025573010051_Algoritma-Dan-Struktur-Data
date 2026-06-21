// TUGAS 2: Soal Klasik Hash Table

// 1) subArrayJumlahK(arr, k)
//    - Hitung jumlah subarray yang jumlah elemennya = k
//    - Pendekatan: prefix sum + HashMap (count of prefix sums)
//    - Big-O (efisien): Time O(n), Space O(n)
//    - Naive: Time O(n^2), Space O(1)
function subArrayJumlahK(arr, k) {
    const counts = new Map();
    counts.set(0, 1);
    let sum = 0;
    let result = 0;
    for (let x of arr) {
        sum += x;
        const need = sum - k;
        if (counts.has(need)) result += counts.get(need);
        counts.set(sum, (counts.get(sum) || 0) + 1);
    }
    return result;
}

// 2) karakterPertamaUnik(s)
//    - Kembalikan indeks karakter pertama yang tidak berulang, atau -1 jika tidak ada
//    - Pendekatan: satu pass count (Map), lalu satu pass untuk menemukan index
//    - Big-O (efisien): Time O(n), Space O(1) if charset fixed (ASCII), otherwise O(n)
//    - Naive: Time O(n^2), Space O(1)
function karakterPertamaUnik(s) {
    const count = new Map();
    for (const ch of s) count.set(ch, (count.get(ch) || 0) + 1);
    for (let i = 0; i < s.length; i++) {
        if (count.get(s[i]) === 1) return i;
    }
    return -1;
}

// 3) topKFrequent(arr, k)
//    - Kembalikan k elemen yang paling sering muncul (order tidak ketat)
//    - Pendekatan: hitung frekuensi (Map) lalu sort unique keys by freq
//    - Big-O (sort approach): Time O(n + m log m), Space O(m) where m = distinct elements
//    - Alternatif (heap): Time O(n + m log k), Space O(m)
//    - Naive: Time O(n^2), Space O(1)
function topKFrequent(arr, k) {
    const freq = new Map();
    for (const x of arr) freq.set(x, (freq.get(x) || 0) + 1);
    const unique = Array.from(freq.keys());
    unique.sort((a, b) => freq.get(b) - freq.get(a));
    return unique.slice(0, k);
}

// Minimal runner: contoh dari soal
if (require.main === module) {
    console.log('Contoh subArrayJumlahK:');
    console.log(subArrayJumlahK([1,1,1], 2)); // 2

    console.log('\nContoh karakterPertamaUnik:');
    console.log(karakterPertamaUnik('leetcode')); // 0

    console.log('\nContoh topKFrequent:');
    console.log(topKFrequent([1,1,1,2,2,3], 2)); // [1,2]
}

module.exports = { subArrayJumlahK, karakterPertamaUnik, topKFrequent };
