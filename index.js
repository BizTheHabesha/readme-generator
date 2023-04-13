const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = [
    {message: 'File to write to, including file extension:',name:'filename',type:'input',default:'README.md'},
    {message: "A creative title:",name:'title',type:'input',default:'New Project'},
    {message: "Let's give it a description:",name:"description",type:'input'},
    {message: "Will the installation instruction be in bash or plain text:", name:"installmethod",type:'list',choices:['bash','plain text'], default:'plain text'},
    {message: "How will the user install this:",name:"install",type:'input',default:'There are no specific installation instructions'},
    {message: "How should the user use this:",name:"use",type:'input',default:'There are no specific usage instructions'},
    {message: "What're some ways to test this:",name:"testing",type:'input',default:'There are no specific testing instructions'},
    {message: "How can users contribute, if at all:",name:"contributing",type:'input',default:'Contribute through GitHub forks and issues'},
    {message: "Lets give it a license:",name:"license",type:'list',
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
        ],default:'none'},
    {message: "What's your GitHub username:",name:"username",type:'input'},
    {message: "What's the email associated with that username:",name:"email",type:'password'}
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function(err){
        if(err) throw err;
        console.log(`README for ${data['title']} was generated`);
    })
}

function init() {
    console.log('To add newlines in markdown use two consecutive spaces');
    inquirer.prompt(questions)
    .then(response => {
        writeToFile(response['filename'],response);
    });
}

init();
