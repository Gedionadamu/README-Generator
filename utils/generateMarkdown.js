// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {

  return `![${license}](https://img.shields.io/badge/license-${license}-green.svg)`

}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  var link = ""
  if (`${license}` === "Apache") {
    link = "https://opensource.org/licenses/Apache-2.0"
  }
  else if (`${license}` === "BSD") {
    link = "https://opensource.org/licenses/BSD-3-Clause"
  }
  else if (`${license}` === "Creative_Commons") {
    link = "http://creativecommons.org/licenses/by/4.0/"
  }
  else if (`${license}` === "Eclipse") {
    link = "https://www.eclipse.org/legal/epl-2.0/"
  }
  else if (`${license}` === "GNU") {
    link = "http://www.gnu.org/licenses/agpl-3.0"
  }
  else if (`${license}` === "IBM") {
    link = "https://opensource.org/licenses/IPL-1.0"
  }
  else if (`${license}` === "MIT") {
    link = "https://mit-license.org/"
  }
  else if(`${license}` === "Mozzilla"){
    link = "https://opensource.org/licenses/MPL-2.0"
    }
    else if(`${license}` === "Zlib"){
      link = "https://opensource.org/licenses/Zlib"
      }
  else {
    link = ""
  }
  return `[${license}](${link})`
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // data should have a license badge, license link, license section
  // render functions are going to be used here
  
  return `

  # ${data.title}

  ${renderLicenseLink(data.license)}   
  ${renderLicenseBadge(data.license)}  

## Discription

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

To install necessary dependencies, run the following command:
  ${data.howto}

# License

  ## This Project is licensed under ${data.license} license.

  

# Contrubuting Guidelines

  ${data.contributing}

# Tests

To run test, run the following comands :-  

   ${data.tests}


# Questions

  If you have any question please contact me using the following :-   
  Github :- ${data.github}   
  Email:- ${data.email}

`;
}


module.exports = generateMarkdown;
