const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");


const writeFileAsync = util.promisify(fs.writeFile);


function promptUser() {
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
      message: "Information to use your application?",
      name: "usage"
    },
    {
      type: "input",
      message: "What tests do you need to run?",
      name: "tests"
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
}

function getLicense(license){
  return `[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)`
}

function generateReadMe(response){
  return ` 

# ${response.project}

### ${response.description}

## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributers)
  * [Questions](#questions)

## Installation
  ${response.installation}

  ## Usage
    ${response.usage}

  ## License
  Licensed under the ${getLicense(response.license)};

  ## Contributers
    ${response.contributers}

  ## Questions
  Please contact me at <${response.email}>. You can also find more of my work at [${response.username}](https://github.com/${response.username}).
  `;
}


async function init() {
  try {
    const response = await promptUser();
    const page = generateReadMe(response);

    await writeFileAsync("README.md", page);

    console.log("Generating README.md");
  } catch(err) {
    console.log(err);
  };
}




init();