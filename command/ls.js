const packageInfo = require('../package')

const chalk = require('chalk')

const showList = ['name', 'version', 'description', 'author', 'url']

function ls() {
    Object.keys(packageInfo).forEach(key => {
        if (showList.includes(key)) {
            console.log(chalk `{bold ${key}}: {blueBright.italic ${packageInfo[key]}} `);
        }
    });
}

module.exports = ls