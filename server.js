var express = require('express');
var jade = require('jade');
const app = express();

const PORT = process.env.PORT || 5000;
const viewPath = __dirname + '/views/'

// Templating engine
app.set('views', viewPath)
app.set('view engine', 'jade');

var portfolio = require('./projects.js');


// Routes
app.get('/', (req, res) => {
  res.render('index' ,{title: "MADE BY HUMAN", projects: portfolio.getProjects()});
});

app.get('/projects', (req, res) => {
  res.render('projects');
});

app.get('/project/:id', (req, res) => {
  var project = portfolio.getProject(req.params.id);
  res.render('project', {project: project});
});

app.get('/about', (req, res) => {
  res.render('about');
});

// Server port
app.listen(PORT, function(){
 console.log("Connected at port: " + PORT)
});





