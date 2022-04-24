// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'github',
    message: "What is your GitHub username?",
    default: 'djpdim',
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("A valid GitHub username is required.");
        }
        return true;
  }
  },
  {
    type: 'input',
    name: 'repo',
    message: "What is the name of your GitHub repo?",
    default: 'readme-generator',
    validate: function (answer) {
      if (answer.length < 1) {
          return console.log("A valid GitHub repo is required for a badge.");
      }
      return true;
  }
  },
  {
    type: 'input',
    name: 'title',
    message: "What is the name of your project?",
    default: 'Readme Gen',
    validate: function (answer) {
      if (answer.length < 1) {
          return console.log("A valid project name is required.");
      }
      return true;
  }
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a Description of your project.",
    validate: function (answer) {
      if (answer.length < 1) {
          return console.log("A valid description is required.");
      }
      return true;
  }
  },
  {
    type: "list",
    name: "license",
    message: "Which kind of license?",
    choices: ['MIT', 'APACHE', 'GTL', 'NONE', 'GNU GPLv3']
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  },
  {
    type: 'input',
    name: 'installation',
    message: "If applicable, describe the steps required to install your project for the Installation section."
  },
  {
    type: 'input',
    name: 'usage',
    message: "Provide instructions and examples of your project in use for the Usage section."
  },
  {
    type: 'input',
    name: 'credits',
    message: "List your collaborators, if any, with links to their GitHub profiles."
  },
  {
    type: 'input',
    name: 'features',
    message: "If applicable, provide any features written for your application."
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
