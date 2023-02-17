const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./starter/utils/generateMarkdown");

// array of questions to prompt user for data
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
        validate: function (userInput) {
            if (userInput.length < 1) {
                return console.log("Please enter a username");
            }
            return true;
        },
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: function (userInput) {
            if (userInput < 1) {
                return console.log("Please enter an email address");
            }
            return true;
        },
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your Project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What will be the command used to install the project?',
        default: 'npm install'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What command will is used to run the application?',
        default: "node index.js"
    },
    {
        type: 'list',
        message: 'Choose license used for your project',
        name: 'license',
        choices: ['MIT', 'Apache_2.0','BSD_3--Clause'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can other developers contribute to your project?',
        default: "Fork and Pull request"
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What will be the command used to test the project?',
        default: 'npm test'
    },
];


// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success! Your README.md file has been generated')
    );
}

// function to initialize program
async function init() {

    // user is prompted questions
    const data = await inquirer.prompt(questions);

    console.log("Generating your README based on your answers ...");
    const makeReadMe = generateMarkdown(data);

    await writeToFile('newREADME.md', makeReadMe);
};

// function call to initialize program
init();
