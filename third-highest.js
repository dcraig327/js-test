// write a program that reads ten numbers and figures out which number is the
// third highest
////////////////////////////////////////////////////////////////////////////////
// 1) reword the problem get 10 numbers in sequence from the user and tell the
//    user which is the 3rd highest
// 2) plan using the highest level pseudo-code prompt user for 10 numbers in
//     sequence sort numbers either descending or ascending tell user the 3rd
//     highest
// 3) divide the promblem into smaller pseudo-code prompt user for a number and
//    inform them the number of 10 they've submitted sort ascending and use
//    simple insertion sort alert the user the 3rd highest
////////////////////////////////////////////////////////////////////////////////
function getUserInput() {
  let userNumberArray = [8, 9, 0, 5, 2, 4, 3, 1, 7, 6];
  return userNumberArray;
}

function sortInsertion(array) {
  let sortedArray = array;
  // compare first two elements of array

  return sortedArray;
}

function alertUser(number) {}

function main() {
  // prompt user for a number and inform them the number of 10 they've submitted
  let numbers = getUserInput();
  // sort ascending and use simple insertion sort
  numbers = sortInsertion(numbers);
  // alert the user the 3rd highest
  alertUser(numbers[2]);
}
////////////////////////////////////////////////////////////////////////////////
main();
