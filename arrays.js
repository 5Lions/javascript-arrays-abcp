var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ];
console.log(chocolateBars);

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array];
  return (newArray);
}
console.log(addElementToBeginningOfArray([1], "foo"));

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift("element");  
}
console.log(destructivelyAddElementToBeginningOfArray([1], "foo"));






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