import { response } from "../index.js";
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const license = response.projectLicense;
  console.log(license);
  return license;
  if (inputData = 'MIT') {
   return `## here is the link for MIT.`
  } else if (projectLicense = 'Other 2') {
    console.log('you selected Other 2, here is the image.') //
  } else if (projectLicense = 'Other 3') {
    console.log('you selected Other 3, here is the image') //return
  }
    else if (projectLicense = 'None') {
      console.log('you selected No License') //break?
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}


export default generateMarkdown;
export {renderLicenseBadge};

