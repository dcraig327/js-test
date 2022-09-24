"strict";
const varToString = (varObj) => Object.keys(varObj)[0];
function peekVar(variable) {
  console.log(`${variable}`);
  console.log(varToString({ variable }));
}

function foo() {
  let x = 0;
  console.log(`x: ${x}`); //0
  {
    //    console.log(`x: ${x}`); //error
    x = 1;
    console.log(`x: ${x}`); //1
    {
      //      console.log(`x: ${x}`); //error
      let x = 2;
      console.log(`x: ${x}`); //2
      //      let x = 2;  //error
      x = 3;
      console.log(`x: ${x}`); //3
      {
        console.log(`x: ${x}`); //3
      }
      console.log(`x: ${x}`); //3
    }
    console.log(`x: ${x}`); //1
  }
  console.log(`x: ${x}`); //1
}

foo();
