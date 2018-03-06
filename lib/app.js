// Dependencies
const Backbone = require('backbone');

// Controllers
const Controllers = require('./controllers/index.js');

var AppRouter = Backbone.Router.extend({
  routes: {
    'hello/:id': 'getHello',
    '*actions': 'defaultRoute'
  }
});

const appRouter = new AppRouter;

appRouter.on('route:hello', id => {
  const controllers = new Controllers();

  alert(id);
  controllers.render();
});

appRouter.on('route:defaultRoute', function (actions) {
    alert(actions); 
});

Backbone.history.start({
  'pushState': true
});
