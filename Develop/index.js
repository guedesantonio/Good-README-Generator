const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
{
    type: "input",
    name: "github",
    message: "Enter your GitHub username:"
},
{
    type: "input",
    name: "email",
    message: "Enter your email address:"
},    
{
type: "input",
name: "title",
message: "What is your project title?"
},
{
    type: "input",
    name: "description",
    message: "Enter a short description for your project:"
},
{
    type: "input",
    name: "install_instructions",
    message: "Enter the installation instructions for your project:"
},
{
    type: "input",
    name: "usage_information",
    message: "Enter usage information for your project:"
},
{
    type: "input",
    name: "contribution_guidelines",
    message: "Enter contributing guidelines for your project:"
},
{
    type: "input", 
    name: "test_instructions", 
    message: "Enter test instructions for your project:"
},
{
    type: "list",
    name: "license",
    message: "Choose a licence for your project",
    choices: ['MIT License','GNU Lesser General Public License v3.0','Mozilla Public License 2.0','GNU Affero General Public License v3.0','The Unlicense','Apache License 2.0','GNU General Public License v3.0']
}
];

function promptUser() {
    return inquirer.prompt(questions);
}

// function to write README file
///////////////// function writeToFile(fileName, data) {
////////////////// }

const writeToFileAsync = util.promisify(fs.writeFile);

// function to initialize program

async function init() {
    try {
        const answer = await promptUser();
        const markdown = generateMarkdown(answer);
        await writeToFileAsync("readme.md", markdown);
    } catch (err) {
        console.log(err);
    }
    
}

// function call to initialize program
init();
