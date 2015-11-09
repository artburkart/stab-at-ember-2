import Ember from 'ember';
import FirebaseAdapter from 'emberfire/adapters/firebase';

const {inject} = Ember;

export default FirebaseAdapter.extend({
  firebase: inject.service(),
});

// import DS from 'ember-data';

// export default DS.LSAdapter.extend({});
