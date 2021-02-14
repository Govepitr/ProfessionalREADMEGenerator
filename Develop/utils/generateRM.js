function generateRM(answers) {
  return `
  <h1 align="center">${answers.projectTitle} </h1>
  
  
  ## Description
  ❓ ${answers.description}

  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  🚨 ${answers.installation}

  ## Usage
  🚀 ${answers.usage}

  ## License
  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
  <br />
  This application is covered by the ${answers.license} license.

  ## Contributors
  👥 ${answers.contributors}

  ## Tests
  ✏️ ${answers.tests}

  ## Questions
  🔧 ${answers.questions}<br />
    <br />
    :octocat: Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
    <br />
    📜 Feel free to email me with any questions: ${answers.email}<br /><br />

    _This README was generated with the power of 💞 by [ProfessionalREADMEGenerator](https://govepitr.github.io/ProfessionalREADMEGenerator/) 🤘 🤘 🤘
  `;
}

module.exports = generateRM;
