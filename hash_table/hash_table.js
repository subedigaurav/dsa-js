class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // just a convention for a private property
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  } // O(1)

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  } // O(1)

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  } // O(1)

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let entry of currentBucket) {
        if (entry[0] == key) {
          return entry[1];
        }
      }
    }
    return undefined;
  } // O(1)

  keys() {
    const keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        if (this.data[i].length > 0) {
          for (let j = 0; j < this.data[i].length; j++) {
            keys.push(this.data[i][j][0]);
          }
        } else {
          keys.push(this.data[i]);
        }
      }
    }
    return keys;
  }
}

let hashTable = new HashTable(50);
hashTable.set('grapes', 10000);
hashTable.set('apples', 54);
hashTable.set('oranges', 2);
hashTable.get('grapes');
hashTable.set('lichi', 5000);
console.log(hashTable);
console.log(hashTable.keys());
