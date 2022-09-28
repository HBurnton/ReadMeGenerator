// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

### Table of contents
- [Description](#description)
- [Installation Instructions](#installation-instructions)
- [Usage Guidelines](#usage-guidelines)
- [Contribution Guidelines](#contribution-guidelines)
- [Testing Information](#testing-information)
- [Contact](#contact)

## Description
${data.description}

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


`;
}

module.exports = generateMarkdown;
