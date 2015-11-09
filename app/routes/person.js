import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return {
      person: this.store.findRecord('person', params.id).then(function(person) {
        return person.toJSON();
      })
    }
  },
  actions: {
    updatePerson(person) {
      person.save();
    }
  }
});
