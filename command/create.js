const inquirer = require('inquirer')

const fs = require('fs')

const path = require('path')

const PackageManager = require('../lib/packageManager')

const remove = require('../lib/remove')

const clearConsole = require('../lib/utils/clear-console')

const { log } = require('../lib/utils/log')

async function create(name) {
    const cwd = path.join(process.cwd(), name)

    if (fs.existsSync(cwd)) {
        clearConsole()
        const { choice } = await inquirer.prompt([{
            type: 'list',
            name: 'choice',
            message: 'Do you want to merge the local project with the same name',
            choices: [{
                name: 'YES',
                value: 'merge'
            }, {
                name: 'NO',
                value: 'overWrite'
            }]
        }])

        // 选择了覆盖则先删除掉
        if (choice === 'overWrite') {
            log(`removing file from ${cwd}`);
            remove(cwd)
        }

    }

    // 下载文件流程（选择npm还是yarn，是否需要eslint，balel等）
    const pm = new PackageManager()
    await pm.install(null, cwd)
}

module.exports = create