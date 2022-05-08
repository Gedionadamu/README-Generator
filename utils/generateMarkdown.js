// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// let badge = ""
// function renderLicenseBadge(data) {
//   if(license === "Apache") {
//     badge = "[License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)"
//   }
// }
// renderLicenseBadge()

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // data should have a license badge, license link, license section
  // render functions are going to be used here
  // you have to figure out why...
  return `

  # ${data.title}

  ${badge}

  ${data.discription}


# Table of contents

1. [Installation](#Installation)
2. [How to Use](#How-To-Use.)
3. [License](#License)
4. [Contributing Guidelines](#Contrubuting-Guidelines)  
5. [Tests](#Tests)
6. [Questions](#Questions)

# 1. Installation

  ${data.installation}

# How To Use.

  ${data.howto}

# License

  ${data.license}

# Contrubuting Guidelines

  ${data.contributing}

# Tests

  ${data.tests}


# Questions

  If you have any question please contact me using the following :-   
  Github :- ${data.github}   
  Email:- ${data.email}

`;  
}


module.exports = generateMarkdown;
