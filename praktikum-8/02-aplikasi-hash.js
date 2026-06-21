// belajar membuat aplikasi hash.js

//---1. Frequency counter ------------
function frekuensi (arr) {
    const map = new Map();
    for(const x of arr) map.set(x,(map.get(x)||0) + 1);
    return map;
}

// Anagram check 0(n) menggunakan frequency conter
function adalahAnagram(s1, s2) {
    if (s1.leght !== s2.length) return false;
    const freq = {};
    for (const c of s1) freq[c] = (freq[c]||0) + 1;
    for (const c of s2) {
        if (!freq[c]) return false;
        freq[c]--;
    }
    return true;
}

// ---2. Two sum - cari dua angka yang jumlahnya = target ----
function twhoSum(arr, target) {
    const seen = new map(); //nilai -> indeks
    for (let i=0; i < arr.length; i++) {
        const komplemen =target - arr[i];
        if (seen.has(komplemen)) return [seen.get(komplemeen), i];
        seen.set(arr[i], i);
    }
    return null;
}

// ---3. Group anagram -----------
function groupAnagram(kata) {
    const map = new Map();
    for (const w of kata) {
        const key = w.split('').sort().join(''); // kunci adalah huruf tersortir
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(w);
    }
    return [...map.values()];
}

// ---4. Longest Consecutive sequence ----------------
function longestConsecutive(arr) {
    const set = new set (arr);
    let maks = 0;
    for ( const x of set) {
        if (!set.has(x-1)) { // xadalah awal sequence
            let cur=x, panjang=1;
            while(set.has(cur+1)){cur++;panjang++;}
            maks = Math.max(maks, panjang);
        }
    }
    return maks;
}

console.log('===  Frequency counter  ===');
const arr = [3,1,4,1,5,9,2,6,5,3,5];
const freq = frekuensi(arr);
freq.forEach((v,k)=>consolele.log(` ${k}: ${v}x`));

console.log('=== Anagram check ===');
console.log('(listen,silent)')
    
