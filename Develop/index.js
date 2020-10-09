const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writefile);
const generateMarkdown = require("./utils/generateMarkdown");


function promptUser(){
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your Git Hub username?",
      name: "username"
    },
    {
      type: "input",
      message: "What is the name of your project?",
      name: "project"
    },
    {
      type: "input",
      message: "Provide a description of your project. What can it do?",
      name: "description"
    },
    {
      type: "input",
      message: "What do you need to install the project?",
      name: "installation"
    },
    {
      type: "input",
      message: "How do you use your application?",
      name: "usage"
    },
    {
      type: "input",
      message: "What license would you use?",
      name: "license"
    },
    {
      type: "input",
      message: "Are there any other contributers?",
      name: "contributers"
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email"
    },


  ]);




function writeFile(file, data) {
  fs.writeFile(file, data, err => {
    if (err) throw err }) 
}

// function init() {

// }

// init();
// console.log(questions)
