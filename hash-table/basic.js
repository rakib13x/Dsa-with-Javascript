class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % this.dataMap.length;
    }
    return hash;
  }

  set(key, value) {
    let index = this._hash(key);

    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }
    this.dataMap[index].push([key, value]);
    return this;
  }

  get(key) {
    let index = this._hash(key);
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) {
          return this.dataMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  key() {
    let allkeys = [];
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          allkeys.push(this.dataMap[i][j][0]);
        }
      }
    }
    return allkeys;
  }
}
let myHashTable = new HashTable();
myHashTable.set("rakib", 50);
myHashTable.set("rakib", 50);
myHashTable.set("rakib", 50);
myHashTable.set("Sakib", 90);
myHashTable.set("Asif", 100);

let getMyHashTable = myHashTable.get("Sakib");
let keysMyHashTable = myHashTable.key();
console.log(keysMyHashTable);

console.log(getMyHashTable);

console.log(myHashTable);
