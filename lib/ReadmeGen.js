class MarkDown {
    static renderLicenseBadge(license){
        const badge = {
            mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
            GNUGPLv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
        }
        return badge[license]
    }

    static renderLicenseLink(license){
        const licenseLinks = {
            mit: '[MIT](https://choosealicense.com/licenses/mit/)',
            isc: '[ISC](https://choosealicense.com/licenses/isc/)',
            GNUGPLv3: '[GNUPLv3](https://choosealicense.com/licenses/gpl-3.0/)',
        }
        return licenseLinks[license]
    }

    static generateReadMe(answers){
        return `
# ${answers.title}

${this.renderLicenseBadge(answers.license)}

## Table of Contents
- [Project description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contribution
${answers.contribution}

##Tests
${answers.test}

## Questions
${answers.email}
https://github.com/${answers.github}

## License
${this.renderLicenseLink(answers.license)}
        `
    }
}

module.exports = MarkDown