// TODO: Create a function to generate markdown for README
 generateMarkdown = data => {
  return `
  ![GitHub](https://img.shields.io/github/license/${data.username}/${data.repo})
  # ${data.title}
  

  ## Table of Contents
  * [Title](#title)
  * [Descrition](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributor](#contributing)
  * [License](#license)
  * [Tests](#tests)
  * [questions](#questions)

  ## Description
  ${data.description}

  ## Installation Instructions
  ${data.installation}

  ## Usage Information
  ${data.usage}

  
  ## Credits
  ${data.credit}

  ## License
  This repo is cover under the  [${data.license}](https://opensource.org/licenses/${data.license}) License
  

  ## Tests
  ${data.test}

  ## Questions
  For more info about the README generator, visit my github page in the following link:
  [Github Profile](https://github.com/${data.username}) <br/>
  Or you can reach out to me via email: ${data.email}
`;
}

module.exports = generateMarkdown;
