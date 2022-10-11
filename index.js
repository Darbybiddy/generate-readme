// TODO: Include packages needed for this application
const inquirer = require(inquirer);
const fs = require("fs");
const readMeTemplate = require("./src/generate-readme");

// TODO: Create an array of questions for user input

const promptUserQuestion = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "Github name",
      message: "What is your Github Username?(required)",
      validate: (nameInput) =>{
        if(nameInput){
            return true
        }else {
            console.log("please enter your Github Username")
            return false
        }
      }
    },

    {
      type: "link",
      name: "Github",
      message:
        "Please provide the deployed link to your  Github Repository?(required)",
        validate: (nameInput) =>{
            if(nameInput){
                return true
            }else {
                console.log("please enter the deployed link")
                return false
            }
          }
    },

    {
      type: "input",
      name: "Email",
      message: "please enter your email(required)",
      validate: (nameInput) =>{
        if(nameInput){
            return true
        }else {
            console.log("please enter your email")
            return false
        }
      }
    },
  
    {
      type: "input",
      name: "Project Name",
      message: "What is the name of your project?(required)",
      validate: (nameInput) =>{
        if(nameInput){
            return true
        }else {
            console.log("please enter your project name")
            return false
        }
      }
    },

    {
      type: "input",
      name: "description of project",
      message: "Please provide a description of your project.(Required)",
      validate: (nameInput) =>{
        if(nameInput){
            return true
        }else {
            console.log("please enter a project description")
            return false
        }
      }
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
      message:
        "Please select all the Licenses used for this project.",
      choices: ["MIT", "Apache", "BSD-3", "BSD-2", "ISC", "None"],
    },

    {
      type: "input",
      name: "testing",
      message:
        "Please provide a description on how to operate your project.(Required)",
        validate: (nameInput) =>{
            if(nameInput){
                return true
            }else {
                console.log("please enter a description on how to operate your project.")
                return false
            }
          }
    },
  ]);

  .then(results => {
    return results
  })
}


//TODO: create a function to write the README file
    fs.writeFile("./index.html", promptUserQuestion, (err) => {
      if (err) throw err;
      console.log(
        "Page created! Check out index.html in this directory to see it!"
      );
    });
//TODO: create a function to initialize app
function init(){

}
//TODO: function call to initialize app
 init()
  