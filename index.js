// TODO: Include packages needed for this application
let enquirer = require("inquirer");
let fs = require("fs");
let path = require("path");
let generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project name",
    },
    {
        type: "input",
        name: "description",
        message: "project description",
    },
    {
        type: "input",
        name: "github",
        message: "github username",
    },
    {
        type: "input",
        name: "email",
        message: "what is your email?",
    },
    {
        type: "input",
        name: "installation",
        message: "installation instructions",
    }, 
    {
        type: "input",
        name: "test",
        message: "running a test",
    }, 
    {
        type: "input",
        name: "contributing",
        message: "what is the contribution?",
    }, 
    {
        type: "input",
        name: "usage",
        message: "How do you use your proyect?",
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
    enquirer.prompt(questions)
    .then((userAnswers) => {
        console.log("userAnswers",userAnswers);
        writeToFile("mygeneratedreadme.md", generateMarkdown({ ...userAnswers}));
    });
}

// Function call to initialize app
init();
