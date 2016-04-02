import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
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
});
