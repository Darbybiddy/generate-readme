// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path")
const genMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

  const questions = [
    {
      type: "input",
      name: "githubName",
      message: "What is your Github Username?",
    },

    {
      type: "input",
      name: "Email",
      message: "please enter your email(required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("please enter your email");
          return false;
        }
      },
    },

    {
      type: "input",
      name: "title",
      message: "What is the name of your project?(required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("please enter your project name");
          return false;
        }
      },
    },

    {
      type: "input",
      name: "description",
      message: "Please provide a description of your project.(Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("please enter a project description");
          return false;
        }
      },
    },

    {
      type: "input",
      name: "installation",
      message: "How do you install your project?",
    },

    {
      type: "input",
      name: "usage",
      message:
        "Please list the instructions and examples on how to use this project.",
    },

    {
      type: "input",
      name: "credit",
      message: "please list all the contributors to this project, if any.",
    },

    {
      type: "checkbox",
      name: "license",
      message: "Please select all the Licenses used for this project.",
      choices: ["Apache", "MIT", "ISC","BSD-3", "BSD-2", "SIL-1.1", "None"],
    },

    {
      type: "input",
      name: "testing",
      message:
        "Please provide a description on how to operate your project.(Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log(
            "please enter a description on how to operate your project."
          );
          return false;
        }
      },
    },
  ]
//   ]);
// };

//TODO: create a function to write the README file
const writeFile = (fileName, data) => {
 return fs.writeFileSync(path.join(fileName),data)
  };

  function init() {
inquirer.prompt(questions).then((answers)=>{
  writeFile("./dist/README.md" , genMarkdown({...answers}))
})
  }


  init()
