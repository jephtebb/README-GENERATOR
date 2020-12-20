// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  // Prompt the user

  {
    type: 'input',
    name: 'title',
    message: 'What is your title of the project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the description of the project?'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What do I need to install in order to run this app?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is this app used for?'
  },
  {
    type: 'input',
    name: 'credit',
    message: 'Who else contributed in making this app?'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license is used for this app?',
    choices: ['ISC', 'MIT', 'Apache', 'Boost', 'IBM', 'Mozilla']
  },

  {
    type: 'input',
    name: 'test',
    message: 'What do you use to test this app?'
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your github username?'
  },
  {
    type: 'input',
    name: 'repo',
    message: 'What is your repo?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your github email?'
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) {
      throw err;
    }
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log('You have all your readme questions answered');
    writeToFile('README.md', generateMarkdown(answers));
  })
}

// Function call to initialize app
init();
