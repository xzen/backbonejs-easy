// Dependencies
const Backbone = require('backbone');

// Controllers
const Controllers = require('./controllers/index.js');

var AppRouter = Backbone.Router.extend({
  routes: {
    '*actions': 'defaultRoute'
  }
});

const appRouter = new AppRouter;

appRouter.on('route:defaultRoute', () => {
  const controllers = new Controllers();

  controllers.render();
});

Backbone.history.start({
  'pushState': true
});
