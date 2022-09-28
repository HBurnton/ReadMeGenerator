// TODO: Include packages needed for this application
const inquirer = require('inquirer')

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

}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response)=>{
        writeToFile('README.md',generateMarkdown(response));
    })
    .then(()=>console.log('I did it'))
    .catch((err) => console.log(err))

}

// Function call to initialize app
init();



/*console.log('Hi, welcome to Node Pizza');

const questions = [
  {
    type: 'confirm',
    name: 'toBeDelivered',
    message: 'Is this for delivery?',
    default: false,
  },
  {
    type: 'input',
    name: 'phone',
    message: "What's your phone number?",
    validate(value) {
      const pass = value.match(
        /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
      );
      if (pass) {
        return true;
      }

      return 'Please enter a valid phone number';
    },
  },
  {
    type: 'list',
    name: 'size',
    message: 'What size do you need?',
    choices: ['Large', 'Medium', 'Small'],
    filter(val) {
      return val.toLowerCase();
    },
  },
  {
    type: 'input',
    name: 'quantity',
    message: 'How many do you need?',
    validate(value) {
      const valid = !isNaN(parseFloat(value));
      return valid || 'Please enter a number';
    },
    filter: Number,
  },
  {
    type: 'expand',
    name: 'toppings',
    message: 'What about the toppings?',
    choices: [
      {
        key: 'p',
        name: 'Pepperoni and cheese',
        value: 'PepperoniCheese',
      },
      {
        key: 'a',
        name: 'All dressed',
        value: 'alldressed',
      },
      {
        key: 'w',
        name: 'Hawaiian',
        value: 'hawaiian',
      },
    ],
  },
  {
    type: 'rawlist',
    name: 'beverage',
    message: 'You also get a free 2L beverage',
    choices: ['Pepsi', '7up', 'Coke'],
  },
  {
    type: 'input',
    name: 'comments',
    message: 'Any comments on your purchase experience?',
    default: 'Nope, all good!',
  },
  {
    type: 'list',
    name: 'prize',
    message: 'For leaving a comment, you get a freebie',
    choices: ['cake', 'fries'],
    when(answers) {
      return answers.comments !== 'Nope, all good!';
    },
  },
];
*/
//inquirer.prompt(questions).then((answers) => {
  //console.log(JSON.stringify(answers, null, '  '));
//});