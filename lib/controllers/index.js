// Dependencies
const fs = require('fs');
const path = require('path');

// Frameworks
const Backbone = require('backbone');
const template = require('ak-template');

module.exports = Backbone.View.extend({
  template: template(fs.readFileSync(path.join(__dirname + '/view.tpl'), 'utf8')),
  el: '#app',
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.template({
      'hello': 'hello'
    }));

    return this;
  }
});
