import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
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
