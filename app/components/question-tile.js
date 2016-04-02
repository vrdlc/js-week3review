import Ember from 'ember';

export default Ember.Component.extend({
<<<<<<< HEAD
  answerIsShowing: false,
  actions: {
    answerShow: function() {
      this.set('answerIsShowing', true);
    },
    answerHide: function() {
      this.set('answerIsShowing', false);
    },
    delete(question) {
      if(confirm('You said you wanted help!')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
=======

>>>>>>> 65c4d25fb762ed69df67113e589d449c271a42b2
});
