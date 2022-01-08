// TODO: Include packages needed for this application
let inquirer = require('inquirer');
let fs = require("fs");
let path = require("path");
let generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the project's name?",
        name: "title",
    },
    {
        type: "input",
        message: "Enter project description",
        name: "description",
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },
    {
        type: "input",
        message: "installation instructions",
        name: "installation",
    }, 
    {
        type: "input",
        message: "running a test",
        name: "test",
    }, 
    {
        type: "input",
        message: "what is the contribution?",
        name: "contributing",
    }, 
    {
        type: "input",
        message: "How do you use your proyect?",
        name: "usage",
    },
    {
        type: "list",
        name: 'license',
        message: "please choose the correct license type for the project",
        choices : ['BSD 3','APACHE 2.0','MIT','none'],
    },     

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((userAnswers) => {
        console.log("userAnswers",userAnswers);
        writeToFile("mygeneratedreadme.md", generateMarkdown({ ...userAnswers}));
    });
}

// Function call to initialize app
init();
