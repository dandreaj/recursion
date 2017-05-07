// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var type = typeof obj;

  //If obj is null should return 'null'
  if (obj === null) {
    return "null";
  }

  //if obj is not defined or is a function, cannot stringify
  if (obj === undefined || type === "function") {
    return;
  }

  //Strings: if the obj is a string, return obj
  if (type === "string") {
    return '"' + obj + '"';
  }

  //Numbers & Booleans: Change value to string and return
  if (type === "number" || type === "boolean") {
    return obj.toString();
  }

  //Arrays: User for loop to iterate through array to stringify each element and join together
  if (Array.isArray(obj)) {
    var arrayString = "["

    for (var i = 0; i < obj.length; i++) {
      arrayString = arrayString + stringifyJSON(obj[i]) + (i < obj.length - 1 ? "," : "");
    }
    return arrayString + "]";
  }

  //Objects: Iterate through to stringify key value pairs
  if (type === "object") {
    var keys = Object.keys(obj);
    var objectString = "{";
    var keyCounter = 0;

    for (var key in obj) {
      //value of key must be defined
      if (stringifyJSON(obj[key])) {
        objectString = objectString + stringifyJSON(key) + ":" + stringifyJSON(obj[key]) + (keyCounter < keys.length - 1 ? "," : "");
        keyCounter++;
      }
    }
    return objectString + "}";
  }

};
