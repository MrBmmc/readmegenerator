// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {

    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';

    case 'Mozilla':
      return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)';

    case 'Apache':
      return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';

    case 'No License':
      return '';

  }
}

// TODO: Create a function that returns the license link

// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case '':
      return '';

    case 'MIT':
      return '(https://opensource.org/licenses/MIT)';

    case 'Mozilla':
      return '(https://opensource.org/licenses/MPL-2.0)';

    case 'Apache':
      return '(https://opensource.org/licenses/Apache-2.0)';

    case 'No License':
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === '') {
    return '';
  }
  else {
    return `Licensed by [${license}](${renderLicenseLink(license)})`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  
  ${renderLicenseBadge(data.license)}  ${renderLicenseSection(data.license)}

  ## Table of Contents
  - [Description](#Discription)
  - [Installation](#Installation-Instructions)
  - [Instructions](#Instructions-for-Use)
  - [Contribution](#Contribution)
  - [Testing](#Testing-Procedures)
  - [Contact](#Contact)



## Description:
 ${data.description}

## Installation Instructions:
 ${data.install} 
 
 ## Instructions for Use:
 ${data.instructions}
 
 ## Contribution:
 ${data.contribution}
 
 ## Testing Procedures:
 ${data.test}
 


 
 ## Contact:
 Github User: [${data.github}](https://github.com/${data.github})
 
 Email Address: ${data.email}`;
}


module.exports = { generateMarkdown };
