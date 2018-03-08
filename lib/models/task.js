// Dependencies
const Backbone = require('backbone');

const Task = Backbone.Model.extend({
  'defaults': {
    'name': 'Not specified',
    'status': false
  }
});
