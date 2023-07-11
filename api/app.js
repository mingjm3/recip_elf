var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors = require('cors');
var dotenv = require('dotenv')
dotenv.config()

var authRouter = require('./routes/auth');
var recipegenRouter = require('./routes/recipegen');
var ingredientRouter = require('./routes/ingredient');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'../', 'frontend', 'build')));

app.use('/auth', authRouter)
app.use('/recipegen', recipegenRouter);
app.use('/ingredient', ingredientRouter);

app.get('*', async (req, res) => {
    res.sendFile(path.join(__dirname,'..', 'frontend', 'build', 'index.html'))
})

// error handler
app.use(function(err, req, res, next) {
  console.log('in error handler middleware')
  // print to console for dev stuff
  console.error(err.message)
  console.error(err.stack)
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
