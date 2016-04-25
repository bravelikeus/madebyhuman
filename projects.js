var express = require('express');

var projects = [
  {
    id: 1,
    name: "project 1",
    description: "project 1 desctiption"
  },
  {
    id: 2,
    name: "project 2",
    description: "project 2 desctiption"
  },
  {
    id: 3,
    name: "project 3",
    description: "project 3 desctiption"
  }
]


exports.getProjects = function() {
  return projects;
}

exports.getProject = function(id) {
  for (var i=0; i < projects.length; i++) {
    if(projects[i].id == id) {
      return projects[i];
    }

  }
}






