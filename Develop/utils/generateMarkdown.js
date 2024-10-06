// DONE Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === 'None') {
    return ''
  }
  else if (license === 'MIT') {
    return `![License](https://img.shields.io/badge/License-MIT-blue.svg)`;
  }
  else if (license === 'GPL-3-0') {
    return `![License](https://img.shields.io/badge/License-GPL--3.0-blue)`;
  }
  else if (license === 'Apache-2.0') {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-orange%5BApache)`;
  }
  else if (license === 'BSD-3-Clause') {
    return `![License](https://img.shields.io/badge/BSD%20license-3--Clause-green)`
  }
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
function generateMarkdown(answersObj) {
  // Function to create anchor links for the table of contents
  const createAnchorLink = (item) => {
    return `- [${item}](#${item.toLowerCase().replace(/ /g, '-')})`;
  };

  return `# ${answersObj.title}
${renderLicenseBadge(answersObj.license)}
${renderLicenseSection(answersObj.license)}
${renderLicenseLink(answersObj.license)}
## Table of Contents
${answersObj.tableOfContents.map(createAnchorLink).join('\n')}
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Description
${answersObj.description}
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

export default generateMarkdown;
