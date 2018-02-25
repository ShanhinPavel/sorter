class Sorter {
  constructor() {
    // your implementation
    this._elements = [];
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
    //take elements from main array, sort it, and add to main array
    let removedElements = [];
    
    if (indices[0] > indices[1]) {
      removedElements = this._elements.slice(indices.length - 1, indices[0] + 1);
      removedElements.sort(function(a, b) {return a - b});
      
      for (let i =0; i < removedElements.length; i++) {
        this._elements.splice(indices.length - 1 + i, 1, removedElements[i]);
      }
    } else {
      
        removedElements = this._elements.slice(indices[0], indices.length);
    //sorting removedElements
      removedElements.sort(function(a, b) {return a - b});
      
        for (let i = 0; i <removedElements.length; i++) {
           this._elements.splice(indices[0] + i, 1, removedElements[i]);
      }
    }
  }
  setComparator(compareFunction) {
    // your implementation
    this._elements.sort(compareFunction);
  }
}

module.exports = Sorter;