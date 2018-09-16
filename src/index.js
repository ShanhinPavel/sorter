class Sorter {
  constructor() {
    // your implementation
    this._elements = [];
    this._comparator= (a, b) => a - b;
  }

  add(element) {
    // your implementation
    this._elements.push(element);
  }

  at(index) {
    // your implementation
    return this._elements[index];

  }

   get length() {
    // your implementation
   return this._elements.length;
  }

  toArray() {
    // your implementation
    return this._elements;
  }

  sort(indices) {
    // your implementation
    let newArray = [];
    let length = indices.length;
    indices = indices.sort((a, b) => a - b);

    for (let index = 0; length > index; index++) {
      newArray.push(this._elements[indices[index]]);
    }
    newArray.sort(this._comparator);
    for (let index =0; length > index; index++) {
      this._elements.splice(indices[index], 1, newArray[index]);
    }
 return this._elments;
}
  setComparator(compareFunction) {
    return this._comparator = compareFunction;
  }
}

module.exports = Sorter;