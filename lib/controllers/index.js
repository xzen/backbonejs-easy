// Dependencies
const fs = require('fs');
const path = require('path');

// Frameworks
const Backbone = require('backbone');
const template = require('ak-template');

module.exports = Backbone.View.extend({
  template: template(fs.readFileSync(path.join(__dirname + '/view.tpl'), 'utf8')),
  el: '#app',
  /**
   * Initialize
   */
  initialize: function() {
    this.render();
  },
  /**
   * Render
   */
  render: function() {
    console.log(this.model);
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
});
