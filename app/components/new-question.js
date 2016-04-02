import Ember from 'ember';

export default Ember.Component.extend({
<<<<<<< HEAD
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    save() {
      var params = {
=======
  newQuestion: false,
  actions: {
    showQuestionForm() {
      this.set('newQuestion', true);
    },
    save() {
      var questionParams = {
>>>>>>> 65c4d25fb762ed69df67113e589d449c271a42b2
        user: this.get('user'),
        date: this.get('date'),
        title: this.get('title'),
        body: this.get('body'),
      };
<<<<<<< HEAD
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
=======
      this.set('newQuestion', false);
      this.sendAction('save', questionParams);
>>>>>>> 65c4d25fb762ed69df67113e589d449c271a42b2
    }
  }
});
