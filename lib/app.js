// Dependencies
const Backbone = require('backbone');

// Controllers
const App = require('./controllers/index.js');

// Route
const AppRouter = Backbone.Router.extend({
  routes: {
    '*actions': 'defaultRoute'
  }
});

const appRouter = new AppRouter;

appRouter.on('route:defaultRoute', () => {
  const app = new App();

  app.render();
});

Backbone.history.start({
  'pushState': true
});
