const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./utils/generateSVG');

// Function to write SVG file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Generated logo.svg')
  );
}

// Function to initialize application
function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo text:',
        validate: (input) => input.length <= 3 || 'Please enter up to three characters.',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (color keyword or hexadecimal number):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (color keyword or hexadecimal number):',
      },
    ])
    .then((answers) => {
      // Generate SVG content
      const svgContent = generateSVG(answers);

      // Write SVG file
      writeToFile('logo.svg', svgContent);
    });
}

// Initialize application
init();
