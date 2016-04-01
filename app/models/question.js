import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr(),
  date: DS.attr(),
  title: DS.attr(),
  user: DS.attr(),
});
