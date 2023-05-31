const chalk = require('chalk')
    // 参数为string不为object

const consoleFn = {}

const format = (msg, color) => msg instanceof Object ? msg : chalk[color](msg)

const colors = ['red', 'yellow', 'green', 'blue']

colors.map(color => consoleFn[color] = (msg) => console.log(format(msg, color)))

consoleFn.log = msg => {
    console.log(format(msg, 'blueBright'))
}

consoleFn.warn = msg => {
    console.log(chalk.bgYellow.black('WARN') + ':' + format(msg, 'yellow'))
}

consoleFn.error = msg => {
    if (msg instanceof Error) {
        console.error(msg)
        return
    }
    console.log(chalk.bgRed.black('ERROR') + ':' + format(msg, 'red'))
}

module.exports = consoleFn