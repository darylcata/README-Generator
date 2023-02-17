const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
        validate: function (userInput){
            if(userInput === null)
        return console.log("Please enter a username")}
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: function (userInput){
            if(userInput === null)
        return console.log("Please enter an email address")}
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the name of your Github repo?',
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
        message: 'What were the steps required for the Installation of your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will this project be used?',
    },
    {
        type: 'list',
        message: 'Choose license used for your project',
        name: 'license',
        choices: ['MIT', 'Apache License 2.0'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can other developers contribute to your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will this project be used?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What will be the command used to test the project?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'install',
        message: 'What will be the command used to install the project?',
        default: 'npm install'
    },
];


// function to write README file
function writeToFile(fileName, data) {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.md`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(writeToFile(data));
};

// function call to initialize program
init();
