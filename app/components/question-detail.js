import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
<<<<<<< HEAD
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !==undefined && params[key] !=="") {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    },
    delete(question) {
      if(confirm('You said you wanted help!')){
        this.sendAction('destroyQuestion', question);
      }
    }
  }
=======
    submitAnswer(answer, params) {
      this.transitionTo('/question/' + params.question_id);
    },
  editQuestion(question, params) {
    this.sendAction('editQuestion', question, params);
  },
  delete(question) {
    if(confirm("You said you needed help!")) {
      question.destroyRecord();
      this.sendAction('destroyQuestion', question);
    }
  }
}
>>>>>>> 65c4d25fb762ed69df67113e589d449c271a42b2
});
