const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? 📧'
      },
      {
        type: 'input',
        name: 'github',
        message: 'Where What is your Github User id?'
      },
      {
        type: 'input',
        name: 'title',
        message: "What is your Project's Name?"
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is your Project About..describe briefly?'
      },
      {
        type: 'list',
        name: 'license',
        message: 'What kind of license is needed for the project?',
        choices:["LGPLv3", "MIT","GPLv3","APACHE Ver 2.0"] 
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What prequiste commands needs to be run for dependencies to be installed',
        default: `npm i`
      },
     
      {
        type: 'input',
        name: 'usage',
        message: 'What does the user needs to know about using the readme generator Repo?'
      },
      {
        type: 'input',
        name: 'test',
        message: 'What commands needs to be used to run test',
        default: `npm test`
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What does the user needs to know in order to contribute to this REPO? '
      }
    ];
  
  const generateHTML = (answers) =>

;

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
