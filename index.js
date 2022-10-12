// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const genMarkdown = require("./utils/generateMarkdown");
const readMeTemplate = require("./src/generate-readme");

// TODO: Create an array of questions for user input

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "githubName",
      message: "What is your Github Username?",
    },

    {
      type: "link",
      name: "Github",
      message:
        "Please provide the deployed link to your  Github Repository?(required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("please enter the deployed link");
          return false;
        }
      },
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
      name: "Project Name",
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
      name: "description of project",
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
  ]);
};

//TODO: create a function to write the README file
const writeFile = (readmeContent) => {
    return new promise((resolve, reject) => {
      fs.writeFile("./dist/README.md", readmeContent, (err) => {
        // if theres a error, reject the promise and send the error to the promises .catch() method
        if (err) {
          reject(err);
          // return out of the function here to make sure the promsie doesnt accidently execute the resolve() fucntion as well
          return;
        }
        // if everything went well, resolve the promise and send the successful data to the .then() method
        resolve({
          ok: true,
          message: "file created",
        });
      });
    });
  };

function init () {
promptUser() 
.then(results =>{
    return genMarkdown(results)
})
.then(results =>{
    return readMeTemplate(results)
})
.then(readmeContent =>{
    return writeFile(readmeContent)
})
.catch(err => {
    console.log(err)
  })
}

init()

