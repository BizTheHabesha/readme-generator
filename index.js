const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// store our questions as an array of objects formatted so that inquirer can ask them.
const questions = [
    {message: 'File to write to, including file extension:',name:'filename',type:'input',default:'README.md'},
    {message: "A creative title:",name:'title',type:'input',default:'New Project'},
    {message: "Let's give it a description:",name:"description",type:'input'},
    {message: "Will the installation instruction be in bash or plain text:", name:"installmethod",type:'list',choices:['bash','plain text'], default:'plain text'},
    {message: "How will the user install this:",name:"install",type:'input',default:'There are no specific installation instructions'},
    {message: "How should the user use this:",name:"use",type:'input',default:'There are no specific usage instructions'},
    {message: "What're some ways to test this:",name:"testing",type:'input',default:'There are no specific testing instructions'},
    {message: "How can users contribute, if at all:",name:"contributing",type:'input',default:'Contribute through GitHub forks and issues'},
    {message: "What's your GitHub username:",name:"username",type:'input'},
    {message: "What's the email associated with that username:",name:"email",type:'password'},
    {message: "How should people contact you with questions, if at all. Use +email or +username to add those into your text:",name:"questions", type:'input', default: 'Email +email or contact +username on Github'},
    {message: "Lets give it a license:",name:"license",type:'list',
        // these choices are formatted so that the regex in generateMarkdown.js can find their badge.
        choices: [
            'Apache 2.0',
            'BSL 1.0',
            'BSD 3 Clause',
            'BSD 2 Clause',
            'Creative Commons 0 1.0',
            'GNU GPLv3',
            'IBM Public License Version 1.0',
            'MIT',
            'none'
        ],default:'none'}
]
// write to markdown files using filename and the data to use
function writeToFile(fileName, data) {
    // writefile will override anything already present in the file or create a new one if the file doesn't exist. use generateMarkdown() to format data accoridingly.
    fs.writeFile(fileName, generateMarkdown(data), function(err){
        // the type of errors that fs can throw, like bus errors, can be devistating. Best to quit if one is thrown.
        if(err) throw err;
        // confirm to user that the readme was succesfully generated.
        console.log(`README for ${data['title']} was generated`);
    })
}
// function to run on start
function init() {
    // Let the user know how to add newlines
    console.log('To add newlines, please use +n');
    // get user response via inquirer and our defined questions above.
    inquirer.prompt(questions)
    .then(response => {
        // write to the readme given the users response.
        writeToFile(response['filename'],response);
    });
}

init();
