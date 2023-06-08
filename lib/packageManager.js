const getCommand = require('./utils/getCommand')

const shouldUseTaoBao = require('./utils/shouldUseTaoBao')

const spawn = require('./spawn')

const PACKAGE_MANAGER_CONFIG = {
    npm: {
        install: ['install'],
    },
    yarn: {
        install: [],
    },
}

class PackageManager {
    constructor(answers) {
        this.answers = answers
    }
    async setConfig() {
        this.command = getCommand()
        await shouldUseTaoBao()
    }
    async install(command, url) {
        // await this.setConfig(url)
        // await spawn(this.command, [PACKAGE_MANAGER_CONFIG[this.command].install], { cwd: url })
    }
}

module.exports = PackageManager