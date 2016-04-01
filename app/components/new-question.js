import Ember from 'ember';

export default Ember.Component.extend({
  newQuestion: false,
  actions: {
    showQuestionForm() {
      this.set('newQuestion', true);
    },
    save() {
      var questionParams = {
        user: this.get('user'),
        date: this.get('date'),
        title: this.get('title'),
        body: this.get('body'),
      };
      this.set('newQuestion', false);
      this.sendAction('save', questionParams);
    }
  }
});
