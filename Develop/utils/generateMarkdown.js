// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
  renderLicenseBadge = (license) => {
    if (license){
      return `License](https://img.shields.io/badge/License-${data.license}-blue.svg)]'License Badge')`
    }else {
      return '';
    }

  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license){
    return `[License](https://opensource.org/licenses/${data.license})`
  }else{
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  * [Title](#title)
  * [Descrition](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributor](#contributing)
  * /*License*/
  * [Tests](#tests)
  * [questions](#questions)
  

  

  ## Description
  ${data.description}

  

  ## Installation Instructions
  ${data.installation}

  ## Usage Information
  ${data.usage}

  ## License
  ${data.license}

  ## People who contributed in making this app
  ${data.contributor}

  ## Tests
  ${data.test}

  ## Questions
  For more assistance about the README generator, visit my github page in the following link:
  [Github Profile](https://github.com/${data.username})
  Or you can reach out to me via email: ${data.email}
`;
}

module.exports = generateMarkdown;
