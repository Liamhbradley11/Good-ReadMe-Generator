var inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        type: "input",
        message: "What is your user name?",
        name: "username"
      },
      {
        type: "input",
        message: "What is your password?",
        name: "password"
      },
      {
        type: "input",
        message: "Re-enter password to confirm:",
        name: "confirm"
      }
];


inquirer
  .prompt(questions)
   
  .then(function(response) {
    console.log(response)

    console.log(generateMarkdown(response))

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
