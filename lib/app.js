// Dependencies
const Backbone = require('backbone');

// Controllers
const App = require('./controllers/index.js');
const TodoListModel = require('./models/todo-list');

// Route
const AppRouter = Backbone.Router.extend({
  routes: {
    '*actions': 'defaultRoute'
  }
});

const appRouter = new AppRouter;

appRouter.on('route:defaultRoute', () => {
  const todoListModel = new TodoListModel(); 

  const app = new App({
    'model': todoListModel
  });

  app.render();
});

Backbone.history.start({
  'pushState': true
});
