// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Description

  * ${data.description}

  #

  ## Link to the app
  
  Link to the github app:[${data.repo}](https://github.com/${data.github}/${data.repo})

  Link to the github page:[${data.repo}](https://${data.github}.github.io/${data.repo}/)

  

  ## Tample of Content

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Features](#features)
  * [Questions](#questions)

  

  ## Installation
  * ${data.installation}

  

  ## Usage
  * ${data.usage}

  

  ## Credits
  * ${data.credits}

  

  ## License
  * ${data.license}

  #

  ## Badges
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${data.github}/${data.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${data.github}/${data.repo}?style=flat&logo=appveyor)
  
  Check out the badges hosted by [shields.io](https://shields.io/).

  

  ## Features
  ${data.features}

  #

  ## Questions
  
  For any questions, please contact me to the informations below:
 
  * GitHub: [${data.github}](https://github.com/${data.github})
  * Email: [${data.email}](mailto:${data.email})

  [Top](#description)
`;
}

module.exports = generateMarkdown;
