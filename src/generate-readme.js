const genReadme = results =>{
    console.log(results)
    return `
    
# ${results.githubName}
    
     
## Description
${results.description}

## Table of Contents


## Email
${results.Email}

## Installation
${results.installation}

## Usage
${results.usage}

## Credits
${results.credit}

## License
${results.license}

## Test
${results.testing}

## Questions

`
}


module.exports = genReadme;