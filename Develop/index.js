// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
    type: "input",
    name: "github",
    message: "What is your Github username?"
  },
  {
    type: "input",
    name: "title",
    message: "What is your Project name?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a Description of your project."
  },
  {
    type: "list",
    name: "license",
    message: "Which kind of license?",
    choices: ['MIT', 'APACHE', 'GTL', 'NONE']
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log("generateReadme");
        writeToFile('README.md', generateMarkdown({...inquirerResponses}));
    })
}

// Function call to initialize app
init();
