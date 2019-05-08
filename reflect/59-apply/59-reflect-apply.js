// 59: Reflect - apply 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect.apply` calls a target function', function() {

  it('it is a static method', function() {
    const expectedType = 'function';
    
    assert.equal(typeof Reflect.apply, expectedType)
  });
  
  it('it calls a callable, e.g. a function', function() {
    let fn = () => 42;
    // Modified by incorrect assertion the Reflect.apply method need three params view specification on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/apply 
    // https://github.com/tddbin/es6katas.org/issues/31
    assert.equal(Reflect.apply(fn,undefined,[]), 42); 
  });
  
  it('passing it a non-callable throws a TypeError', function() {
    let applyOnUncallable = () => { 
      Reflect.apply(Array); 
    };
    
    assert.throws(applyOnUncallable, TypeError);
  });
  
  it('the second argument is the scope (or the `this`)', function() {
    class FourtyTwo {
      constructor() { this.value = 42}
      fn() {return this.value}
    }
    let instance = new FourtyTwo();
    
    const fourtyTwo = Reflect.apply(instance.fn, instance, instance);
    
    assert.deepEqual(fourtyTwo, 42);
  });
  
  it('the 3rd argument is an array of parameters passed to the call', function() {
    let emptyArrayWithFiveElements = Reflect.apply(Array,undefined,[5]);
    
    assert.deepEqual(emptyArrayWithFiveElements.fill(42), [42, 42, 42, 42, 42]);
  });
  
});