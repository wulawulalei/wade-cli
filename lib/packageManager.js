const fs = require('fs')

const hasYarn = require('./utils/hasYarn')

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
    constructor(cwd) {
        this.cwd = cwd
    }
    async setConfig() {
        this.bin = hasYarn(process.cwd()) ? 'yarn' : 'npm'
        await shouldUseTaoBao()
    }
    async install(command, url) {
        await this.setConfig(url)
        await spawn(this.bin, [PACKAGE_MANAGER_CONFIG[this.bin].install], { cwd: url })
    }
}

module.exports = PackageManager