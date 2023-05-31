const inquirer = require('inquirer')

const frame = [{
        name: 'vue2'
    },
    { name: 'vue3' },
    {
        name: ' react'
    }
]

const questions = [{
    type: 'list',
    name: 'frame',
    message: 'choice project type',
    choices: frame
}]

const { log, error } = require('../lib/utils/log')

async function create(name) {
    await inquirer.prompt(questions, {})
        .then(answers => {
            log(answers);
        })
        .catch(e => {
            error(e)
        })
}

module.exports = create