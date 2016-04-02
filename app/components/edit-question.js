import Ember from 'ember';

export default Ember.Component.extend({
  editForm: false,
  actions: {
    editQuestionForm() {
      this.set('editForm', true);
    },
    editQuestion(question) {
      var params = {
        user: this.get('user'),
        date: this.get('date'),
        title: this.get('title'),
        body: this.get('body')
      };
      this.set('editQuestionForm', false);
      this.sendAction('editQuestion', question, params);
    }
  }
});
