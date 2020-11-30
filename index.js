const inquirer = require('inquirer');
const fs = require('fs');
//const generateMarkdown = require("./utils/generateMarkdown");


const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

const questions = () =>
    inquirer.prompt([
{
    type: "input",
    message: "Title of project:",
    name: "title"
},
{
    type: "input",
    message: "Description of project:",
    name: "description"
},
{
    type: "input",
    message: "Installation instructions:",
    name: "installation"
},
{
    type: "input",
    message: "Usage information:",
    name: "usage"
},
{
    type: "input",
    message: "Contribution guidelines:",
    name: "guidelines"
},
{
    type: "input",
    message: "Test instructions:",
    name: "instructions"
},
{
    type: "input",
    message: "Github username:",
    name: "github"
},
{
    type: "input",
    message: "LinkedIn URL:",
    name: "linkedin"
},
{
    type: "list",
    message: "License:",
    name: "license",
    choices: ["ISC", "MIT", "Mozilla Public License 2.0"]
},
]);

const generateHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.name}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

promptUser()
    .then((asnwers) => writeFileAsync('index.html', generateHTML(answers)))
    .then(() => console.log("Successfully wrote to index.html"))
    .catch((err) => console.error(err));