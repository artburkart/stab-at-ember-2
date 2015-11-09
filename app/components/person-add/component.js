import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createPerson(person) {
      this.sendAction('createPerson', person);
      this.set('person', {});
    }
  }
});
