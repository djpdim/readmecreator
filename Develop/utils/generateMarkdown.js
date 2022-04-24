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
  ${renderLicenseBadge(data.license)}

  ## Description

  * ${data.description}

  ## Tample of Content

  * [Installation](#installation)
  
  * [Usage](#usage)
  
  * [Contributing](#contributing)

  * [Tests](#tests)

  * [License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  ${data.license}

  ## Badges
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${data.github}/${data.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${data.github}/${data.repo}?style=flat&logo=appveyor)
  
  Check out the badges hosted by [shields.io](https://shields.io/).

  ## Features
  ${data.features}

  ## Questions
  
  For any questions, please contact me with the information below:
 
  * GitHub: [@${data.github}](${data.github})
  * Email: [@${data.email}](${data.email})
`;
}

module.exports = generateMarkdown;
