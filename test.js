const varToString = (varObj) => Object.keys(varObj)[0];
function peekVar(variable) {
  console.log(`${variable}`);
  console.log(varToString({ variable }));
}
// let z = Object(x);
// let z = Object(x);
///////////////////////
// console.log(`${}: ${x}`); //0
// pname(y);

// peekVar(x);
// peekVar(y);

// console.log(`y: ${y}`); //0

function foo() {
  let x = 0;
  var y = 0;
  //  let z = Object(x).keys()[0];
  //  let z = Object.create(x);
  console.log(z);
  {
    let x = 1;
    var y = 1;
    console.log(`x,y: ${x},${y}`); //0,0
    {
      // console.log(x); //error
      let x = 2;
      var y = 2;
      console.log(`x,y: ${x},${y}`); //0,0
      {
        // console.log(x); //error
        let x = 3;
        var y = 2;
        console.log(`x,y: ${x},${y}`); //0
      }
      console.log(`x,y: ${x},${y}`); //0
    }
    console.log(`x,y: ${x},${y}`); //0
  }
  console.log(`x,y: ${x},${y}`); //0
}

foo();
