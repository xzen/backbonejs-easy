// Dependencies
const Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  'defaults': {
    'name': 'Not specified',
    'status': false
  }
});
