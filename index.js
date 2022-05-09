// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is the title of the Project?"
  },
  {
    type: "input",
    name: "discription",
    message: "Please discribe your project."
  },
  {
    type: "input",
    name: "installation",
    message: "How do you install your application/ dependencies?"
  },
  {
    type: "input",
    name: "howto",
    message: "Please discribe how to use your application?"
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please choose a license for your project?",
    choices: [
      { name: "Apache", value: "Apache"},
      { name: "BSD", value: "BSD"},
      { name: "Creative Commons", value: "Creative_Commons"},
      { name: "Eclipse", value: "Eclipse"},
      { name: "GNU", value: "GNU"},
      { name: "IBM", value: "IBM"},
      { name: "MIT", value: "MIT"},
      { name: "Mozilla", value: "Mozilla"},
      { name: "Zlib", value: "Zlib"},
    ]
  },
  {
    type: "input",
    name: "contributing",
    message: "Please describe your contribuiting guidelines for the project."
  },
  {
    type: "input",
    name: "tests",
    message: "Please provide your test commands?"
  },
  {
    type: "input",
    name: "github",
    message: "Please provide your github link."
  },
  {
    type: "imput",
    name: "email",
    message: "please provide your email address."
  }
 
  ])
}

;


// TODO: Create a function to initialize app
const init = () => {
  questions()
    // Use writeFileSync method to use promises instead of a callback function
    .then((data) => fs.writeFileSync('Generated  ReadMe.md', generateMarkdown(data)))
    .then(() => console.log('Successfully Generated ReadMe file!'))
    .catch((err) => console.error(err));

}

// Function call to initialize app
init();

