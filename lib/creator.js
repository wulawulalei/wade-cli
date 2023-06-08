const inquirer = require('inquirer')

class Creator {
    constructor() {
        this.defaults = []
        this.features = []
    }
    async handlerPrompt() {
        const { preset } = await inquirer.prompt(this.defaults)
        if (preset) {
            // 选择自定义选择包
            const result = await inquirer.prompt(this.features)
            return { preset, ...result }
        } else {
            // 选择默认
            return { preset }
        }
    }
}

module.exports = Creator