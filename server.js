//require our modules(like express)
const express = require('express');
const morgan = require('morgan');

//variable capitilized when it holds the data resource
const methodOverride = require('method-override');

//const Todo = require('./models/todo');
const indexRouter = require('./routes/index');
const skillsRouter = require('./routes/skills');

//express app
const app = express();

//application setting app.set()
app.set('view engine', 'ejs');

//mount our middleware  app.use()
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false}));
app.use(methodOverride('_method'));

app.use(function(req, res, next) {
    console.log('Hello intrepid learner');
    req.time =  new Date().toLocaleTimeString();
    next();
});


app.use('/', indexRouter);
app.use('/skills', skillsRouter);


app.listen(3000, function(){
    console.log('Express is listening for requests from the browser');
});


