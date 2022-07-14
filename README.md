# Readme Gen

## Description

Every good project needs a quality README with information about the app - what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project.

This is a command-line application that runs with Node.js that dynamically generates a README.md file based on input about your project. Check out the [README.md](./Develop/README.md) in this repo as an example.

## Link to the app

Link to the github app: [readmecreator](https://github.com/djpdim/readmecreator)

Link to the github page: [readmecreator](https://djpdim.github.io/readmecreator/)

## Tample of Content

-   [Installation](#installation)
-   [Usage](#usage)
-   [Credits](#credits)
-   [License](#license)
-   [Features](#features)
-   [Questions](#questions)

## Installation

![demogif](./Develop/files/demo.gif)

-   Link to the [Demo.](https://drive.google.com/file/d/1bo-kusByNAMtACvNAxDze9t32c7C3c5j/view)

To generate your own README, git clone the repo from the root folder to your local folder.

Run npm install in order to install the following npm package dependencies as specified in the package.json:

Inquirer will prompt you for your inputs from the command line.
The application will start by running node index.js in the command line.

Answer the prompts in your command line to generate the README.

After answering all the prompts, your README file will be named 'README.md' and will be ready for you at the root of the repo.

The README has some automatically generated badges for your repo courtesy of shields.io and will include your email and your profile to GitHub.

## Usage

When you run node index.js, the application uses the inquirer package to prompt you in the command line with a series of questions about your GitHub and about your project.

The application then takes your responses and add your Github profile. From there, the application will generate markdown and a table of contents for the README conditionally based on your responses to the Inquirer prompts (so, if you don't answer the optional questions, such as Installation, an Installation section will not be included in your README). The README will also include badges for your GitHub repo.

Finally, fs.writeFile is used to generate your project's README.md file. Check out the README.md in this repo as an example on the final output.

## Credits

-   TA's and Tutors

## License

-   MIT

## Badges

![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/djpdim/readmecreator?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/djpdim/readmecreator?style=flat&logo=appveyor)

Check out the badges hosted by [shields.io](https://shields.io/).

## Features

There is a top button.

## Questions

For any questions, please contact me to the informations below:

-   GitHub: [djpdim](https://github.com/djpdim)
-   Email: [dimospagkas@yahoo.gr](mailto:dimospagkas@yahoo.gr)

[Top](#description)
