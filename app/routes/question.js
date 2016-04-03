import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
<<<<<<< HEAD

  submitAnswer(params) {
    var newAnswer = this.store.createRecord('answer', params);
    var question = params.question;
    question.get('answers').addObject(newAnswer);
    newAnswer.save().then(function() {
      return question.save();
    });
    this.transitionTo('index');
  },
=======
<<<<<<< HEAD
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !==undefined && params[key] !=="") {
=======
>>>>>>> 7bbaae1c4c80609070d2a0cae156aa485a95b7fa
    editQuestion(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined && params[key] !=="") {
>>>>>>> 65c4d25fb762ed69df67113e589d449c271a42b2
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    },
<<<<<<< HEAD
    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    }
  }
});
=======
    destroyQuestion() {
      this.transitionTo('index');
    }
  }
  });
>>>>>>> 65c4d25fb762ed69df67113e589d449c271a42b2
