// TODO: Include packages needed for this application

const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
// const questions = [
//     "A creative title:",
//     "Let's give it a description:",
//     "How will the user install this:",
//     "How should the user use this:",
//     "How can users contribute, if at all:",
//     "What're some ways to test this:",
//     "Lets give it a license:",
//     "What's your GitHub username:",
//     "What's the email associated with that username:"
// ];

const questions = [
    {question: "A creative title",name:'title'},
    {question: "Let's give it a description",name:"description"},
    {question: "How will the user install this",name:"install"},
    {question: "How should the user use this",name:"use"},
    {question: "What're some ways to test this",name:"testing"},
    {question: "How can users contribute, if at all",name:"contributing"},
    {question: "Lets give it a license",name:"license"},
    {question: "What's your GitHub username",name:"username"},
    {question: "What's the email associated with that username",name:"email"}
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    console.log('text')
}

// Function call to initialize app
init();
