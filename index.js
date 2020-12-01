//adding all the packages that will be needed
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
    inquirer.prompt([
//questions which will be asked to user in the terminal
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
    message: "Contributors:",
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
    message: "Email:",
    name: "email"
},
{
    type: "list",
    message: "License:",
    name: "license",
    choices: ["ISC", "MIT", "Mozilla Public License 2.0"]
},
]);
//creates function for getting answers from terminal into provided layout
const generateMarkdown = (answers) =>
//layout of readme 
 `
 ![License](https://img.shields.io/badge/license-${answers.license}-red)


# ${answers.title}  


### Description  
${answers.description}


### Table of Contents  
[Description](#description)  
[Installation](#installation)  
[Usage](#usage)  
[Contributing](#contributing)  
[Tests](#tests)  
[License](#license)  
[Questions](#questions)  


### Installation  
${answers.installation}


### Usage  
${answers.usage}  


### Contributing  
Contributions provided by: ${answers.contributing}


### Tests  
${answers.tests}


### License  
This application is covered under the ${answers.license} license


### Questions  
For further questions, please contact me at:
${answers.email}  
[Github link](https://unchar.bootcampcontent.com/${answers.github}/)


### Images  
![README VS Code](./Assets/image1.png)  
![README Preview](./Assets/image2.png)`

promptUser()
//creates readme file and invokes markdown function
.then((answers) => writeFileAsync(`README.md`, generateMarkdown(answers)))
//confirmation to let terminal user know that readme was written
    .then(() => console.log(`Successfully wrote to README.md file`))
//logs errors
    .catch((err) => console.error(err));
