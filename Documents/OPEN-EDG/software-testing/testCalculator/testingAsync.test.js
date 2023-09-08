const { expect } = require('chai')
const asyncCalculator = require('../async-calculator/asyncCalculator')
describe('testing system arthimatic operator', () => {
    describe('it should add data asynchronously', () => {
        it('add two digit', (done) => {
            asyncCalculator.addAsync(3, 2, (result) => {
                expect(result).to.equal(5).to.be.a('number')
                done()
})
        })
    })
    describe('it should subtract data asynchronously', () => {
        it('subtract teo data values', (done) => {
            asyncCalculator.subtruct(4, 3, (result) => {
                expect(result).to.equal(1).to.be.a('number')
                done()
            })
        })
    })
})