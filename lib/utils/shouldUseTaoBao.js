const getCommand = require('./getCommand')

const exec = require('../exec')

const inquirer = require('inquirer')

const { yellow } = require('./log')

const { taobao } = require('./registries')

function hasTaoBao(url) {
    return /taobao/.test(url)
}

module.exports = async url => {
    const command = getCommand()

    const comList = ['config', 'get', 'registry']

    let userCurrent

    try {
        userCurrent = await exec(`${command} ${comList.join(' ')}`)
    } catch (error) {
        comList = comList.pop().push('npmRegistryServer')
        try {
            userCurrent = await exec(`${command} ${comList.join(' ')}`)
        } catch (e) {
            userCurrent = false
        }
    }

    if (hasTaoBao(userCurrent)) {
        return taobao
    }

    const { useTaoBao } = await inquirer.prompt([{
        type: 'list',
        name: 'useTaoBao',
        message: yellow(`Do you want to replace the ${command} registry with taobao?\n` + 'It can install faster then before.'),
        choices: [{
            name: 'Yes',
            value: 1
        }, {
            name: 'No',
            value: 0
        }]
    }])

    if (useTaoBao) {
        await exec(`${command} config set registry ${taobao}`)
        return taobao
    } else {
        return userCurrent
    }
}