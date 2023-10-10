// function to generate markdown for README
// funcition to generate the license to be used in the readme.md file
const renderLicenseBadge = (license) =>  {
  if (license !== 'None'){
  return `![${license}](https://img.shields.io/badge/${license}-blueviolet)`;  }
  return ``
}
// function that returns a license link from user input and generates the correct badge based on their selection

const renderLinkToLicense = (license) => {
  if (license !=="None"){
    return `\n* [License](#license)\n`;
    }
  return "";
  };










function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ### Description
  ${data.description}

  ### Table Of Content

  * [Installation](#installation)

  * [Usage](#usage)

  ${renderLinkToLicense(data.license)}

  * [Contributing](#contributing)
  * [Test](#tests)
  * [Questions](#questions)
  * 
  ## Installation
  
  To install necessary npm dependencies, run this command:

  !*!*!*
  ${data.installation}  
  !*!*!*

  ## Usage
  ${data.usage}

  ## License
  
  This project is licensed under the ${data.license} license.

  ## Contributing

  ${data.contributing}

  ## Tests
  
  Run the follwoing commands to run tests:
  
  !*!*!*
  ${data.test}  
  !*!*!*

  ### Questions
  If you have any questions about the repo or want to open a issue, please contact me 
  at my GitHub account at https://github.com/${data.github}. 
  
  You can also email me directly at ${data.email}.


  
  



`;
}

module.exports = generateMarkdown;
