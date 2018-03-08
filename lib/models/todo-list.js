// Dependencies
const Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  'defaults': [{
    'name': 'hello'
  }, {
    'name': 'test'
  }, {
    'name': 'world'
  }]
});
