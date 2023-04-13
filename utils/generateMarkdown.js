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
    license = license.replace(/\s/g,'_').replace(/\./g,'');
    return badgeRefs[license];
}

function renderLicenseSection(license) {
    return `## License ${renderLicenseBadge(license)}\n${license == 'none' ? 'This project is not licensed  ' : `Licensed ${license}  `}\n`
}

function generateMarkdown(data) {
    data['install'] = data['installmethod'] === 'bash' ? `\`\`\`bash\n${data['install']}\n\`\`\`` : data['install'];
    return `# ${data['title']}\n${data['description']}\n## Installation\n${data['install']}\n___\n## Usage\n${data['use']}\n___\n## Testing\n${data['testing']}\n___\n## Contributing\n${data['contributing']}\n___\n${renderLicenseSection(data['license'])}\n`
}

module.exports = generateMarkdown;
