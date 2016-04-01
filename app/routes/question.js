import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      questions: this.store.findRecord('question', params.question_id)
    });
  },
  actions: {
    // submitAnswer(params) {
    //   var newAnswer = this.store.createRecord('answer', params);
    //   var question = params.question;
    //   question.get('answers').addObject(newAnswer);
    //   newAnswer.save().then(function(){
    //     return question.save();
    //   });
    //   this.transitionTo('/question/' + params.questionId);
    // },
    // deleteAnswer(answer) {
    //   if(confirm("You said you wanted to help!")) {
    //     answer.destroyRecord();
    //     this.transitionTo('/question/' + answer.questionId);
    //   }
    // }
  }
});
