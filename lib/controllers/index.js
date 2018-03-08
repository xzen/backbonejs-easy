// Dependencies
const fs = require('fs');
const path = require('path');

// Frameworks
const Backbone = require('backbone');
const template = require('ak-template');

// Controllers
const Input = require('./input');
const List = require('./list');

module.exports = Backbone.View.extend({
  template: template(fs.readFileSync(path.join(__dirname + '/view.tpl'), 'utf8')),
  el: '#app',
  /**
   * Render
   */
  render: function() {
    this.$el.html(this.template());

    this.input = new Input();
    this.list = new List({
      'model': this.model
    });

    this.input.render();
    this.list.render();

    return this;
  }
});
