import { Name } from './../js/template.js';

describe('Name', function(){
let newName;
  beforeEach(function(){
    newName = new Name("")
  });

  it('create a new name with a margaret', function(){
    expect(newName.margaret) .toEqual("")
  });

  it('count vowels in a Name', function(){
    let vowelNum = newName.vowelCount("good butts are squishy")
    expect(vowelNum) .toEqual(6)
    // refer to haiku for this example
  });
});
