var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ];
console.log("chocolateBars ->  " + chocolateBars);
//-------------------------------
function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array];
  return (newArray);
}
console.log("addElement ->  " + addElementToBeginningOfArray([1], "foo"));
//--------------------------------
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);  
  return array;
}
console.log("destructivelyAddBegin ->  " + destructivelyAddElementToBeginningOfArray([1], "foo"));
//---------------------------------
function addElementToEndOfArray(array, element) {
  var newArray2 = [...array, element];
  return(newArray2);
}
console.log("addElementToEnd ->  " + addElementToEndOfArray([1], "foo"));
//---------------------------------
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return(array);
}
console.log("destrAddEnd ->  " + destructivelyAddElementToEndOfArray([1], "foo"));
//---------------------------------
function accessElementInArray(array, i) {
  return(array[i]);
}
console.log("accessElementInArray ->  " + accessElementInArray([1, 2, 3], 2));
//---------------------------------
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return(array);
}
console.log("destRmFrBeg ->" + destructivelyRemoveElementFromBeginningOfArray([1, 2, 3]));


//console.log(array);
//array.unshift("foo");
//console.log(array);
  
// function addElementToBeginningOfArray(array, element) { 
//   array.unshift(element);
// }
// //const array = [1];
// console.log(addElementToBeginningOfArray([1], "foo"));

// function addElementToBeginningOfArray(array, element) { 
//   array.unshift(element);
// }

//having some trouble with the arrays lab.  I'm able to console.log the correct results but I think I'm misunderstanding the directions in the error messages and the arrays-test.js file.