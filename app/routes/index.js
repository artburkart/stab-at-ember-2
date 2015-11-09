import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      person: {},
      people: this.store.findAll('person')
    }
  },
  renderTemplate() {
    this.render('people');
  },
  actions: {
    createPerson(person) {
      person.created = new Date()
      let record = this.store.createRecord('person', person)
      record.save()
    }
  }
});
