

//Create function addNumbers which will take two parameters add the numbers 
//and return the result
const addNumbers=(a,b)=>a+b

//Create function subNumbers which will take two parameters subtract the numbers 
//and return the result
const subNumbers=(a,b)=>a-b


//Create function mulNumbers which will take two parameters multiply the numbers 
//and return the result
const mulNumbers=(a,b)=>a*b



//Create function divNumbers which will take two parameters divide the numbers 
//and return the result
const divNumbers= (a, b) => {
  let division = "" | 1
  if (a === 0) {
    division=0
  }
  if (b === 0) {
    division="Please provide valid numbers..!"
  }
  else {
    division =a/b
  }
  
  return division

}

module.exports = {
  addNumbers,
  subNumbers,
  mulNumbers,
  divNumbers
}