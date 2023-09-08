const { expect } = require('chai')
const calculator=require('../src-calculator/calculator')
describe('calculate addition operation', () => {
    describe('addition testing', () => {
        it('3+5 should equal 8', () => {
            expect(calculator.addition(3,7)).to.equal(10)
            expect(calculator.addition(-1, 3)).to.equal(2)
            expect(calculator.addition(100,2)).to.equal(102)
        })
      

       
    })
    describe('division test functionality', () => {
        it('10/2 should be 5', () => {
            expect(calculator.division(10,2)).to.equal(5)
        })
        it('should run division with several choice', () => {
            expect(calculator.division(0, 2)).to.equal(0)
            expect(calculator.division(2,0)).to.equal(Infinity)

            expect(calculator.division(2,5)).to.equal(.4)
        })
    })
})