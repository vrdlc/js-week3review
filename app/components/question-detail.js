import Ember from 'ember';

export default Ember.Component.extend({
  deleteQuestion(question) {
    if(confirm("You said you needed help!")) {
      question.destroyRecord();
      this.transitionTo('index');
    }
  }
});
