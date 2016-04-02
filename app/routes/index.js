import Ember from 'ember';

export default Ember.Route.extend({
  model() {
<<<<<<< HEAD
    return this.store.findAll('question');
  },
  actions: {
    saveQuestion(params) {
=======
    return this.store.findAll('question')
  },

  actions: {
    save(params) {
>>>>>>> 65c4d25fb762ed69df67113e589d449c271a42b2
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
<<<<<<< HEAD
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined && params[key] !=="") {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    },
    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    }
  }
=======
}
>>>>>>> 65c4d25fb762ed69df67113e589d449c271a42b2
});
