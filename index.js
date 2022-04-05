// TODO: Include packages needed for this application
// console.log("Hello World");
const inquirer = require("inquirer");
const fs = require("fs");
// const { fetchAsyncQuestionProperty } = require("inquirer/lib/utils/utils");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message:
      "Welcome to the README generator! To start, please provide your first & last name:",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username:",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log(
          "Please link to your GitHub repo so users know where to find more of your work"
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log(
          "Please provide a way for interested people to contact you"
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Every project needs a title. Please try again.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Enter your project description here:",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log(
          'Please provide a description of your project. Unsure what to include? Visit the repo of this README generator and navigate to "Description: Questions to Consider" under Guidelines for some tips.'
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "What are the instructions for installation?",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log(
          "Please provide installation instructions to ensure users have the proper software to run your program!"
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Instructions for usage:",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log(
          "Providing instructions for usage will help users properly navigate your project. Please try again."
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contributing",
    message: "How can others contribute to this project?",
    validate: (contributionInput) => {
      if (contributionInput) {
        return true;
      } else {
        console.log(
          "Please provide instructions on how others can contribute to your project."
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "tests",
    message:
      "Describe the tests written for your application and how to use them:",
    validate: (testsInput) => {
      if (testsInput) {
        return true;
      } else {
        console.log("Please provide instructions on how to use your project.");
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmLicenses",
    message: "Would you like to include a license?",
    default: false,
  },
  {
    type: "list",
    name: "licenses",
    message: "What license would you like to include?",
    choices: ["MIT", "GPL", "CC--0"],
    when: ({ confirmLicenses }) => {
      if (confirmLicenses) {
        return true;
      } else {
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
const writeToFile = (data) => {
  return new Promise((resolve, reject) => {
    // make a readme file and add to main folder
    fs.writeFile("./README2.md", data, (err) => {
      // if there's an error, reject the Promise and send the error to .catch() method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't continut to execute the resolve() function
        return;
      }
      // if everything went well, resolve the Promise and send the successful data to the .then() method
      resolve({
        ok: true,
        message: console.log(
          "Success! Navigate to the main directory to see your README!"
        ),
      });
    });
  });
};
// TODO: Create a function to initialize app

const init = () => {
  return inquirer.prompt(questions);
};

// Function call to initialize app
init()
  .then((userInput) => {
    return generateMarkdown(userInput);
  })
  .then((readmeInfo) => {
    return writeToFile(readmeInfo);
  })
  .catch((err) => {
    console.log(err);
  });
