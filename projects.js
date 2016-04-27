var projects = require('./data/projects.json'); 

exports.getProjects = function(data) {
  return projects;
}

exports.getProject = function(id) {
  for (var i=0; i < projects.length; i++) {
    if(projects[i].id == id) {
      return projects[i];
    }

  }
}






