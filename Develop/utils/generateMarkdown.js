// DONE Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
      return ''
    }
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
  }

// DONE Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  return `[License](https://opensource.org/licenses/${license})`
}

// DONE Create a function that returns the license section of README
// If there is no license, return an empty string - license badge AND section should not appear on the readme.
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `## License
  
  This project is licensed under the ${license} license`
}

// We define the questions in index.js
// We use inquirer.prompt to ask the questions/collect
// We pass the collected response back on the index.js file) as an object to the generateMarkdown function.
// TODO: Create a function to generate markdown for README
function generateMarkdown(answersObj) {
  // best practice for names to match?
  return `# ${answersObj.title}\n
  ${renderLicenseBadge(answersObj.license)}
  ${renderLicenseSection(answersObj.license)}
  ${renderLicenseLink(answersObj.license)}
  ## Description \n${answersObj.description}\n
  ## Table of Contents \n${answersObj.tableOfContents}\n
  ## Installation \n${answersObj.howToInstall}\n
  ## Usage \n${answersObj.howToUse}\n
  ## Contributing \n${answersObj.projectCollaborators}\n
  ## Tests \n${answersObj.projectTests}\n
  ## Questions \n${answersObj.projectQuestions}\n
   `;
}
// ## License \n${answersObj.license}


export default generateMarkdown;
