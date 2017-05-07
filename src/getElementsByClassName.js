// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var allElements = document.body;
  var elements = [];
  
  function scanElements(element) {
    if(element.classList !== undefined && element.classList.contains(className)){
      elements.push(element);
    }
    for(var i = 0;i < element.childNodes.length; i++) {
      scanElements(element.childNodes[i]);
    }
  }

  scanElements(allElements);
  return elements;
};
