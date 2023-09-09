const chai = require('chai');
const expect = chai.expect;
const { addition, subtraction } = require('../src/calculatorApp');
const calculator=require('../src/calculatorApp')
describe('Addition Functionality', () => {
  
  it('Check for addition of two positive numbers and return the sum as positive number', () => {
    // Write Test Case Here
    expect(calculator.addition(2,3)).to.equal(5)
  });

  it('Check for addition of two negative numbers and return the sum as negative number.', () => {
    // Write Test Case Here
    expect(calculator.addition(-2,-3)).to.equal(-5)
  });

  it('Check if either of number is negative produce subtracted output.', () => {
    // Write Test Case Here
    expect(calculator.addition(-2, 3)).to.equal(1)
    expect(calculator.addition(2, -3)).to.equal(-1)

    
  });


});

describe('Subtraction Functionality', () => {
  it('Check for subtracting two positive number and return positive subtraction', () => {
    // Write Test Case Here
    expect(calculator.subtraction(3,2)).to.equal(1)
  });
  it('Check if either of number is negative produce sum as output', () => {
    // Write Test Case Here
    expect(calculator.subtraction(-3, 2)).to.equal(-5)
    expect(calculator.subtraction(-3,-2)).to.equal(-1)


  });
  it('Subtracting zero will produce zero as subtraction.', () => {
    // Write Test Case Here
    expect(calculator.subtraction(-3,0)).to.equal(-3)
    expect(calculator.subtraction(0,-3)).to.equal(3)

    
  });
});
