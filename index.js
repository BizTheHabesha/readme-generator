// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {message: "A creative title:",name:'title',type:'input',default:'New Project'},
    {message: "Let's give it a description:",name:"description",type:'input',defautl:''},
    {message: "How will the user install this:",name:"install",type:'input',default:'There are no specific installation instructions'},
    {message: "How should the user use this:",name:"use",type:'input',default:'There are no specific usage instructions'},
    {message: "What're some ways to test this:",name:"testing",type:'input',default:'There are no specific testing instructions'},
    {message: "How can users contribute, if at all:",name:"contributing",type:'input',default:'Contribute through GitHub forks and issues'},
    {message: "Lets give it a license:",name:"license",type:'list',choices: ['MIT','cc','OSL 3.0','none'],default:'none'},
    {message: "What's your GitHub username:",name:"username",type:'input',default:''},
    {message: "What's the email associated with that username:",name:"email",type:'password',default:''}
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(response => {
        generateMarkdown(response);
    })
}

// Function call to initialize app
init();
