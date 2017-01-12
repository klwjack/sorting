describe('Bubble Sort', function(){

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles an array with one element', function(){
    expect( bubbleSort([2]) ).toEqual( [2] );
  });

  it('handles a reverse sorted array', function(){
    expect( bubbleSort([7, 6, 5, 4, 3, 2, 1, 0]) ).toEqual( [0, 1, 2, 3, 4, 5, 6, 7] );
  });

  it('handles a sorted array', function(){
    expect( bubbleSort([1, 2, 3 ,4, 5]) ).toEqual( [1, 2, 3, 4, 5] );
  });


  it('handles a randomly ordered  array', function(){
    expect( bubbleSort([54, 27, 83, 133, 0, 66]) ).toEqual( [0, 27, 54, 66, 83, 133] );
  });

  it('handles an array with duplicate values with 2-element array', function(){
    expect( bubbleSort([2, 2]) ).toEqual( [2, 2] );
  });

  it('handles an array with duplicate values', function(){
    expect( bubbleSort([2, 3, 6, 7, 343, 6, 1]) ).toEqual( [1, 2, 3, 6, 6, 7, 343] );
  });

});
