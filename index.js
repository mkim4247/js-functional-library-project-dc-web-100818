fi = (function() {
  return {
    libraryMethod: function() {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },
 
    each: function(collection, callback) {
      if (collection.isArray) {
          for (const arrEl of collection) {
            callback(arrEl);
          }
      } else {
        //return the key values and the original collection
          for (const objKey in collection) {
            callback(collection[objKey]);
        }
        return collection;
      }
    },
    
    map: function(collection, callback) {
      //use let newArr = []; and return at the end of the function to fulfill the new array aspect
      let newArr = [];
      if (collection.isArray) {
        for (const arrEl of collection) {
            newArr.push(callback(arrEl));
        }
      } else {
        for (const objKey in collection) {
            newArr.push(callback(collection[objKey]));
        }
      } 
      return newArr;
    },
    
    reduce: function(collection, callback, acc) {
      let newCollection;
      if (acc) {
          newCollection = [acc];
      } else {
          newCollection = [];
          }
          
      for (const collectionArr of collection) {
            newCollection.push(collectionArr);
          }
      return callback(acc, collectionArr, newCollection); 
    },
    
    find: function(collection, predicate) {
      for (const el of collection) {
        if (predicate(el) === true) {
            return el;    
        }
      }
    },
    
    filter: function(collection, predicate) {
      newCollection = [];
    for (const el of collection) {
        if (predicate(el) === true) {
            newCollection.push(el);
        }
    }
    return newCollection;
    },
    
    size: function(collection) {
      let newCollection = [];
      for (const el in collection) {
        newCollection.push(el);
        }
        return newCollection.length;
    },
    
    first: function(array, n) {
      if (n) {
        return array.slice(0, n);
      } else {    
        return array.shift();
      }
    },
    
    last: function(array, n) {
      if (n) {
        return array.slice(-n);
      } else {    
        return array.pop();
      }
    },
    
    compact: function(array) {
      newArray = [];
      for (const el of array) {
        if (el) {
            newArray.push(el);
          } 
        }
        return newArray; 
    },
    
    sortBy: function(array, callback) {
      return array.sort(callback);
    },
    
    //this function obviously uses the deep iterator concept for traversing through a nested array
    //seems like recursion may be the key 
    flatten: function(array, shallow) {

    },
      
    uniq: function (array, isSorted, callback) {
      
    },
    
    keys: function(object) {
      newArray = [];  
        for (const key in object) {
          newArray.push(key);
        }
      return newArray;
    },
    
    values: function(object) {
      newArray = [];
      for (const key in object) {
         newArray.push(object[key]);
      }
      return newArray;
    },
    
    functions: function(object) {
      newArray = [];
      for (const key in object) {
        //if (key instanceof Function) {
          newArray.push(key);
        //}
      }
      return newArray.sort();
    }
    
    
  };
})();
 
fi.libraryMethod();