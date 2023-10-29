
// Iterates over a collection of elements, passing each element to the callback function
function myEach(collection, callback) {
    // change object to array if collection is object
    let internalCollection;
    if (!Array.isArray(collection)) {
        internalCollection = Object.values(collection);
    }
    else {
        internalCollection = collection;
    }

    // loop through array and pass values to callback function
    for (const element of internalCollection) {
        callback(element);
    }

    return collection;
}

// Produces a new array of values by changing each value in the collection
// through the passed callback function
function myMap(collection, callback) {
    // change object to array if collection is object
    let internalCollection;
    if (!Array.isArray(collection)) {
        internalCollection = Object.values(collection);
    }
    else {
        internalCollection = collection;
    }
    
    const mappedArray = [];
    // loop through all elements in array and modify them and assign them to 
    // new array
    for (const element of internalCollection) {
        mappedArray.push(callback(element));
    }

    return mappedArray;
}

// Iterates through array and distills array to single value
function myReduce(collection, callback, acc) {
    // change object to array if collection is object
    let internalCollection;
    if (!Array.isArray(collection)) {
        internalCollection = Object.values(collection);
    }
    else {
        internalCollection = collection;
    }

    // // change acc to first value if it does not exist
    let didaccChange = false;
    let i = 0;
    if (acc === undefined) {
        acc = internalCollection[0];
        i = 1;
    }

    for (i; i < internalCollection.length; i++) {
        acc = callback(acc, internalCollection[i], internalCollection);
    }

    return acc;
}

// look through each value in collection and return the first one that passes the 
// test 
function myFind(collection, predicate) {
    // change object to array if collection is object
    let internalCollection;
    if (!Array.isArray(collection)) {
        internalCollection = Object.values(collection);
    }
    else {
        internalCollection = collection;
    }

    for (const element of internalCollection) {
        if (predicate(element)) {
            return element;
        }
    }
}

// look through collection and return all values that pass truth test
function myFilter(collection, predicate) {
    // change object to array if collection is object
    let internalCollection;
    if (!Array.isArray(collection)) {
        internalCollection = Object.values(collection);
    }
    else {
        internalCollection = collection;
    }

    const filteredArray = [];
    for (const element of internalCollection) {
        if (predicate(element)) {
            filteredArray.push(element);
        }
    }  

    return filteredArray;
}

// returns the number of values in the array
function mySize(collection) {
    // change object to array if collection is object
    let internalCollection;
    if (!Array.isArray(collection)) {
        internalCollection = Object.values(collection);
    }
    else {
        internalCollection = collection;
    }
    
    let sizeCount = 0;
    for (const element of internalCollection) {
        sizeCount++;
    }

    return sizeCount;
}

// returns the first element of the array
function myFirst(array, n) {
    // check to see if [n] exists
    if (n === undefined) {
        return array[0];
    }
    else {
        let returnArray = [];
        for (let i = 0; i < n; i++) {
            returnArray.push(array[i]);
        }
        return returnArray;
    }
}

// returns the first element of the array
function myLast(array, n) {
    // check to see if [n] exists
    if (n === undefined) {
        return array[array.length - 1];
    }
    else {
        let returnArray = [];
        // // console.log(array.length);
        // console.log(n);
        // console.log(array);
        for (let i = array.length; i > (array.length - n); i--) {
            //console.log(i);
            returnArray.unshift(array[i - 1]);
        }
        // console.log(returnArray);
        return returnArray;
    }
}

// retrieve all names of the objects keys
function myKeys(object) {
    let keyNames = [];
    // console.log(object);
    for (const key in object) {
        keyNames.push(key);
        // console.log(object[key]);
    }
    return keyNames;
}

// returns all values of object
function myValues(object) {
    let values = [];
    for (const key in object) {
        values.push(object[key]);
    }
    return values;
}