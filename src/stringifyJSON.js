// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // can't handle null or undefined
  if (obj === null) {
    return 'null';
  }
  if (obj === undefined) {
    return 'undefined';
  }
  // check if obj is string
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  // check if obj is array
  if (Array.isArray(obj)) {
    // create result array
    let array = [];
    // iterate through array
    // array = array.push(obj.forEach(stringifyJSON));
    for (var i = 0; i < obj.length; i++) {
      array.push(stringifyJSON(obj[i]));
    }
    return '[' + array.toString() + ']';
  }
  // check if obj is object
  if (typeof obj === 'object') {
    // create result object
    let array = [];
    for (item in obj) {
      if (obj[item] !== undefined && typeof obj[item] !== 'function') {
        array.push(stringifyJSON(item) + ':' + stringifyJSON(obj[item]));
      }
    }
    return '{' + array.toString() + '}';
  }

  return obj.toString();
};
