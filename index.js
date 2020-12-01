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
    name: "contributing"
},
{
    type: "input",
    message: "Test instructions:",
    name: "tests"
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
    <license>-<${answers.license}>-<grey>
    <h1>${answers.title}</h1><hr>
    <h2 id="descriptionID">Description</h2><hr>
    <p>${answers.description}</p>
    <h2>Table of Contents</h2>
    <ul>
        <li><a href="descriptionID">Description</a></li>
        <li><a href="installationID">Installation</a></li>
        <li><a href="usageID">Usage</a></li>
        <li><a href="contributingID">Contributing</a></li>
        <li><a href="testsID">Tests</a></li>
        <li><a href="licenseID">License</a></li>
        <li><a href="questionsID">Questions</a></li>
    </ul><hr>
    
  
    <h2 id="installationID">Installation</h2>
    <p>${answers.installation}</p>
    <h2 id="usageID">Usage</h2>
    <p>${answers.usage}</p>
    <h2 id="contributingID">Contributing</h2>
    <p>${answers.contributing}</p>
    <h2 id="testsID">Tests</h2>
    <p>${answers.tests}</p>
    <h2 id="licenseID">License</h2>
    <p>This application is covered under the ${answers.license} license</p>
    <h2 id="questionsID">Questions</h2>
    <p>Github: <a href="https://unchar.bootcampcontent.com/${answers.github}"</p>
  
    
  </div>
</div>
</body>
</html>`;

promptUser()
    .then((asnwers) => writeFileAsync('index.html', generateHTML(answers)))
    .then(() => console.log("Successfully wrote to index.html"))
    .catch((err) => console.error(err));

function init();
init();