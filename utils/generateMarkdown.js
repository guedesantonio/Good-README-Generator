// function to generate markdown for README
function generateMarkdown(data) {

  let licenseType;

  if (`${data.license}` === 'MIT License') {
    licenseType = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (`${data.license}` === 'GNU Lesser General Public License v3.0') {
    licenseType = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
  } else if (`${data.license}` === 'Mozilla Public License 2.0') {
    licenseType = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else if (`${data.license}` === 'GNU Affero General Public License v3.0') {
    licenseType = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
  } else if (`${data.license}` === 'The Unlicense') {
    licenseType = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  } else if (`${data.license}` === 'Apache License 2.0') {
    licenseType = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else {
    licenseType = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  
  return `# ${data.title}

  ${licenseBadge}

  ## Description
  ${data.description}

  ## Table of contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

`;
}

module.exports = generateMarkdown;
