// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if(license === 'MIT'){
    licenseLink = 'https://choosealicense.com/licenses/mit/'
  }else if (license === 'Apache 2.0'){
    licenseLink = 'http://www.apache.org/licenses/License-2.0'
  }else if (license === 'BSD v3.0'){
    licenseLink = 'https://opensource.org/licenses/BSD-3-Clause'
  }else{
    licenseLink = ''
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License This app is licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of contents

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

\`\`\`
${data.installation}

## Usage 

${data.usage}

## Tests
${data.tests}

${renderLicenseSection(data.license)}
`
};

module.exports = generateMarkdown;
