// function to generate markdown for README
function generateMarkdown(data) {
  // Generate Table of Contents conditionally based on userResponses
  let TableOfContents = `## Table of Contents`;

  if (data.installation !== '') {
    TableOfContents += `
 * [Installation](#installation)` };

  if (data.usage !== '') {
    TableOfContents += `
 * [Usage](#usage)` };

  if (data.contributing !== '') {
    TableOfContents += `
 * [Contributing](#contributing)` };

  if (data.tests !== '') {
    TableOfContents += `
 * [Tests](#tests)` };


  // This is how readme will look like
  let markDown =

    //license badge
    `[![License](https://img.shields.io/badge/${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})

    # ${data.title}

 ## Description 
 
 Here is a brief description of my project:
 
 ${data.description}`

  // This will add table of contents to the readme file
  markDown += TableOfContents;

  // Optional Installation section
  if (data.installation !== '') {

    markDown +=

      `## Installation
 
These are the steps needed to install the project:
 
 ${data.installation}`

  };
  // sage section
  if (data.usage !== '') {

    markDown +=

      `## Usage 
 ${data.usage}`
  };
 ` ## License
 
  This project's license is ${data.license}
  `;

  // Optional Contributing section
  if (data.contributing !== '') {

    markDown +=

`## Contributing
 
For any contributions, please follow these guidelines:

 ${data.contributing}`
  };

  // Optional Tests section
  if (data.tests !== '') {

    markDown +=
      `
 
 ## Tests
 
 *Tests for application and how to run them:*
 
 ${userResponses.tests}`
  };

  // Questions / About Developer section
  let devInfo =
    `
 ---
 
 ## Questions?

 For any questions, please contact me with the information below:

 GitHub: [github.com/${data.username}](${data.url})`;

  // If GitHub email is not null, add to Developer section
  if (data.email !== null) {

    devInfo +=
      `
 Email: ${data.email}`};

  // Add developer section to markdown
  markDown += devInfo;

  // Return markdown
  return markDown;
}

module.exports = generateMarkdown;
