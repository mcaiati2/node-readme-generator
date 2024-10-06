// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
      return ''
    }
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  return `[License](https://opensource.org/licenses/${license})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string - license badge AND section should not appear on the readme.
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `## License
  
  This project is licensed under the ${license} license`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answersObj) {
  return `# ${answersObj.title}
  ${renderLicenseBadge(answersObj.license)}
  ${renderLicenseSection(answersObj.license)}
  ${renderLicenseLink(answers.Obj.license)}
`;
}

export default generateMarkdown;
export {renderLicenseBadge};


