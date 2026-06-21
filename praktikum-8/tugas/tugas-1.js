// TUGAS 1: Implementasi Hash Table - Chaining dan Linear Probing

class HashMapChaining {
    constructor(kapasitas = 53) {
        this.tabel = new Array(kapasitas);
        this.kapasitas = kapasitas;
        this.ukuran = 0;
    }

    _hash(key) {
        let hash = 0;
        const PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            hash = (hash * PRIME + key.charCodeAt(i)) % this.kapasitas;
        }
        return hash;
    }

    set(key, value) {
        const idx = this._hash(key);
        if (!this.tabel[idx]) this.tabel[idx] = [];
        const existing = this.tabel[idx].find(([k]) => k === key);
        if (existing) {
            existing[1] = value;
            return;
        }
        this.tabel[idx].push([key, value]);
        this.ukuran++;
    }

    get(key) {
        const idx = this._hash(key);
        if (!this.tabel[idx]) return undefined;
        const pair = this.tabel[idx].find(([k]) => k === key);
        return pair ? pair[1] : undefined;
    }

    delete(key) {
        const idx = this._hash(key);
        if (!this.tabel[idx]) return false;
        const i = this.tabel[idx].findIndex(([k]) => k === key);
        if (i === -1) return false;
        this.tabel[idx].splice(i, 1);
        this.ukuran--;
        return true;
    }

    has(key) {
        return this.get(key) !== undefined;
    }

    keys() {
        const result = [];
        for (const bucket of this.tabel)
            if (bucket) bucket.forEach(([k]) => result.push(k));
        return result;
    }

    infoDistribusi() {
        let terisi = 0, maks = 0, sumaChain = 0;
        const histogram = {};

        for (const b of this.tabel) {
            if (b && b.length) {
                terisi++;
                sumaChain += b.length;
                histogram[b.length] = (histogram[b.length] || 0) + 1;
                if (b.length > maks) maks = b.length;
            }
        }

        console.log('Distribusi Chaining:');
        console.log('  Kapasitas: ' + this.kapasitas);
        console.log('  Bucket Terisi: ' + terisi);
        console.log('  Load Factor: ' + (this.ukuran / this.kapasitas).toFixed(3));
        console.log('  Max Chain Depth: ' + maks);
        console.log('  Avg Chain Length: ' + (sumaChain / (terisi || 1)).toFixed(3));
        console.log('  Histogram: ' + JSON.stringify(histogram));
    }
}

class HashMapLinearProbing {
    constructor(kapasitas = 53) {
        this.tabel = new Array(kapasitas);
        this.kapasitas = kapasitas;
        this.ukuran = 0;
        this.tombstoneCount = 0;
    }

    _hash(key) {
        let hash = 0;
        const PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            hash = (hash * PRIME + key.charCodeAt(i)) % this.kapasitas;
        }
        return hash;
    }

    _findSlot(key, forInsert = false) {
        let idx = this._hash(key);
        let steps = 0;
        let firstTombstone = -1;

        while (steps < this.kapasitas) {
            const cell = this.tabel[idx];

            if (cell === undefined) {
                if (forInsert && firstTombstone !== -1) {
                    return firstTombstone;
                }
                return idx;
            }

            if (cell && cell.tombstone === true) {
                if (firstTombstone === -1) firstTombstone = idx;
                idx = (idx + 1) % this.kapasitas;
                steps++;
                continue;
            }

            if (cell && cell.key === key) {
                return idx;
            }

            idx = (idx + 1) % this.kapasitas;
            steps++;
        }

        if (firstTombstone !== -1) {
            return firstTombstone;
        }

        return -1;
    }

    set(key, value) {
        const loadFactor = this.ukuran / this.kapasitas;
        if (loadFactor > 0.7) {
            this._resize();
        }

        const idx = this._findSlot(key, true);
        if (idx === -1) throw new Error('Hash table penuh!');

        if (this.tabel[idx] === undefined) {
            this.tabel[idx] = { key, value, tombstone: false };
            this.ukuran++;
        } else if (this.tabel[idx].tombstone === true) {
            this.tabel[idx] = { key, value, tombstone: false };
            this.tombstoneCount--;
        } else if (this.tabel[idx].key === key) {
            this.tabel[idx].value = value;
        }
    }

    get(key) {
        const idx = this._findSlot(key, false);
        if (idx === -1 || this.tabel[idx] === undefined || this.tabel[idx].tombstone) {
            return undefined;
        }
        return this.tabel[idx].value;
    }

    delete(key) {
        const idx = this._findSlot(key, false);
        if (idx === -1 || this.tabel[idx] === undefined) {
            return false;
        }

        if (this.tabel[idx].tombstone) {
            return false;
        }

        this.tabel[idx].tombstone = true;
        this.tombstoneCount++;
        this.ukuran--;
        return true;
    }

    has(key) {
        return this.get(key) !== undefined;
    }

    keys() {
        const result = [];
        for (const cell of this.tabel) {
            if (cell && !cell.tombstone) {
                result.push(cell.key);
            }
        }
        return result;
    }

    values() {
        const result = [];
        for (const cell of this.tabel) {
            if (cell && !cell.tombstone) {
                result.push(cell.value);
            }
        }
        return result;
    }

    _resize() {
        const oldTabel = this.tabel;
        const oldKapasitas = this.kapasitas;

        this.kapasitas = this._nextPrime(oldKapasitas * 2);
        this.tabel = new Array(this.kapasitas);
        this.ukuran = 0;
        this.tombstoneCount = 0;

        for (const cell of oldTabel) {
            if (cell && !cell.tombstone) {
                this.set(cell.key, cell.value);
            }
        }
    }

    _nextPrime(num) {
        if (num <= 2) return 2;
        if (num % 2 === 0) num++;
        for (let i = num; ; i += 2) {
            if (this._isPrime(i)) return i;
        }
    }

    _isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }

    infoDistribusi() {
        let terisi = 0, tombstone = 0, probeSum = 0;
        const histogram = {};

        for (let i = 0; i < this.kapasitas; i++) {
            const cell = this.tabel[i];
            if (cell === undefined) continue;

            if (cell.tombstone) {
                tombstone++;
            } else {
                terisi++;
                const hashIdx = this._hash(cell.key);
                let probes = 1;
                let current = hashIdx;
                while (current !== i) {
                    current = (current + 1) % this.kapasitas;
                    probes++;
                }
                probeSum += probes;
                histogram[probes] = (histogram[probes] || 0) + 1;
            }
        }

        console.log('Distribusi Linear Probing:');
        console.log('  Kapasitas: ' + this.kapasitas);
        console.log('  Terisi: ' + terisi);
        console.log('  Tombstone: ' + tombstone);
        console.log('  Load Factor: ' + (this.ukuran / this.kapasitas).toFixed(3));
        console.log('  Rata-rata Probe Distance: ' + (probeSum / (terisi || 1)).toFixed(3));
        console.log('  Histogram: ' + JSON.stringify(histogram));
    }
}

// PERBANDINGAN CHAINING vs LINEAR PROBING
const testData = ['javascript', 'python', 'java', 'c++', 'rust', 'go', 'typescript',
    'kotlin', 'scala', 'ruby', 'php', 'swift', 'perl', 'r', 'matlab'];

console.log('PERBANDINGAN CHAINING vs LINEAR PROBING\n');

const chainMap = new HashMapChaining(53);
testData.forEach((lang, i) => chainMap.set(lang, i + 1));

console.log('1. HASH MAP CHAINING');
chainMap.infoDistribusi();

console.log('\n2. HASH MAP LINEAR PROBING');
const lpMap = new HashMapLinearProbing(53);
testData.forEach((lang, i) => lpMap.set(lang, i + 1));
lpMap.infoDistribusi();

console.log('\n3. OPERASI DELETE');
console.log('  Chaining - Sebelum delete: ' + chainMap.keys().length + ' items');
['python', 'java', 'ruby'].forEach(key => chainMap.delete(key));
console.log('  Chaining - Sesudah delete: ' + chainMap.keys().length + ' items');

console.log('  Linear Probing - Sebelum delete: ' + lpMap.keys().length + ' items');
['python', 'java', 'ruby'].forEach(key => lpMap.delete(key));
console.log('  Linear Probing - Sesudah delete: ' + lpMap.keys().length + ' items');
