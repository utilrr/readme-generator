// TODO: Include packages needed for this application
// console.log("Hello World");
const inquirer = require("inquirer");
const { fetchAsyncQuestionProperty } = require("inquirer/lib/utils/utils");

// TODO: Create an array of questions for user input
const questions = [];

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your repository?",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter your project name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "about",
      message: "Please enter some information about your project:",
      validate: (aboutInput) => {
        if (aboutInput) {
          return true;
        } else {
          console.log("Please enter some information about this project!");
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmInstall",
      message: "Does your project need special instructions on how to install?",
      default: true,
    },
    {
      type: "input",
      name: "install",
      message: "Enter your installation instructions:",
      when: ({ confirmInstall }) => {
        if (confirmInstall) {
          return true;
        } else {
          return false;
        }
      },
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  promptQuestions();
}

// Function call to initialize app
init();
