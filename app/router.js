import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
<<<<<<< HEAD
=======
  this.route('new');
  this.route('answer');
>>>>>>> 65c4d25fb762ed69df67113e589d449c271a42b2
  this.route('question', {path: '/question/:question_id'});
});

export default Router;
