// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [];
// Prompt the user
inquirer
  .prompt([
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
        name: 'Table of Contents',
        message: 'Enter your table of contents?'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What do I need to install in order to run this app?'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is this app is used for?'
      },
      {
        type: 'input',
        name: 'license',
        message: 'What is license is used for this app?'
      },
      {
        type: 'input',
        name: 'Contributor',
        message: 'Who else contributed in making this app?'
      },
      {
        type: 'input',
        name: 'test',
        message: 'What do you use to test this app?'
      }
    ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
