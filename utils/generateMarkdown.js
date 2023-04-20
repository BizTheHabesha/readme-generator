// badge refrences from shields.io including the badge svg and a link, formatted to be used in a markdown file.
const badgeRefs = {
    Apache_20: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    BSL_10:'[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    BSD_3_Clause: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    BSD_2_Clause: '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
    Creative_Commons_0_10: '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)',
    GNU_GPLv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    IBM_Public_License_Version_10: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)',
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    none: '![License: none](https://img.shields.io/badge/license-none-informational)'
}

function renderLicenseBadge(license) {
    // replace spaces with underscore and remove periods all together so badgeRefs can find the badge
    license = license.replace(/\s/g,'_').replace(/\./g,'');
    // return the badge and its link from badgeRefs object.
    return badgeRefs[license];
}

function renderLicenseSection(license) {
    // render the heading including the badge from reanderLicenseBadge(). Display different content based on if there is a license or not
    return `## License ${renderLicenseBadge(license)}\n${license == 'none' ? 'This project is not licensed  ' : `Licensed ${license}  `}\n`
}
function renderQuestionsSection(unformattedQuestions, email, username){
    // redner the heading including the questions sections formatted with the provided email and username. Questions section will be left unformatted if the '+username' and '+email' are not included.
    return `## Questions\n${unformattedQuestions.replace(/\+email/g,`[${email}](mailto:${email})`).replace(/\+username/g,`[${username}](https://github.com/${username})`)}`;
}
// transform an object into a string to be used in a markdown file
function generateMarkdown(data) {
    // if the user chose to put their instructions in bash, display the instructions in a bash code block
    data['install'] = data['installmethod'] === 'bash' ? `\`\`\`bash\n${data['install']}\n\`\`\`` : data['install'];
    // add hashtags for headings, underscores for horizontal breaks, and get the user specified data. Use renderLicenseSection for the license section specifically.
    const TOCSection = `## Table of Contents\n- [${data['title']}](#${data['title'].toLowerCase().replace(/\s/g,'-')})\n  - [Installation](#installation)\n  - [Usage](#usage)\n  - [Testing](#testing)\n  - [Contributing](#contributing)\n  - [License](#license)`;
    const installSection = `## Installation\n${data['install']}`.replace(/\+n/g, '  \n');
    const usageSection = `## Usage\n${data['use']}`.replace(/\+n/g, '  \n');
    const testSection = `## Testing\n${data['testing']}`.replace(/\+n/g, '  \n');
    const contributeSection = `## Contributing\n${data['contributing']}`.replace(/\+n/g, '  \n');
    const questionsSection = `${renderQuestionsSection(data['questions'], data['email'], data['username'])}`.replace(/\+n/g, '  \n')
    const licenseSection = `${renderLicenseSection(data['license'])}`;
    return `# ${data['title']}\n${data['description']}\n${TOCSection}\n___\n${installSection}\n___\n${usageSection}\n___\n${testSection}\n___\n${contributeSection}\n___\n${questionsSection}\n___\n${licenseSection}\n`
}
// export the the generateMarkdown function so we can use it elsewhere.
module.exports = generateMarkdown;
