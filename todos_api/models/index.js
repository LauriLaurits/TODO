var mongoose = require("mongoose");
mongoose.set('debug', true);
mongoose.connect('mongodb://todoadmin:todo_pw@ds235180.mlab.com:35180/todos');

mongoose.Promise = Promise;
module.exports.Todo = require("./todo");

