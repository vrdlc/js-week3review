import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitAnswer(answer, params) {
      this.transitionTo('/question/' + params.question_id)
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
});
