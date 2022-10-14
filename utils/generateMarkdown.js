// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if(license !=="None"){
  return `<img src= "https://img.shields.io/badge/License-${license}-green.svg">`
}else{
  return "";
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== "None"){
    return `*[License](#license)`
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if(license !=="None"){
  return `## License
  
  This project is licensed under ${license}`
}else{
  return "";
}

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
       
  ## Description
  ${data.description}
  
  ## Table of Contents

  *[Installation](#installation)

  *[Usage](#usage)

  ${renderLicenseLink(data.license)}

  *[Contributing](#contributing)

  *[Test](#test)

  *[Questions](#questions)
  
  
  ## Installation

  ${data.installation}
  
  ## Usage

  ${data.usage}
  
  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.credit}
  
  ## Test

  ${data.testing}
  
  ## Questions

To see more of my projects, go to [${data.githubName}](https://github.com/${data.githubName})
If you have any questions, you can contact me at [${data.Email}](mailto:${data.Email})


`;
}

module.exports = generateMarkdown;
