function generateRM(answers) {
  return `
  <h1 align="center">${answers.projectTitle} </h1>
  
  <p align="center">
    <img src="https://img.shields.io/badge/license-${answers.license}-success" />
  </p>  
  
  <p align="center">
    <img src="https://img.shields.io/github/repo-size/${answers.username}/${answers.repoName}?style=plastic" />
    <img src="https://img.shields.io/github/languages/count/${answers.username}/${answers.repoName}?style=plastic" />
    <img src="https://img.shields.io/github/languages/top/${answers.username}/${answers.repoName}?style=plastic" />
    <img src="https://img.shields.io/github/last-commit/${answers.username}/${answers.repoName}?style=plastic" />
  </p>
  
  ## Description
  ❓ ${answers.description}

  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Application Repository](#Application Repository)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  🚨 ${answers.installation}

  ## Usage
  🚀 ${answers.usage}

  ## Application Repository
  :octocat: ${answers.repoName}

  ## License
  ![badge](https://img.shields.io/badge/license-${answers.license}-success)
  <br />
  This application is covered by the ${answers.license} license.

  ## Contributors
  👥 ${answers.contributors}

  ## Tests
  ✏️ ${answers.tests}

  ## Questions
  :question: ${answers.questions}<br />
    <br />
    :octocat: Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
    <br />
    📜 Feel free to email me with any questions: ${answers.email}<br /><br />

    _This README was generated with the power of 💞 by ✨[Professional README Generator](https://github.com/Govepitr/ProfessionalREADMEGenerator) 🤘 🤘 🤘_
  `;
}

module.exports = generateRM;
