// function to generate markdown for README
function generateMarkdown(data) {

  // This is how readme will look like

  let markDown =
    `# ${data.title}

[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})

 ## Description 
 
 Here is a brief description of my project:
 
 ${data.description}`

  // This will add table of contents to the readme file
  markDown += `
## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)`

  // Installation section
  markDown += `
## Installation
 
To install necessary dependencies, run the following command:
 
      ${data.installation}`

  // Usage section
  markDown += `
## Usage 

You can use this applicaiton by running \`${data.usage}\`.`

  //License section
  markDown += `
## License
 
This project's license is licensed under the ${data.license} license.`

  //Contributing section
  markDown += `
## Contributing
 
For any contributions, please follow these guidelines:

 ${data.contributing}`

  //Tests section
  markDown += `
## Tests
 
 To run tests, run the following command:
 
      ${data.tests}`


  // Questions / About Developer section
  markDown += `
## Questions?

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. 
You can find more of my work at [https://github.com/${data.username}](https://github.com/${data.username})`;

  // Return markdown
  return markDown;
}

module.exports = generateMarkdown;
