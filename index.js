// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var markdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        message: 'What is your Projects Title?',
        name: 'title',

    },
    {
        type: 'input',
        message: 'Please describe your Project...',
        name: 'description',

    },
    {
        type: 'input',
        message: 'How do you install your Project?',
        name: 'install',

    },
    {
        type: 'input',
        message: 'How do you use your App?',
        name: 'instructions',

    },
    {
        type: 'input',
        message: 'What are the contribution guidelines for this app?',
        name: 'contribution',

    },
    {
        type: 'input',
        message: 'How do you test the app?',
        name: 'test',

    },
    {
        type: 'list',
        message: 'Which license are you using?',
        choices: ['MIT', 'Mozilla', 'Apache', 'No License'],
        name: 'license',

    },
    {
        type: 'input',
        message: 'Enter your GitHub Username: ',
        name: 'github',

    },
    {
        type: 'input',
        message: 'Enter your email address: ',
        name: 'email',

    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
fs.writeFile(fileName, markdown.generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('README.md created!')
    );
}
// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
      writeToFile('README.md',answers);
    })
    .catch(error => {
      console.log('There was an error!');
      console.log(error);
    });
 }

// Function call to initialize app
init();


