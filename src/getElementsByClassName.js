// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// returns an array-like object of all child elements which have all of the given class name(s)

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // create housing result
  // create var for parent
  // helper function to call recursively
  // evalute if current item belongs to classname
  // add entire item to result
  // look for child nodes on the item
  // call helper function on child node

  // return result;

  let result = [];
  // let parent = document.body;

  let helperFunc = function (item) {
    if (item.classList && item.classList.contains(className)) {
      result.push(item);
    }

    if (item.childNodes) {
      item.childNodes.forEach(helperFunc);
    }
  };
  helperFunc(document.body);
  return result;
};
