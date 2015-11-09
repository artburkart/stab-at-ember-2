import Ember from 'ember';

export function addNumber(params /*, hash*/ ) {
  return params.reduce(function(a, b) {
    return a + b;
  }, 0);
}

export default Ember.Helper.helper(addNumber);
