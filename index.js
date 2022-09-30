// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? ',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a brief description of your project:\n',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please provide some brief installation instruction:\n'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information:\n',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?\n',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide some brief testing instructions for your project:\n'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project',
        choices: ['MIT', 'GPLv3', 'Apache', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is an email you can be reached at?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response)=>{
        writeToFile('README.md',generateMarkdown(response));
    })
    .then(()=>console.log('File Successfully Written'))
    .catch((err) => console.log(err))

}

// Function call to initialize app
init();