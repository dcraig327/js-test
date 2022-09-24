"strict";
const varToString = (varObj) => Object.keys(varObj)[0];
function peekVar(variable) {
  console.log(`${variable}`);
  console.log(varToString({ variable }));
}

function foo() {
  let x = 0;
  var y = 0;
  z = 0;
  console.log(`x: ${x}`); //0
  console.log(`y: ${y}`); //0
  console.log(`z: ${z}`); //0
  {
    //    console.log(`x: ${x}`); //error
    console.log(`y: ${y}`); //0
    console.log(`z: ${z}`); //0
    x = 1;
    y = 1;
    z = 1;
    console.log(`x: ${x}`); //1
    console.log(`y: ${y}`); //1
    console.log(`z: ${z}`); //1
    {
      //      console.log(`x: ${x}`); //error
      console.log(`y: ${y}`); //1
      console.log(`z: ${z}`); //1
      let x = 2;
      var y = 2;
      z = 2;
      console.log(`x: ${x}`); //2
      console.log(`y: ${y}`); //2
      console.log(`z: ${z}`); //2
      //      let x = 2;  //error
      x = 3;
      y = 3;
      z = 3;
      //var y = 3; // same as line above
      console.log(`x: ${x}`); //3
      console.log(`y: ${y}`); //3
      console.log(`z: ${z}`); //3
      {
        console.log(`x: ${x}`); //3
        console.log(`y: ${y}`); //3
        console.log(`z: ${z}`); //3
      }
      console.log(`x: ${x}`); //3
      console.log(`y: ${y}`); //3
      console.log(`z: ${z}`); //3
    }
    console.log(`x: ${x}`); //1
    console.log(`y: ${y}`); //3
    console.log(`z: ${z}`); //3
  }
  console.log(`x: ${x}`); //1
  console.log(`y: ${y}`); //3
  console.log(`z: ${z}`); //3
}

function test() {
  var i = 1;
  console.log(i);
}

function add7(x) {
  return x + 7;
}

function multiply(x, y) {
  return x * y;
}

function capitalize2(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function capitalize(string) {
  const re = /^[a-z]/;
  return string.replace(re, (c) => c.toUpperCase());
}
let str = "bass";
console.log(capitalize(str));

function lastLetter(string) {
  return string[string.length - 1];
}

console.log(lastLetter("abcd"));
