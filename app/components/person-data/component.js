import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updatePerson(person) {
      console.log(person);
      this.sendAction('updatePerson', person);
    }
  }
});
