// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //Badges and links taken from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
  switch(license){
    case 'MIT':
      return  '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'GPLv3':
      return  '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'Apache':
      return  '[Details on the Apache license](https://choosealicense.com/licenses/apache-2.0/)';
    case 'GPLv3':
      return  '[Details on the GPLv3 License](https://choosealicense.com/licenses/gpl-3.0/)';
    case 'MIT':
      return '[Details on the MIT license](https://choosealicense.com/licenses/mit/';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == 'None'){
    return ''
  }
  return`
  ## License
  This project licensed under the ${license} license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
# ${data.title}

## Description
${data.description}

### Table of contents
- [Description](#description)
- [Installation Instructions](#installation-instructions)
- [Usage Guidelines](#usage-guidelines)
- [Contribution Guidelines](#contribution-guidelines)
- [Testing Information](#testing-information)
- [Contact](#contact)

## Installation Instructions
${data.install}

## Usage Guidelines
${data.usage}

## Contribution Guidelines
${data.contribution}

## Testing Information
${data.test}

## Contact
[Find me on GitHub](https://github.com/${data.github})
[Send me an email](mailto:${data.email})

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
