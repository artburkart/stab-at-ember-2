import DS from 'ember-data';

let {Model, attr} = DS

export default Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  dob: attr('date'),
  zipcode: attr('string'),
  state: attr('string')
});
