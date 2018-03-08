// Dependencies
const Backbone = require('backbone');

// Controllers
const App = require('./controllers/index.js');
const TodoListModel = require('./models/todo-list');
const Task = require('./models/task');

// Api response
const reponse = [{
  'name': 'task 1',
  'status': false
}, {
  'name': 'task 2',
  'status': false
}, {
  'name': 'task 3',
  'status': false
}];

//// Example collection
const Todo = Backbone.Collection.extend({
  'model': Task
});

const tasks = [];

reponse.forEach((task) => {
  tasks.push(new Task(task));
});

var todo = new Todo(tasks);
console.log(todo.models);
//// End example collection

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
