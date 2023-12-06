//const { default: inquirer } = require("inquirer");

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');

/* // TODO: Create an array of questions for user input
const inputAnswers = [projectTitle, description, installationInstructions, repolink, instructions, 
screenshot, collaborators, collaboratorLinks, thirdpartyLinks, license, features,
contribute, tests];  */


const generateReadme = ({projectTitle, description, installationInstructions, repolink, instructions, 
    screenshot, collaborators, collaboratorLinks, thirdpartyLinks, license, features,
    contribute, tests}) => 
`#  ${projectTitle}

##  Description
${description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${installationInstructions}

## Usage

Repository Link:
${repolink}

Usage Instructions:
${instructions}

Media:
![Image](${screenshot})

## Credits

Collaborators:
${collaborators}
Collaborator Links:
${collaboratorLinks}
Third Party Links:
${thirdpartyLinks}

## License

User License:
${license}

## Features

${features}

## How to Contribute

How you can contribute:
${contribute}

## Tests
Testing protocol of the application:
${tests}`;


inquirer
    .prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'Please input the project name:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please input the project description:',
        },
        {
            type: 'input',
            name: 'installationInstructions',
            message: 'Please input the project installation instructions:',
        },
        {
            type: 'input',
            name: 'repolink',
            message: 'Please input the project repository link:',
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'Please input the project usage instructions:',
        },
        {
            type: 'input',
            name: 'screenshot',
            message: 'Please input the project screenshot link:',
        },
        {
            type: 'input',
            name: 'collaborators',
            message: 'Please input the project collaborators:',
        },
        {
            type: 'input',
            name: 'collaboratorLinks',
            message: 'Please input the collaborator links:',
        },
        {
            type: 'input',
            name: 'thirdpartyLinks',
            message: 'Please input third party links:',
        },
        {
            type: 'input',
            name: 'license',
            message: 'Please input the name of the project license:',
        },
        {
            type: 'input',
            name: 'features',
            message: 'Please input the project features:',
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Please input how to contribute to the project:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please input info about project testing:',
        },
        
    ])
    .then((answers) => {
        const readmeContent = generateReadme(answers);
    
        fs.writeFile('Readme.md', readmeContent, (err) =>
          err ? console.log(err) : console.log('Successfully created Readme!')
        );
      });



/* // TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {

}

// Function call to initialize app
init();
 */