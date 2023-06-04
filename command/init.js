const { startLoad, stopLoad } = require('../lib/utils/loading')

const path = require('path')

const spawn = require('../lib/spawn')

const inquirer = require('inquirer')

const clear = require('../lib/utils/clear-console')

const { dfProject } = require('../data.json')

const { error, green } = require('../lib/utils/log')

function download(name, options) {
    const { url, branch } = options
    const cwd = path.join(process.cwd(), name)

    startLoad(`start download project ${name}`)
    return new Promise(async(resolve, reject) => {
        const result = await spawn('git', ['clone', url, name])
        if (result) {
            error(result)
            stopLoad()
            return false
        }
        green(`${name} download successful!!!`)
        if (branch) {
            await spawn('git', ['checkout', branch], { cwd })
        }
        await spawn('git', ['init'], { cwd })
        await spawn('npm', ['install'], { cwd })
        return resolve(true)
    })
}

async function chooseTemplate() {
    return await inquirer.prompt([{
        type: 'list',
        name: 'template',
        message: 'choice project template',
        choices: Object.keys(dfProject)
    }])
}

async function init(name, options) {
    const { template } = options
    let git = template && { url: template }
    clear()
    if (!template) {
        const answer = await chooseTemplate()
        git = dfProject[answer.template]
    }
    await download(name, git)
    stopLoad()
    process.exit()
}
module.exports = init