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
      message: "What is the name of your project?",
      name: "project"
    },
    {
      type: "input",
      message: "What is the name of your project?",
      name: "project"
    },
  ]


// inquirer
//   .prompt(questions)
   
//   .then(function(response) {
//     console.log(response)

//     console.log(generateMarkdown(response))

    // if (response.confirm === response.password) {
    //   console.log("Success!");
    // }
    // else {
    //   console.log("You forgot your password already?!");
    // }
  });








// const questions = [



function writeToFile(fileName, data) {
}

function init() {

}

init();
// console.log(questions)
