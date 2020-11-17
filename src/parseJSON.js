// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // create a memory
  // look at each individual character
  // create for housing characters
  // iterate over each character in jsonstring
  // if character is \
  // special instance
  // if character is a { or [ then recursion is called
  // if character is } or ] then return previous characters since the last bracket
  for (let i = 0; i < json.length; i++) {
    if (json[i] === '{') {
      let memory = {};
      if (json[i + 1] === '}') {
        return memory;
      }
    // memory parseJSON(json[i + 1]);
    }
    if (json[i] === '[') {
    // handle arrays
      let memory = [];
      if (json[i + 1] === '}') {
        return memory;
      }
    }
    if (json[i] === '"') {
      // handle string
    }
  }

};
