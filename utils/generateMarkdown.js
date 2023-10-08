// function to generate markdown for README
// funcition to generate the license to be used in the readme.md file
function renderLicenseBadge(license) {
  if (license !== 'None'){
  return `![${license}](https://img.shields.io/badge/${license}-blueviolet)`;  }
  return ``
}
// function that returns a license link from user input and generates the correct badge based on their selection







function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}


`;
}

module.exports = generateMarkdown;
