// TODO: Include packages needed for this application
// console.log("Hello World");
const inquirer = require("inquirer");
const fs = require('fs');
const { fetchAsyncQuestionProperty } = require("inquirer/lib/utils/utils");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
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
    {
      type: "input",
      name: "usage",
      message: "Please explain the usage of this project:",
      validate: (usageInput) => {
        if (usageInput) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "list",
      name: "license",
      choices: ["MIT", "GNU", "Apache", "BSD", "ISC"],
    },
    {
      type: "confirm",
      name: "confirmContribute",
      message: "Will your project be open to contributions?",
      default: true,
    },
    {
      type: "input",
      name: "contribution",
      message: "Please explain your contribution guidelines for this project:",
      when: ({ confirmContribute }) => {
        if (confirmContribute) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "confirm",
      name: "confirmTest",
      message: "Will your project need testing instructions?",
      default: true,
    },
    {
      type: "input",
      name: "testing",
      message: "Please input testing instructions for the user:",
      when: ({ confirmTest }) => {
        if (confirmTest) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      type: "input",
      name: "githubUsername",
      message: "What is your GitHub username?",
      validate: (gitInput) => {
        if (gitInput) {
          return true;
        } else {
          console.log("Please enter your GitHub username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "gitLink",
      message: "Please enter your GitHub Profile Link:",
      validate: (gitLinkInput) => {
        if (gitLinkInput) {
          return true;
        } else {
          console.log("Please enter your GitHub Link!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email address for people to contact you:",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter your email adress!");
          return false;
        }
      },
    },
  ]);
    
// TODO: Create a function to write README file
function writeToFile(data) {
    let newData = generateMarkdown(data)
    fs.writeFile('README.md', newData, function (error) {
        if (error) {
            return console.log(error);
        } else {
            console.log('Your README was created!')
        }
            
    });
}
    
// const writeToFile = data => {
//     let newData = generateMarkdown(data)
//     fs.writeFile('README.md', newData, function (error) {
//         if (error) {
//             return console.log(error);
//         } else {
//             console.log('Your README was created!')
//         }
            
//     });
// }
    
    
    
    
    
//         .then(data => {
//             return generateMarkdown(data);
//         })
//         .then(pageMarkdown => {
//             return writeFile(pageMarkdown);
//         })
//         .catch(err => {
//             console.log(err);
//         })
// };


// TODO: Create a function to initialize app
    
function init() {
  return inquirer.prompt(questions)
    .then (data => {
        return data;
    })
}

// // Function call to initialize app
init()
    .then(MD => {
         return writeToFile(MD)
     })
