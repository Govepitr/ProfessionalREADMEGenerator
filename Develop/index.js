const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateRM = require("./utils/generateRM")
const writeFileAsync = util.promisify(fs.writeFile);

// Prompt for user to begin entering input

function promptUser(){
  return inquirer.prompt(
    {
      type: "input",
      name: "projectTitle",
      message: "What is the name of your project?",
    }

  )}
