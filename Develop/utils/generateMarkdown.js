// DONE Create a function that returns a license badge based on which license is passed in
// TODO is this the best way to do it? or would it be better to set the variable to a falsy value ahead of time and use if (!license)
function renderLicenseBadge(license) {
    if (license === 'None') {
      return ''
    }
    // TODO is there an improved way of pulling variable like the other functions? since URL formats differ
    // example- https://opensource.org/license/gpl-3.0 is the license url https://img.shields.io/badge/License-GPL--3.0-blue is the badge url (two dashes instead of one).
    else if (license === 'MIT') {
    return `![License](https://img.shields.io/badge/License-MIT-blue.svg)`;}
    else if (license === 'GPL-3-0') {
      return `![License](https://img.shields.io/badge/License-GPL--3.0-blue)`;}
    else if (license === 'Apache-2.0') {
      return `![License](https://img.shields.io/badge/License-Apache%202.0-orange%5BApache)`;}
    else if (license === 'BSD-3-Clause') {
      return `![License](https://img.shields.io/badge/BSD%20license-3--Clause-green)`}
    }

// DONE Create a function that returns the license link
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  return `This project is listed under the ${license} [License](https://opensource.org/licenses/${license}). You are free to use, modify, and distribute this software in accordance with the terms of the license. For more details, please refer to the LICENSE file in the repository.`
}

// DONE Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `## License`
}

// DONE Create a function to generate markdown for README
// We define the questions in index.js
// We use inquirer.prompt to ask the questions/collect
// We pass the collected response back on the index.js file) as an object to the generateMarkdown function.
function generateMarkdown(answersObj) {
  // TODO is it best practice for answersObj to match the argument from index file named data?
  return `# ${answersObj.title}
${renderLicenseBadge(answersObj.license)}
${renderLicenseSection(answersObj.license)}
${renderLicenseLink(answersObj.license)}
## Description
${answersObj.description}
## Table of Contents
${answersObj.tableOfContents.map(item => `- ${item}`).join('\n')}
## Installation
${answersObj.howToInstall}
## Usage
${answersObj.howToUse}
## Contributing
${answersObj.projectCollaborators}
## Tests
${answersObj.projectTests}
## Questions
${answersObj.projectQuestions}
`;
}

// TODO look into how Table of Contents config works.
// TODO table of contents still puts a dash if there are no items (logic to omit dash if empty)


export default generateMarkdown;
