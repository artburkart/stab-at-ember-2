import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('people');
  this.route('person', {
    path: 'people/:id'
  });
});

export default Router;
