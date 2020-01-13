// const assert = require('chai').assert;
const chai = require('chai');
const assert = chai.assert;

// const caseMakerObj = require('../case-maker');
// const caseMaker = caseMakerObj.caseMaker;
const { caseMaker } = require('../case-maker');

describe('case-maker.js', () => {
  
  it('should return a string', () => {
    const result = caseMaker('lighthouse in the house');
    assert.typeOf(result, 'string');
  });

  it('given "this is a string" returns "thisIsAString"', () => {
    const result = caseMaker('this is a string');
    assert.equal(result, 'thisIsAString');
  });

  it('given "loopy lighthouse" returns "loopyLighthouse"', () => {
    const result = caseMaker('loopy lighthouse');
    assert.equal(result, 'loopyLighthouse');
  });

  it('given "supercalifragalisticexpialidocious" returns "supercalifragalisticexpialidocious"', () => {
    const result = caseMaker('supercalifragalisticexpialidocious');
    assert.equal(result, 'supercalifragalisticexpialidocious');
  });

  it('given "this iS a sTring" returns "thisIsAString"', () => {
    const result = caseMaker('this iS a sTring');
    assert.equal(result, 'thisIsAString');
  });

  it('given "   this is a string" returns "thisIsAString"', () => {
    const result = caseMaker('   this is a string');
    assert.equal(result, 'thisIsAString');
  });

});
