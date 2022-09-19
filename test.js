const varToString = (varObj) => Object.keys(varObj)[0];
function peekVar(variable) {
  console.log(`${variable}`);
  console.log(varToString({ variable }));
}

function foo() {
  let x = 0;
  var y = 0;
  console.log(`x,y: ${x},${y}`); //0,0
  {
    let x = 1;
    //var y = 1;
    y = 1;
    console.log(`x,y: ${x},${y}`); //0,0
    {
      // console.log(x); //error
      let x = 2;
      //var y = 2;
      y = 2;
      console.log(`x,y: ${x},${y}`); //0,0
      {
        // console.log(x); //error
        console.log(`x,y: ${x},${y}`); //0
      }
      console.log(`x,y: ${x},${y}`); //0
    }
    console.log(`x,y: ${x},${y}`); //0
  }
  console.log(`x,y: ${x},${y}`); //0
}

foo();
