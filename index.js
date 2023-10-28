
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

    console.log(acc);
    // change acc to first value if it does not exist
    if (acc === undefined) {
        acc = internalCollection[0];
    }
    console.log(acc);

    // iterate through array and adjust the value of acc
    for (const element of internalCollection) {
        acc = callback(acc, element, internalCollection);
    }
    return acc;
}