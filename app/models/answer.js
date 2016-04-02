import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  answer: DS.attr(),
<<<<<<< HEAD
  question: DS.belongsTo('question', {async: true})
=======
  questions: DS.belongsTo('question', {async: true})
>>>>>>> 65c4d25fb762ed69df67113e589d449c271a42b2
});
