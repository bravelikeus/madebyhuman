var express = require('express');
var jade = require('jade');
// var blogger = require('logger');
var bodyParser = require('body-parser');


const app = express();

// -- Task -- config middleware
var middleware = require('./middleware.js');
var portfolio = require('./projects.js');


// Templating engine
const viewPath = __dirname + '/views/';
app.set('views', viewPath)
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(middleware.logger);

const PORT = process.env.PORT || 5000;


// Routes
app.get('/', (req, res) => {
  res.render('index' ,{title: "MADE BY HUMAN", projects: portfolio.getProjects()});
});

app.get('/projects', (req, res) => {
  res.render('projects');
});

app.get('/project/:id', (req, res) => {
  var project = portfolio.getProject(req.params.id);
  res.render("projects/" + project.name, {project: project});
  console.log(project.name);
});

app.get('/about', (req, res) => {
  res.render('about');
});

// Server port
app.listen(PORT, () =>{
 console.log("Connected at port: " + PORT)
});





