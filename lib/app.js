// Dependencies
const Backbone = require('backbone');

// Controllers
const Controllers = require('./controllers/index.js');
const Hello = require ('./models/index.js');

var AppRouter = Backbone.Router.extend({
  routes: {
    '*actions': 'defaultRoute'
  }
});

const appRouter = new AppRouter;

appRouter.on('route:defaultRoute', () => {
  const helloModel = new Hello
  const controllers = new Controllers({
    model: helloModel
  });

  controllers.render();
});

Backbone.history.start({
  'pushState': true
});
